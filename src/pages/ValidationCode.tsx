
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Home, DollarSign, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import WarningBanner from "@/components/WarningBanner";

const ValidationCode = () => {
  const [validationCode, setValidationCode] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const correctCode = "SportAdd2020CODE00Q";
  
  const handleValidate = () => {
    if (validationCode === correctCode) {
      // Correct code, navigate to add balance form
      navigate("/add-balance-form");
    } else {
      // Incorrect code, show error toast
      toast({
        title: "Incorrect Code",
        description: "The validation code you entered is incorrect.",
        variant: "destructive",
      });
    }
  };
  
  const handleBackToHome = () => {
    navigate("/");
  };
  
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
          <span className="font-bold text-red-600">Validation</span>
        </div>
        <div className="flex-1"></div>
      </div>
      
      {/* Warning Banner */}
      <WarningBanner />
      
      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h1 className="text-xl font-bold mb-6 text-center text-red-600">Enter Password</h1>
          
          <Input
            type="password"
            placeholder="Enter Password"
            value={validationCode}
            onChange={(e) => setValidationCode(e.target.value)}
            className="mb-5 border-2 border-red-100 focus:border-red-600"
          />
          
          <Button 
            onClick={handleValidate}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3"
          >
            VALIDATE
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

export default ValidationCode;
