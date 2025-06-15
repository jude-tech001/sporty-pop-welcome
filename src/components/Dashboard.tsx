
import React from "react";
import { DollarSign, Bell, LogIn, Activity, Info, Mail, Key, Home, MessageSquare, Youtube, PlayCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import WarningBanner from "./WarningBanner";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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

  const handleTutorial = () => {
    navigate("/tutorial");
  };
  
  const handleJoinTelegram = () => {
    window.open('https://t.me/sportybet_balance_adder_2025', '_blank');
  };

  const carouselImages = [
    "/lovable-uploads/3cfaab67-96d5-4363-b212-0cd8d857383e.png",
    "/lovable-uploads/e1a2d944-9ad3-4b2b-9201-4d5bafaf3096.png",
    "/lovable-uploads/478d4840-7c7d-43b6-965e-3939b0e5d71b.png",
    "/lovable-uploads/2ff6c358-9690-4342-959f-eecc67abe8d8.png",
    "/lovable-uploads/45b1f3a0-6eba-425f-b174-779f904d5998.png",
    "/lovable-uploads/28aba056-a80b-4ac7-8e61-905313b24c64.png",
    "/lovable-uploads/6a6688b7-6a0e-49d3-b2d2-e2b91b05ed5c.png",
    "/lovable-uploads/11fd23e7-f583-4d4a-9078-5355f4a5e1aa.png",
    "/lovable-uploads/151ae0fe-8858-4b4f-9553-6f8b2e9d337d.png"
  ];

  return (
    <div className="min-h-screen bg-gray-100 animate-fade-in pt-4 pb-20">
      {/* Header */}
      <div className="flex justify-end px-4 py-2">
        <Bell 
          className="w-6 h-6 text-red-500 cursor-pointer" 
          onClick={handleViewHistory} 
        />
      </div>

      {/* Sportybet Carousel Banner */}
      <div className="px-4 mb-4">
        <Carousel
          className="w-full"
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {carouselImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="w-full overflow-hidden rounded-lg">
                  <img 
                    src={image}
                    alt={`SportyBet Promo ${index + 1}`}
                    className="w-full h-auto object-cover" 
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>

      {/* Actions Section */}
      <div className="px-4 mb-4">
        <h2 className="text-xl font-bold text-sportybet-red mb-3">Actions</h2>
        
        <div className="grid grid-cols-3 gap-3">
          <ActionButton 
            title="Add Balance" 
            icon={<span className="text-white text-2xl font-bold">₦</span>} 
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
            title="Tutorial" 
            icon={<PlayCircle className="w-6 h-6 text-white" />}
            onClick={handleTutorial}
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
          onClick={() => window.open('https://t.me/sportybet_balance_adder_2025', '_blank')}
        />
      </div>
    </div>
  );
};

export default Dashboard;
