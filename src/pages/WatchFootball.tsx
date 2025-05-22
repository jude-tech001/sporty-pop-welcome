
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* First Video */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="aspect-video w-full mb-4">
            <iframe
              src="https://www.youtube.com/embed/4xms1ljT_0U?si=ZVOP7ypf4B0CW0O-"
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
              src="https://youtube.com/embed/ms6jcf0rbsU"
              title="Football Short 1"
              className="w-full h-full rounded-md"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          
          <h2 className="text-lg font-semibold text-sportybet-red mb-2">Football Highlights</h2>
          <p className="text-gray-600">
            Check out these amazing football highlights and exciting moments from recent matches.
          </p>
        </div>

        {/* Third Video */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="aspect-video w-full mb-4">
            <iframe
              src="https://youtube.com/embed/QSFBlNgQ3PM"
              title="Football Short 2"
              className="w-full h-full rounded-md"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          
          <h2 className="text-lg font-semibold text-sportybet-red mb-2">Football Skills</h2>
          <p className="text-gray-600">
            Watch these impressive football skills and techniques from top players around the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WatchFootball;
