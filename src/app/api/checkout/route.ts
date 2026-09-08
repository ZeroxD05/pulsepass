import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "";
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET || "";
const base = process.env.NODE_ENV === "production" ? "https://api-m.paypal.com" : "https://api-m.sandbox.paypal.com";

async function generateAccessToken() {
  const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString("base64");
  const response = await fetch(`${base}/v1/oauth2/token`, {
    method: "POST",
    body: "grant_type=client_credentials",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  const data = await response.json();
  return data.access_token;
}

export async function POST(request: Request) {
  const session = await getServerSession();
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email }
  });

  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  try {
    const { action, productId, orderId } = await request.json();

    if (action === "create") {
      // Fetch product to get the real price
      const product = await prisma.product.findUnique({
        where: { id: productId }
      });

      if (!product) {
        return NextResponse.json({ error: "Product not found" }, { status: 404 });
      }

      const accessToken = await generateAccessToken();
      const response = await fetch(`${base}/v2/checkout/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          intent: "CAPTURE",
          purchase_units: [
            {
              reference_id: product.id,
              amount: {
                currency_code: "USD",
                value: product.price.toFixed(2),
              },
            },
          ],
        }),
      });

      const order = await response.json();
      return NextResponse.json(order);
    } 
    
    if (action === "capture") {
      const accessToken = await generateAccessToken();
      const response = await fetch(`${base}/v2/checkout/orders/${orderId}/capture`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const orderData = await response.json();

      if (orderData.status === "COMPLETED") {
        // Record the transaction
        const referenceId = orderData.purchase_units[0].reference_id;
        
        await prisma.transaction.create({
          data: {
            paypalOrderId: orderId,
            amount: parseFloat(orderData.purchase_units[0].amount.value),
            status: "COMPLETED",
            buyerId: user.id,
            productId: referenceId
          }
        });

        return NextResponse.json({ success: true, orderData });
      }

      return NextResponse.json({ error: "Payment not completed" }, { status: 400 });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });

  } catch (error) {
    console.error("PayPal API Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
