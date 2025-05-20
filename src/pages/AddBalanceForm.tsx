
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Home, DollarSign, MessageSquare } from "lucide-react";
import LoadingScreen from "@/components/LoadingScreen";
import SuccessReceipt from "@/components/SuccessReceipt";
import WarningBanner from "@/components/WarningBanner";

const AddBalanceForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPhoneNumber, setConfirmPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
  
  const handleAddBalance = () => {
    if (!phoneNumber || !confirmPhoneNumber || !amount) {
      return; // Don't proceed if fields are empty
    }
    
    if (phoneNumber !== confirmPhoneNumber) {
      return; // Don't proceed if phone numbers don't match
    }
    
    // Show loading screen
    setIsLoading(true);
    
    // After 5 seconds, show success screen
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 5000);
  };
  
  const handleBackToHome = () => {
    navigate("/");
  };
  
  const amountOptions = [
    "500000", "100000", "200000", "500000", "100000", "200000"
  ];
  
  // If loading, show loading screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-white">
        <div className="w-16 h-16 rounded-full border-4 border-gray-200 relative flex items-center justify-center">
          <div className="w-14 h-14 rounded-full border-t-4 border-red-600 animate-spin absolute"></div>
        </div>
        <p className="mt-4 text-gray-600 text-lg">Balance adding in progress...</p>
      </div>
    );
  }
  
  // If success, show success receipt
  if (isSuccess) {
    return <SuccessReceipt phoneNumber={phoneNumber} amount={amount} />;
  }
  
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-white p-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleBackToHome}
            className="mr-2"
          >
            &lt;
          </Button>
          <span className="font-bold text-red-600">Add Balance</span>
        </div>
        <div className="flex-1"></div>
        <div className="text-red-600 text-sm font-medium">The official</div>
      </div>
      
      {/* Warning Banner */}
      <WarningBanner />
      
      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col items-center">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-6 text-center text-red-600">Welcome!</h1>
          
          <Input
            type="tel"
            placeholder="Sportybet Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="mb-4 border-2 border-red-100"
            required
          />
          
          <Input
            type="tel"
            placeholder="Confirm Sportybet Phone Number"
            value={confirmPhoneNumber}
            onChange={(e) => setConfirmPhoneNumber(e.target.value)}
            className="mb-4 border-2 border-red-100"
            required
          />
          
          <select 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full mb-5 border-2 border-red-100 rounded-md px-3 py-2 h-10 text-base focus:outline-none focus:border-red-600"
            required
          >
            <option disabled value="">--Select an amount--</option>
            {amountOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          
          <Button 
            onClick={handleAddBalance}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3"
          >
            ADD BALANCE
          </Button>
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 p-3 flex justify-around">
        <div 
          className="flex flex-col items-center text-red-600 cursor-pointer"
          onClick={handleBackToHome}
        >
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1">Home</span>
        </div>
        <div 
          className="flex flex-col items-center text-red-600 cursor-pointer"
          onClick={() => window.open('https://www.sportybet.com/ng/m/', '_blank')}
        >
          <DollarSign className="w-6 h-6" />
          <span className="text-xs mt-1">Sportybet</span>
        </div>
        <div 
          className="flex flex-col items-center text-red-600 cursor-pointer"
          onClick={() => window.open('https://t.me/bluepayuser_telegram_channel', '_blank')}
        >
          <MessageSquare className="w-6 h-6" />
          <span className="text-xs mt-1">Telegram</span>
        </div>
      </div>
    </div>
  );
};

export default AddBalanceForm;
