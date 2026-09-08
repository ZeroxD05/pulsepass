import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import Link from "next/link";
import CheckoutButton from "./CheckoutButton";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export default async function ProductPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const session = await getServerSession();
  
  const product = await prisma.product.findUnique({
    where: { id: params.id },
    include: { seller: { select: { name: true } } }
  });

  if (!product) {
    redirect("/");
  }

  let hasPurchased = false;
  let user = null;

  if (session?.user?.email) {
    user = await prisma.user.findUnique({
      where: { email: session.user.email },
      include: {
        purchases: {
          where: { productId: product.id, status: "COMPLETED" }
        }
      }
    });
    if (user && user.purchases.length > 0) {
      hasPurchased = true;
    }
  }

  const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-8">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-blue-500 hover:text-blue-400 w-fit">
          <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Back to PulsePass Home
        </Link>
        
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-200 dark:bg-gray-800">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={product.imageUrl || ""} alt={product.title} className="w-full h-full object-cover" />
          </div>
          
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-2xl font-bold">{product.title}</h1>
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">${product.price.toFixed(2)}</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">By {product.seller?.name || "Unknown"} • {product.category}</p>
              <div className="mt-6 mb-8 text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                {product.description}
              </div>
            </div>

            <div className="mt-4 border-t border-gray-100 dark:border-gray-800 pt-6">
              {!session ? (
                <Link 
                  href={`/login?callbackUrl=/product/${product.id}`}
                  className="block w-full text-center bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-4 rounded-lg transition-colors text-sm shadow-sm"
                >
                  Log in to purchase
                </Link>
              ) : hasPurchased ? (
                <div className="flex flex-col gap-3">
                  <div className="bg-green-50 border border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-900/50 dark:text-green-400 p-4 text-sm text-center rounded-lg font-medium">
                    You own this product
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors text-sm shadow-sm">
                    Download Files
                  </button>
                </div>
              ) : product.sellerId === user?.id ? (
                <div className="bg-gray-50 border border-gray-200 text-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 p-4 text-sm text-center rounded-lg font-medium">
                  This is your own product
                </div>
              ) : (
                <CheckoutButton 
                  productId={product.id} 
                  paypalClientId={PAYPAL_CLIENT_ID} 
                />
              )}
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-4">
          <Link href="/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-400 bg-gray-900 border border-gray-800 rounded-lg hover:text-white hover:bg-gray-800 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
