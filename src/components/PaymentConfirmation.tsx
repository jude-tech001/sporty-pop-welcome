
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";
import { Button } from "@/components/ui/button";

interface PaymentConfirmationProps {
  email: string;
  phoneNumber: string;
}

const PaymentConfirmation = ({ email, phoneNumber }: PaymentConfirmationProps) => {
  const [status, setStatus] = useState<"loading" | "notConfirmed">("loading");
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate payment verification delay
    const timer = setTimeout(() => {
      setStatus("notConfirmed");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleTryAgain = () => {
    navigate("/");
  };

  if (status === "loading") {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-white">
        <div className="w-16 h-16 rounded-full border-4 border-gray-200 relative flex items-center justify-center">
          <div className="w-14 h-14 rounded-full border-t-4 border-sportybet-red animate-spin absolute"></div>
        </div>
        <p className="mt-4 text-gray-600 text-lg">Confirming payment please wait...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="text-center">
          <div className="text-red-500 text-4xl mb-4">❌</div>
          <h2 className="text-2xl font-bold text-red-500 mb-6">Payment Not Confirmed</h2>
          
          <p className="mb-6 text-gray-600">
            We could not confirm your payment to the account details provided. 
            Please make sure you've transferred the correct amount to the right account.
          </p>
          
          <div className="bg-gray-100 p-4 rounded-md mb-6">
            <div className="mb-2">
              <span className="font-medium">Email:</span> {email}
            </div>
            <div>
              <span className="font-medium">Phone Number:</span> {phoneNumber}
            </div>
          </div>
          
          <Button 
            className="w-full bg-sportybet-red hover:bg-sportybet-darkred text-white font-bold py-3"
            onClick={handleTryAgain}
          >
            Try Again
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
