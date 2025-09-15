import React, { useState } from "react";
import { Mail } from "lucide-react";
import useAuthStore from "../store/authStore";
import OtpVerification from "./Otp";
import { toast } from "react-toastify";
import logo from "../assets/images/logo.svg";
import gp from "../assets/images/otp.svg";

const TapInLogin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [currentStep, setCurrentStep] = useState<"email" | "otp">("email");

  const { sendCode, loading } = useAuthStore();

  const handleSendCode = async () => {
    if (!email) return;
    try {
      await sendCode(email);
      setCurrentStep("otp");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Desktop: Centered container with max width */}
      <div className="mx-auto max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
        <div className="min-h-screen flex flex-col">
          {currentStep === "email" ? (
            <>
              {/* Logo */}
              <div className="flex justify-center items-center pt-8 pb-12 lg:pt-10 lg:pb-10">
                <img src={logo} alt="" />
              </div>

              {/* Character and Social Icons Section */}
              <div className="flex-1 relative px-6 pb-8 flex items-center justify-center">
                {/* This is where you'll place your 3D character image with social media icons */}
                <img src={gp} alt="" />
              </div>

              {/* Login Form Section */}
              <div className="px-6 pb-8 lg:pb-12">
                <div className="text-center mb-8">
                  <h2 className="text-xl lg:text-2xl font-medium text-black mb-2">
                    Log in Sign up to access your account
                  </h2>
                </div>

                <div className="space-y-6">
                  {/* Email Input */}
                  <div className="relative">
                    <div className="flex">
                      <div className="flex items-center px-4 py-4 bg-gray-100 border-r border-gray-200 rounded-l-xl">
                        <Mail className="h-5 w-5 text-gray-600" />
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email address"
                        className="flex-1 px-4 py-4 bg-gray-100 rounded-r-xl text-black placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-yellow-400 transition-all duration-200 text-lg"
                      />
                    </div>
                  </div>

                  {/* Continue Button */}
                  <button
                    onClick={handleSendCode}
                    disabled={!email || loading}
                    className="w-full py-4 px-6 bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-300 disabled:text-gray-500 text-black font-semibold rounded-xl transition-all duration-200 disabled:cursor-not-allowed text-lg"
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-gray-400 border-t-gray-600 rounded-full animate-spin" />
                      </div>
                    ) : (
                      "Continue"
                    )}
                  </button>
                </div>

                {/* Page Indicator */}
                <div className="flex justify-center items-center mt-8 space-x-2">
                  <div className="w-6 h-1 bg-yellow-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center p-6">
              <OtpVerification email={email} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TapInLogin;
