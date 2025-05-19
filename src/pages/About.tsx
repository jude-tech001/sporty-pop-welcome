
import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button 
          onClick={() => navigate(-1)}
          className="mr-2"
        >
          <ArrowLeft className="w-6 h-6 text-sportybet-red" />
        </button>
        <h1 className="text-xl font-bold text-sportybet-red">How does the app work?</h1>
      </div>

      {/* Logo */}
      <div className="flex justify-center mb-4">
        <img 
          src="/lovable-uploads/d02da8d5-cf85-4e64-be9c-a74037e55ddb.png" 
          alt="Sportybet Logo" 
          className="w-16 h-16 object-contain"
        />
      </div>

      <h2 className="text-sportybet-red text-lg font-semibold mb-2">How does the app work?</h2>
      <h3 className="text-sportybet-red font-medium mb-4">Read Below</h3>

      <ul className="space-y-4 text-sportybet-red">
        <li className="flex items-start">
          <span className="text-sportybet-red mr-2">•</span>
          <span>Create a sportybet account. If you have one before! fine, you can use it</span>
        </li>
        <li className="flex items-start">
          <span className="text-sportybet-red mr-2">•</span>
          <span>No need to deposit</span>
        </li>
        <li className="flex items-start">
          <span className="text-sportybet-red mr-2">•</span>
          <span>No need for anything like deposit link</span>
        </li>
        <li className="flex items-start">
          <span className="text-sportybet-red mr-2">•</span>
          <span>Open the Sportybet wizard [Sportybet balance adder] App/website</span>
        </li>
        <li className="flex items-start">
          <span className="text-sportybet-red mr-2">•</span>
          <span>Buy your password</span>
        </li>
        <li className="flex items-start">
          <span className="text-sportybet-red mr-2">•</span>
          <span>Click on "Add....."</span>
        </li>
        <li className="flex items-start">
          <span className="text-sportybet-red mr-2">•</span>
          <span>After Successful transaction</span>
        </li>
        <li className="flex items-start">
          <span className="text-sportybet-red mr-2">•</span>
          <span>Go back to your sportybet account</span>
        </li>
        <li className="flex items-start">
          <span className="text-sportybet-red mr-2">•</span>
          <span>Refresh your sportybet account</span>
        </li>
        <li className="flex items-start">
          <span className="text-sportybet-red mr-2">•</span>
          <span>Your money is Successfully added!</span>
        </li>
        <li className="flex items-start">
          <span className="text-sportybet-red mr-2">•</span>
          <span>Withdraw your funds</span>
        </li>
        <li className="flex items-start">
          <span className="text-sportybet-red mr-2">•</span>
          <span>And that is all...</span>
        </li>
      </ul>
    </div>
  );
};

export default About;
