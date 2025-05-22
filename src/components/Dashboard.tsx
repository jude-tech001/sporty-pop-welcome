
import React from "react";
import { DollarSign, Bell, LogIn, Activity, Info, Mail, Key, Home, MessageSquare, Youtube } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import WarningBanner from "./WarningBanner";

const ActionButton = ({ 
  title, 
  icon, 
  onClick, 
  to
}: { 
  title: string; 
  icon: React.ReactNode; 
  onClick?: () => void; 
  to?: string 
}) => {
  const content = (
    <div 
      className="flex flex-col items-center cursor-pointer" 
      onClick={onClick}
    >
      <div className="w-16 h-16 bg-sportybet-red rounded-2xl flex items-center justify-center mb-2 shadow-md hover:bg-sportybet-darkred transition-colors">
        {icon}
      </div>
      <span className="text-sportybet-red text-xs">{title}</span>
    </div>
  );

  if (to) {
    return <Link to={to}>{content}</Link>;
  }
  
  return content;
};

const BottomNavItem = ({ 
  icon, 
  label, 
  onClick, 
  isActive = false 
}: { 
  icon: React.ReactNode; 
  label: string; 
  onClick?: () => void; 
  isActive?: boolean 
}) => (
  <div 
    className={`flex flex-col items-center ${isActive ? 'text-red-600' : 'text-red-600'} cursor-pointer`}
    onClick={onClick}
  >
    {icon}
    <span className="text-xs mt-1">{label}</span>
  </div>
);

const Dashboard = () => {
  const navigate = useNavigate();
  
  const handleEmailContact = () => {
    window.location.href = "mailto:Sportybetadder2025@gmail.com";
  };
  
  const handleAddBalance = () => {
    navigate("/validate-code");
  };

  const handleViewHistory = () => {
    navigate("/balance-history");
  };

  const handleWatchFootball = () => {
    navigate("/watch-football");
  };
  
  const handleJoinTelegram = () => {
    window.open('https://t.me/castubeuserstelegramchannel', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-100 animate-fade-in pt-4 pb-20">
      {/* Header */}
      <div className="flex justify-end px-4 py-2">
        <Bell 
          className="w-6 h-6 text-red-500 cursor-pointer" 
          onClick={handleViewHistory} 
        />
      </div>

      {/* Sportybet Banner */}
      <div className="px-4 mb-4">
        <div className="w-full overflow-hidden rounded-lg mb-4">
          <img 
            src="/lovable-uploads/47f0973c-6f19-4ef7-aea6-6de85801bbd7.png" 
            alt="Sportybet Banner" 
            className="w-full h-auto object-cover" 
          />
        </div>
      </div>

      {/* Actions Section */}
      <div className="px-4 mb-4">
        <h2 className="text-xl font-bold text-sportybet-red mb-3">Actions</h2>
        
        <div className="grid grid-cols-3 gap-3">
          <ActionButton 
            title="Add Balance" 
            icon={<DollarSign className="w-6 h-6 text-white" />} 
            onClick={handleAddBalance}
          />
          <ActionButton 
            title="Login" 
            icon={<LogIn className="w-6 h-6 text-white" />}
            to="https://www.sportybet.com/ng/m/"
          />
          <ActionButton 
            title="Free Predictions" 
            icon={<Activity className="w-6 h-6 text-white" />}
            to="https://www.sportybet.com/ng/m/sport/football/sr:category:1_sr:category:393/sr:tournament:17_sr:tournament:7?is_league=1&time=all&source=sport_menu&sort=2"
          />
          <ActionButton 
            title="About" 
            icon={<Info className="w-6 h-6 text-white" />}
            to="/about"
          />
          <ActionButton 
            title="Contact" 
            icon={<Mail className="w-6 h-6 text-white" />} 
            onClick={handleEmailContact}
          />
          <ActionButton 
            title="Buy Password" 
            icon={<Key className="w-6 h-6 text-white" />}
            to="/buy-password"
          />
          <ActionButton 
            title="Watch Football" 
            icon={<Youtube className="w-6 h-6 text-white" />}
            onClick={handleWatchFootball}
          />
          <ActionButton 
            title="Join Group" 
            icon={<MessageSquare className="w-6 h-6 text-white" />}
            onClick={handleJoinTelegram}
          />
        </div>
      </div>
      
      {/* Warning Banner */}
      <WarningBanner />

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 flex justify-around">
        <BottomNavItem 
          icon={<Home className="w-6 h-6 text-red-600" />} 
          label="Home"
          isActive={true}
          onClick={() => navigate("/")}
        />
        <BottomNavItem 
          icon={<DollarSign className="w-6 h-6 text-red-600" />} 
          label="Sportybet"
          onClick={() => window.open('https://www.sportybet.com/ng/m/', '_blank')}
        />
        <BottomNavItem 
          icon={<MessageSquare className="w-6 h-6 text-red-600" />} 
          label="Telegram"
          onClick={() => window.open('https://t.me/castubeuserstelegramchannel', '_blank')}
        />
      </div>
    </div>
  );
};

export default Dashboard;
