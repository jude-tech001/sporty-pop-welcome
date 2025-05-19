
import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import LoadingScreen from "@/components/LoadingScreen";

interface FormData {
  email: string;
  phoneNumber: string;
}

const BuyPassword = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate a loading delay for 5 seconds before redirecting to payment page
    setTimeout(() => {
      navigate("/payment", { state: { email: data.email, phoneNumber: data.phoneNumber } });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {isSubmitting ? (
        <LoadingScreen />
      ) : (
        <>
          {/* Header */}
          <div className="flex items-center mb-6">
            <button onClick={() => navigate(-1)} className="mr-2">
              <ArrowLeft className="w-6 h-6 text-sportybet-red" />
            </button>
            <h1 className="text-xl font-bold text-sportybet-red">Buy Password</h1>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-sportybet-red text-center mb-4">
              Input your details
            </h2>
            <p className="text-center text-sportybet-red mb-6">
              Input your email, we will send the Password there and if we could not reach your email we will send it as a SMS (Message)
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter Email Address"
                  className="w-full border border-sportybet-red rounded-md p-3 text-sportybet-black"
                  {...register("email", { 
                    required: "Email is required", 
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
                {errors.email && (
                  <p className="text-sm text-sportybet-red">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-sportybet-red rounded-md p-3 text-sportybet-black"
                  {...register("phoneNumber", { 
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10,15}$/,
                      message: "Phone number must be between 10-15 digits"
                    }
                  })}
                />
                {errors.phoneNumber && (
                  <p className="text-sm text-sportybet-red">{errors.phoneNumber.message}</p>
                )}
              </div>

              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="bg-gray-200 text-sportybet-red font-medium px-8 py-2 rounded-md hover:bg-gray-300"
                >
                  Buy Now
                </Button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default BuyPassword;
