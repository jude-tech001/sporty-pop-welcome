
import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PaymentConfirmation from "@/components/PaymentConfirmation";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email, phoneNumber } = location.state || {};
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handlePaymentConfirm = () => {
    setShowConfirmation(true);
  };

  if (showConfirmation) {
    return <PaymentConfirmation email={email || ""} phoneNumber={phoneNumber || ""} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button onClick={() => navigate(-1)} className="mr-2">
          <ArrowLeft className="w-6 h-6 text-sportybet-red" />
        </button>
        <h1 className="text-xl font-bold text-sportybet-red">Payment</h1>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-sportybet-red">Wire Transfer</h2>
          <button onClick={() => navigate(-1)} className="text-gray-400">
            ✕
          </button>
        </div>
        
        <div className="divide-y divide-gray-200">
          <div className="py-3 flex justify-between">
            <div className="flex items-center">
              <span className="text-green-600 mr-2">💹</span>
              <span className="text-sportybet-red">Bank Name:</span>
            </div>
            <span className="font-medium">Paga</span>
          </div>
          
          <div className="py-3 flex justify-between">
            <div className="flex items-center">
              <span className="text-green-600 mr-2">💹</span>
              <span className="text-sportybet-red">Account Number:</span>
            </div>
            <span className="font-medium">3377894102</span>
          </div>
          
          <div className="py-3 flex justify-between">
            <div className="flex items-center">
              <span className="text-green-600 mr-2">💹</span>
              <span className="text-sportybet-red">Name:</span>
            </div>
            <span className="font-medium">Code agent (jude) </span>
          </div>
          
          <div className="py-3 flex justify-between">
            <div className="flex items-center">
              <span className="text-amber-600 mr-2">💰</span>
              <span className="text-sportybet-red">Amount:</span>
            </div>
            <span className="font-bold text-sportybet-red">₦10,800.00</span>
          </div>
        </div>
        
        <div className="mt-6">
          <Button
            className="w-full bg-sportybet-red hover:bg-sportybet-darkred text-white font-bold py-3"
            onClick={handlePaymentConfirm}
          >
            I HAVE PAID
          </Button>
        </div>
        
        <p className="text-center text-sportybet-red mt-4">
          We will send your Password to this Your Email or Phone Number below, immediately Payment is confirmed!
        </p>
        
        <div className="mt-2 p-3 bg-gray-100 rounded-md">
          <p className="text-center text-gray-600">
            {email || "email@example.com"}<br />
            {phoneNumber || "0123456789"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
