
import React, { useEffect, useRef } from "react";

const WarningBanner = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const scrollAnimation = () => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 1;
      }
    };
    
    const animationInterval = setInterval(scrollAnimation, 30);
    
    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <div className="bg-white py-2 overflow-hidden mb-4">
      <div 
        ref={containerRef}
        className="whitespace-nowrap overflow-hidden"
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="inline-block w-full text-center text-red-600 font-medium px-4">
          ⚠️ Warning always buy your password 🔑 directly from the app to avoid scam ⚠️ Warning always buy your password 🔑 directly from the app to avoid scam
        </div>
      </div>
    </div>
  );
};

export default WarningBanner;
