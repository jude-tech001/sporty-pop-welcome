
import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import WelcomePopup from "@/components/WelcomePopup";
import Dashboard from "@/components/Dashboard";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowWelcome(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleWelcomeClose = () => {
    setShowWelcome(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {isLoading && <LoadingScreen />}
      {showWelcome && <WelcomePopup onClose={handleWelcomeClose} />}
      {!isLoading && <Dashboard />}
    </div>
  );
};

export default Index;
