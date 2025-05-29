
import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WatchFootball = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button onClick={() => navigate(-1)} className="mr-2">
          <ArrowLeft className="w-6 h-6 text-sportybet-red" />
        </button>
        <h1 className="text-xl font-bold text-sportybet-red">Watch Football</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        {/* First Video */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="aspect-video w-full mb-4">
            <iframe
              src="https://www.youtube.com/embed/4xms1ljT_0U?si=ZVOP7ypf4B0CW0O-&autoplay=1&controls=1"
              title="Football Live Stream"
              className="w-full h-full rounded-md"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          
          <h2 className="text-lg font-semibold text-sportybet-red mb-2">Live Football Match</h2>
          <p className="text-gray-600">
            Enjoy watching the live football match! This stream is provided for your entertainment.
          </p>
        </div>

        {/* Second Video */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="aspect-video w-full mb-4">
            <iframe
              src="https://www.youtube.com/embed/UtPgpmItnPc?si=MH8Z50wmSQAbfDM6&autoplay=1&controls=1"
              title="Football Live Stream 2"
              className="w-full h-full rounded-md"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          
          <h2 className="text-lg font-semibold text-sportybet-red mb-2">Live Football Stream 2</h2>
          <p className="text-gray-600">
            Another live football stream for your viewing pleasure!
          </p>
        </div>

        {/* Third Video */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="aspect-video w-full mb-4">
            <iframe
              src="https://www.youtube.com/embed/HKM3HqpTrLs?si=EieuYnRQU68skRt0&autoplay=1&controls=1"
              title="Football Live Match Stream"
              className="w-full h-full rounded-md"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          
          <h2 className="text-lg font-semibold text-sportybet-red mb-2">Live Football Match Stream</h2>
          <p className="text-gray-600">
            Watch this exciting live football match in real-time!
          </p>
        </div>

        {/* Fourth Video - Live Penalty */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="aspect-video w-full mb-4">
            <iframe
              src="https://www.youtube.com/embed/IFydI70X71U?si=oyj3mqAwmeQZmLKO&autoplay=1&controls=1"
              title="Live Penalty Stream"
              className="w-full h-full rounded-md"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          
          <h2 className="text-lg font-semibold text-sportybet-red mb-2">Live Penalty Stream</h2>
          <p className="text-gray-600">
            Watch live penalty shootouts and exciting moments!
          </p>
        </div>

        {/* Fifth Video - Live Match */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="aspect-video w-full mb-4">
            <iframe
              src="https://www.youtube.com/embed/FdVhHHZPHEI?si=HW9TQdHkJwfQrxt7&autoplay=1&controls=1"
              title="Live Match Stream"
              className="w-full h-full rounded-md"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          
          <h2 className="text-lg font-semibold text-sportybet-red mb-2">Live Match Stream</h2>
          <p className="text-gray-600">
            Enjoy this live football match with high-quality streaming!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WatchFootball;
