
import React from "react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white">
      <div className="w-16 h-16 rounded-full border-4 border-gray-200 relative flex items-center justify-center">
        <div className="w-14 h-14 rounded-full border-t-4 border-sportybet-red animate-spin absolute"></div>
      </div>
      <p className="mt-4 text-gray-400 text-lg">Loading...</p>
    </div>
  );
};

export default LoadingScreen;
