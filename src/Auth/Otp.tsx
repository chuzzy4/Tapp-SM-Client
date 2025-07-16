import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import useAuthStore from "../store/authStore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type Props = {
  email: string;
  onBack: () => void;
};

const OtpVerification: React.FC<Props> = ({ email, onBack }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const navigate = useNavigate();
  const { verifyOtp, loading } = useAuthStore();

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < 3) {
      const next = document.querySelector(
        `input[data-index="${index + 1}"]`
      ) as HTMLInputElement;
      next?.focus();
    }

    if (updatedOtp.every((d) => d !== "") && updatedOtp.join("").length === 4) {
      handleVerify(updatedOtp.join(""));
    }
  };

  const handleVerify = async (code: string) => {
    const success = await verifyOtp(email, code);
    if (success) {
      navigate("/dashboard"); // or wherever
    } else {
      toast.error("Invalid or expired OTP");
    }
  };

  return (
    <div className="text-center space-y-8">
      <div className="flex justify-start">
        <button
          onClick={onBack}
          className="flex items-center text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back
        </button>
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-white tracking-tight">
          Enter Code
        </h1>
        <p className="text-neutral-400 text-lg">We sent a code to</p>
        <p className="text-white font-medium">{email}</p>
      </div>

      <div className="space-y-6">
        <div className="flex justify-center space-x-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              data-index={index}
              className="w-14 h-14 text-center text-2xl font-bold bg-neutral-800/50 border border-neutral-700 rounded-xl text-white focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 transition-all duration-200"
              maxLength={1}
            />
          ))}
        </div>

        {loading && (
          <div className="flex justify-center">
            <div className="flex items-center text-neutral-400">
              <div className="w-4 h-4 border-2 border-neutral-400/30 border-t-neutral-400 rounded-full animate-spin mr-2"></div>
              Verifying...
            </div>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <p className="text-neutral-500 text-sm">Didn't receive a code?</p>
        <button className="text-orange-600 hover:text-orange-500 text-sm font-medium transition-colors">
          Resend code
        </button>
      </div>
    </div>
  );
};

export default OtpVerification;
