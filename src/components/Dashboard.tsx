
import React from "react";
import { DollarSign, Bell, LogIn, Activity, Info, Contact, Key, Home, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const ActionButton = ({ title, icon, onClick, href }: { title: string; icon: React.ReactNode; onClick?: () => void; href?: string }) => {
  const content = (
    <div 
      className="flex flex-col items-center cursor-pointer" 
      onClick={onClick}
    >
      <div className="w-20 h-20 bg-sportybet-red rounded-2xl flex items-center justify-center mb-2 shadow-md hover:bg-sportybet-darkred transition-colors">
        {icon}
      </div>
      <span className="text-sportybet-red text-sm">{title}</span>
    </div>
  );

  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer">{content}</a>;
  }
  
  return content;
};

const BottomNavItem = ({ icon, label, onClick, isActive = false }: { icon: React.ReactNode; label: string; onClick?: () => void; isActive?: boolean }) => (
  <div 
    className={`flex flex-col items-center ${isActive ? 'text-sportybet-red font-medium' : 'text-gray-500'} cursor-pointer`}
    onClick={onClick}
  >
    {icon}
    <span className="text-xs mt-1">{label}</span>
  </div>
);

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 animate-fade-in pt-4 pb-20">
      {/* Header */}
      <div className="flex justify-end px-4 py-2">
        <Bell className="w-6 h-6 text-sportybet-black" />
      </div>

      {/* Banner */}
      <div className="bg-sportybet-red mx-4 p-3 rounded-lg shadow-md mb-6">
        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/607fc3e1-ac5d-4eef-9602-785d5244aea3.png" 
            alt="Sportybet interfaces" 
            className="w-full object-contain"
          />
        </div>
      </div>

      {/* Actions Section */}
      <div className="px-4 mb-6">
        <h2 className="text-xl font-bold text-sportybet-red mb-4">Actions</h2>
        
        <div className="grid grid-cols-3 gap-4">
          <ActionButton 
            title="Add Balance" 
            icon={<DollarSign className="w-8 h-8 text-white" />} 
          />
          <ActionButton 
            title="Login" 
            icon={<LogIn className="w-8 h-8 text-white" />}
            href="https://www.sportybet.com/ng/m/"
          />
          <ActionButton 
            title="Free Predictions" 
            icon={<Activity className="w-8 h-8 text-white" />}
            href="https://www.sportybet.com/ng/m/sport/football/sr:category:1_sr:category:393/sr:tournament:17_sr:tournament:7?is_league=1&time=all&source=sport_menu&sort=2"
          />
          <ActionButton 
            title="About" 
            icon={<Info className="w-8 h-8 text-white" />}
            onClick={() => window.location.href = '/about'}
          />
          <ActionButton 
            title="Contact" 
            icon={<Contact className="w-8 h-8 text-white" />} 
          />
          <ActionButton 
            title="Buy Password" 
            icon={<Key className="w-8 h-8 text-white" />}
            onClick={() => window.location.href = '/buy-password'}
          />
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 flex justify-around">
        <BottomNavItem 
          icon={<Home className="w-6 h-6 text-sportybet-red" />} 
          label="Home"
          isActive={true}
        />
        <BottomNavItem 
          icon={<DollarSign className="w-6 h-6" />} 
          label="Sportybet"
          onClick={() => window.open('https://www.sportybet.com/ng/m/', '_blank')}
        />
        <BottomNavItem 
          icon={<MessageSquare className="w-6 h-6" />} 
          label="Telegram"
          onClick={() => window.open('https://t.me/sportybet_adder_channel', '_blank')}
        />
      </div>
    </div>
  );
};

export default Dashboard;
