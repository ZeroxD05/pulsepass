"use client";

import { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useRouter } from "next/navigation";

export default function CheckoutButton({ productId, paypalClientId }: { productId: string, paypalClientId: string }) {
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  if (!paypalClientId) {
    return (
      <div className="text-red-500 text-sm text-center p-4 border border-red-200 bg-red-50 rounded-lg">
        PayPal is not configured. Missing Client ID.
      </div>
    );
  }

  return (
    <div className="w-full relative z-0">
      {errorMsg && (
        <div className="mb-4 text-red-500 text-sm text-center p-3 border border-red-200 bg-red-50 rounded-lg">
          {errorMsg}
        </div>
      )}
      
      <PayPalScriptProvider options={{ clientId: paypalClientId, currency: "USD" }}>
        <PayPalButtons
          style={{ layout: "vertical", color: "blue", shape: "rect", label: "checkout" }}
          createOrder={async () => {
            setErrorMsg("");
            try {
              const res = await fetch("/api/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  action: "create",
                  productId: productId,
                }),
              });
              
              const orderData = await res.json();
              if (orderData.id) {
                return orderData.id;
              } else {
                throw new Error(orderData.error || "Could not initiate PayPal checkout");
              }
            } catch (err: any) {
              setErrorMsg(err.message);
              throw err;
            }
          }}
          onApprove={async (data, actions) => {
            try {
              const res = await fetch("/api/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  action: "capture",
                  orderId: data.orderID,
                }),
              });
              
              const captureData = await res.json();
              
              if (captureData.success) {
                // Refresh the page to show the "Download" button
                router.refresh();
              } else {
                setErrorMsg(captureData.error || "Payment failed");
              }
            } catch (err: any) {
              setErrorMsg("Payment capture failed. Please contact support.");
            }
          }}
          onError={(err) => {
            setErrorMsg("PayPal encountered an error. Please try again.");
            console.error(err);
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
}
