import React, { useState } from "react";
import { Mail } from "lucide-react";
import useAuthStore from "../store/authStore";
import OtpVerification from "./Otp";
import { toast } from "react-toastify";

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
      toast.error(err.message); // show toast/snackbar in production
    }
  };

  const handleBackToEmail = () => {
    setEmail("");
    setCurrentStep("email");
  };

  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {currentStep === "email" ? (
          <div className="text-center space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-white tracking-widest">
                Log In
              </h1>
              <p className="text-neutral-400 text-lg">
                Enter your email to continue
              </p>
            </div>

            <div className="space-y-4">
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
                onClick={handleSendCode}
                disabled={!email || loading}
                className="w-full py-4 px-6 bg-orange-600 hover:bg-orange-700 disabled:bg-neutral-700 disabled:text-neutral-500 text-white font-semibold rounded-xl transition-all duration-200 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  </div>
                ) : (
                  "Send Code"
                )}
              </button>
            </div>

            <p className="text-neutral-500 text-sm">
              You'll receive a 4-digit code in your inbox
            </p>
          </div>
        ) : (
          <OtpVerification email={email} onBack={handleBackToEmail} />
        )}
      </div>
    </div>
  );
};

export default TapInLogin;
