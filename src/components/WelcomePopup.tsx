
import React from "react";
import { Button } from "@/components/ui/button";

interface WelcomePopupProps {
  onClose: () => void;
}

const WelcomePopup = ({ onClose }: WelcomePopupProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 px-4">
      <div className="bg-white p-6 rounded-md shadow-lg max-w-md w-full animate-fade-in-up">
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-center">2023 VERSION!!!</h2>
          
          <p className="text-sm">
            Welcome dear valued user. Buy password from the app and not from any person that 
            claims to be selling the password buy it directly from the app to avoid being 
            scammed by fellows. Thanks for your understanding!
          </p>
          
          <p className="text-sm font-semibold">1. One balance hack per day!</p>
          
          <p className="text-sm">
            Caution: Don't send money to any person claiming to help you to achieve the hack,
            this app has everything that will help you achieve your successful hack.
          </p>
          
          <div className="flex justify-end pt-2">
            <Button 
              onClick={onClose} 
              className="bg-sportybet-red hover:bg-sportybet-darkred text-white"
            >
              OK
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;
