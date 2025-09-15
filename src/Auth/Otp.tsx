import React, { useState } from "react";
import useAuthStore from "../store/authStore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../assets/images/logo.svg";
import otpimg from "../assets/images/otp.svg";

type Props = {
  email: string;
};

const OtpVerification: React.FC<Props> = ({ email }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const navigate = useNavigate();
  const { verifyOtp } = useAuthStore();

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
      navigate("/dashboard");
    } else {
      toast.error("Invalid or expired OTP");
    }
  };

  const handleResendCode = async () => {
    try {
      // You can implement resend functionality here
      toast.info("Code resent to your email");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Desktop: Centered container with max width */}
      <div className="mx-auto max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
        <div className="min-h-screen flex flex-col">
          {/* Logo */}
          <img src={logo} alt="" className="h-10" />

          {/* Characters Section */}
          <div className="flex-1 relative px-6  flex items-center justify-center ">
            {/* This is where you'll place your two 3D character images */}
            <img src={otpimg} alt="" />
          </div>

          {/* OTP Form Section */}
          <div className="px-6 pb-16 lg:pb-12">
            <div className="text-center mb-8">
              <h2 className="text-base lg:text-2xl font-medium text-black mb-8">
                Enter 4 digit code to confirm it's you
              </h2>

              {/* OTP Input Boxes */}
              <div className="flex justify-center space-x-3 mb-8">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    data-index={index}
                    className="w-14 h-14 lg:w-16 lg:h-16 text-center text-2xl font-bold bg-gray-100 border border-gray-200 rounded-xl text-black focus:outline-none focus:bg-white focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-200"
                    maxLength={1}
                  />
                ))}
              </div>

              {/* Resend OTP */}
              <div className="text-right mb-8">
                <button
                  onClick={handleResendCode}
                  className="text-black font-medium text-base hover:text-gray-600 transition-colors"
                >
                  Resend OTP
                </button>
              </div>
            </div>

            {/* Page Indicator */}
            <div className="flex justify-center items-center mt-8 space-x-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="w-6 h-1 bg-yellow-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
