
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
          <p className="text-gray-600 mb-6">
            Watch this comprehensive tutorial to learn how to use all the features of our Sportybet app effectively.
          </p>

          {/* How to Buy Password Instructions */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-bold text-sportybet-red mb-4">How to Buy Password:</h3>
            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="bg-sportybet-red text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                <span>Click on buy password in the site/app</span>
              </li>
              <li className="flex items-start">
                <span className="bg-sportybet-red text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                <span>Fill in your email and mobile number</span>
              </li>
              <li className="flex items-start">
                <span className="bg-sportybet-red text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                <span>Copy our account and make a one-time payment of 10,800</span>
              </li>
              <li className="flex items-start">
                <span className="bg-sportybet-red text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                <span>After successful payment come back and verify your payment</span>
              </li>
              <li className="flex items-start">
                <span className="bg-sportybet-red text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">5</span>
                <span>Your code will be sent to you via email or phone number you submit</span>
              </li>
            </ol>

            {/* Notice Warning */}
            <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
              <div className="flex items-center mb-2">
                <span className="text-red-600 text-lg mr-2">⛔</span>
                <h4 className="font-bold text-red-600">NOTICE</h4>
              </div>
              <p className="text-red-700">
                Don't make payment outside this app for your code beware of scammers pay in the app only
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
