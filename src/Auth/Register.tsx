import React, { useState } from "react";
import { Mail, User, ArrowLeft } from "lucide-react";
import useAuthStore from "../store/authStore";
import OtpVerification from "./Otp";
import { toast } from "react-toastify";

const TappRegistration: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [currentStep, setCurrentStep] = useState<"register" | "otp">(
    "register"
  );

  const { register, setUser, loading } = useAuthStore();

  const handleContinue = async () => {
    if (!fullName || !email) return;

    try {
      await register(fullName, email);
      setUser({ id: "", name: fullName, email }); // placeholder ID
      setCurrentStep("otp");
    } catch (err: any) {
      toast.error(err.message); // show toast/snackbar in production
    }
  };

  const handleBack = () => setCurrentStep("register");

  const isFormValid = fullName.trim() !== "" && email.trim() !== "";

  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col">
      {currentStep === "register" ? (
        <>
          <div className="flex-shrink-0 p-4 pt-8 md:pt-4">
            <button
              onClick={() => window.history.back()}
              className="flex items-center text-neutral-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center p-4 pt-0">
            <div className="w-full max-w-sm">
              <div className="text-center space-y-8">
                <div className="space-y-2">
                  <h1 className="text-3xl font-medium text-white tracking-tight">
                    Create Your Tapp Account
                  </h1>
                  <p className="text-neutral-400 text-lg">
                    Get started with your new account
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-neutral-500" />
                    </div>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Full name"
                      className="w-full pl-12 pr-4 py-4 bg-neutral-800/50 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 transition-all duration-200"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-neutral-500" />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email address"
                      className="w-full pl-12 pr-4 py-4 bg-neutral-800/50 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 transition-all duration-200"
                    />
                  </div>

                  <button
                    onClick={handleContinue}
                    disabled={!isFormValid || loading}
                    className="w-full py-4 px-6 bg-orange-600 hover:bg-orange-700 disabled:bg-neutral-700 disabled:text-neutral-500 text-white font-semibold rounded-xl transition-all duration-200 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      </div>
                    ) : (
                      "Continue"
                    )}
                  </button>
                </div>

                <p className="text-neutral-500 text-sm">
                  We'll send a 4-digit OTP to your email
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <OtpVerification email={email} onBack={handleBack} />
      )}
    </div>
  );
};

export default TappRegistration;
