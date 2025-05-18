
import React from "react";
import { DollarSign, Bell, LogIn, Activity, Info, Contact, Key } from "lucide-react";

const ActionButton = ({ title, icon, onClick }: { title: string; icon: React.ReactNode; onClick?: () => void }) => (
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

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 animate-fade-in pt-4">
      {/* Header */}
      <div className="flex justify-end px-4 py-2">
        <Bell className="w-6 h-6 text-sportybet-black" />
      </div>

      {/* Banner */}
      <div className="bg-sportybet-red mx-4 p-3 rounded-lg shadow-md mb-6">
        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/40603d23-9974-445b-8f1a-6155f35ee66d.png" 
            alt="Sportybet interfaces" 
            className="w-full max-w-sm object-cover"
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
          />
          <ActionButton 
            title="Free Predictions" 
            icon={<Activity className="w-8 h-8 text-white" />} 
          />
          <ActionButton 
            title="About" 
            icon={<Info className="w-8 h-8 text-white" />} 
          />
          <ActionButton 
            title="Contact" 
            icon={<Contact className="w-8 h-8 text-white" />} 
          />
          <ActionButton 
            title="Buy Password" 
            icon={<Key className="w-8 h-8 text-white" />} 
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
