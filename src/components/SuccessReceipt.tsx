
import React from "react";
import { CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface SuccessReceiptProps {
  phoneNumber: string;
  amount: string;
}

const SuccessReceipt = ({ phoneNumber, amount }: SuccessReceiptProps) => {
  const navigate = useNavigate();
  
  const handleBackToHome = () => {
    navigate("/", { replace: true });
  };
  
  // Format the amount with commas for thousands and add decimal places
  const formattedAmount = new Intl.NumberFormat('en-NG', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(Number(amount));
  
  return (
    <div className="min-h-screen bg-white p-4 flex flex-col items-center">
      <div className="w-full max-w-md flex flex-col items-center">
        {/* Red circle with check mark */}
        <div className="w-24 h-24 rounded-full bg-red-600 flex items-center justify-center mb-6 mt-10">
          <CheckIcon className="text-white w-12 h-12" />
        </div>
        
        {/* Success message */}
        <h2 className="text-2xl font-bold text-red-600 mb-1 text-center">Successful</h2>
        <p className="text-xl font-bold text-black mb-1 text-center">N{formattedAmount}</p>
        <p className="text-xl font-bold text-black mb-6 text-center">Successfully added</p>
        
        {/* Phone number details */}
        <p className="text-lg font-medium text-center mb-1">TO:</p>
        <p className="text-lg font-bold text-center mb-6">{phoneNumber}</p>
        
        {/* Additional note */}
        <p className="text-center text-gray-700 mb-10 max-w-xs">
          The Sportybet account bearing the above Phonenumber will receive the funds immediately.
        </p>
        
        {/* Return home button */}
        <Button 
          onClick={handleBackToHome}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 mt-6"
        >
          GO TO HOME
        </Button>
      </div>
    </div>
  );
};

export default SuccessReceipt;
