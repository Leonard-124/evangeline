
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PaystackButton = ({ user }) => {
  const navigate = useNavigate();
  const [paystackLoaded, setPaystackLoaded] = useState(false);

  // Load Paystack script when component mounts
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    script.onload = () => setPaystackLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // cleanup
    };
  }, []);

  const handlePayment = () => {
    if (!paystackLoaded) {
      alert("Payment system is still loading, please try again.");
      return;
    }
    if (!user?.email) {
      alert("Please log in first");
      return;
    }

    const paystack = window.PaystackPop(); // ✅ no "new"
    paystack.newTransaction({
      key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
      email: user.email,
      amount: 19900, // kobo/cents ($1.99 if in NGN)
      onSuccess: async (transaction) => {
        console.log("✅ Payment success:", transaction);

        try {
          const res = await fetch("/api/paystack/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ reference: transaction.reference }),
          });

          const data = await res.json();
          if (data.success) {
            navigate("/premium-service");
          } else {
            alert("Verification failed ❌");
          }
        } catch (err) {
          console.error("Verification error:", err);
          alert("Server error ❌ Try again later.");
        }
      },
      onCancel: () => {
        alert("Payment canceled ❌");
      },
    });
  };

  return (
    <button
      onClick={handlePayment}
      disabled={!paystackLoaded}
      className={`px-4 py-2 rounded-lg text-white ${
        paystackLoaded ? "bg-green-600 hover:bg-green-700" : "bg-gray-400"
      }`}
    >
      {paystackLoaded ? "Pay $1.99 to Unlock" : "Loading Payment..."}
    </button>
  );
};

export default PaystackButton;


