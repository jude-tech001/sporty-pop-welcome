
import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Tutorial = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button onClick={() => navigate(-1)} className="mr-2">
          <ArrowLeft className="w-6 h-6 text-sportybet-red" />
        </button>
        <h1 className="text-xl font-bold text-sportybet-red">Tutorial</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        {/* Tutorial Video */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="aspect-video w-full mb-4">
            <iframe
              src="https://www.youtube.com/embed/nq1gpCgOyoc?si=uMThvsYh09OIXaFY&autoplay=1&controls=1"
              title="Tutorial Video"
              className="w-full h-full rounded-md"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          
          <h2 className="text-lg font-semibold text-sportybet-red mb-2">How to Use the App</h2>
          <p className="text-gray-600">
            Watch this comprehensive tutorial to learn how to use all the features of our Sportybet app effectively.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
