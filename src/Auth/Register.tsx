// import React, { useState } from "react";
// import { Mail, User } from "lucide-react";
// import useAuthStore from "../store/authStore";
// import OtpVerification from "./Otp";
// import { toast } from "react-toastify";

// const TappRegistration: React.FC = () => {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [currentStep, setCurrentStep] = useState<"register" | "otp">(
//     "register"
//   );

//   const { register, setUser, loading } = useAuthStore();

//   const handleContinue = async () => {
//     if (!fullName || !email) return;

//     try {
//       await register(fullName, email);
//       setUser({ id: "", name: fullName, email }); // placeholder ID
//       setCurrentStep("otp");
//     } catch (err: any) {
//       toast.error(err.message); // show toast/snackbar in production
//     }
//   };

//   const isFormValid = fullName.trim() !== "" && email.trim() !== "";

//   return (
//     <div className="min-h-screen bg-neutral-900 flex flex-col">
//       {currentStep === "register" ? (
//         <>
//           <div className="flex-1 flex items-center justify-center p-4 pt-0">
//             <div className="w-full max-w-sm">
//               <div className="text-center space-y-8">
//                 <div className="space-y-2">
//                   <h1 className="text-3xl font-medium text-white tracking-tight">
//                     Create Your Tapp Account
//                   </h1>
//                   <p className="text-neutral-400 text-lg">
//                     Get started with your new account
//                   </p>
//                 </div>

//                 <div className="space-y-6">
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                       <User className="h-5 w-5 text-neutral-500" />
//                     </div>
//                     <input
//                       type="text"
//                       value={fullName}
//                       onChange={(e) => setFullName(e.target.value)}
//                       placeholder="Full name"
//                       className="w-full pl-12 pr-4 py-4 bg-neutral-800/50 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 transition-all duration-200"
//                     />
//                   </div>

//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                       <Mail className="h-5 w-5 text-neutral-500" />
//                     </div>
//                     <input
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       placeholder="Email address"
//                       className="w-full pl-12 pr-4 py-4 bg-neutral-800/50 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 transition-all duration-200"
//                     />
//                   </div>

//                   <button
//                     onClick={handleContinue}
//                     disabled={!isFormValid || loading}
//                     className="w-full py-4 px-6 bg-orange-600 hover:bg-orange-700 disabled:bg-neutral-700 disabled:text-neutral-500 text-white font-semibold rounded-xl transition-all duration-200 disabled:cursor-not-allowed"
//                   >
//                     {loading ? (
//                       <div className="flex items-center justify-center">
//                         <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//                       </div>
//                     ) : (
//                       "Continue"
//                     )}
//                   </button>
//                 </div>

//                 <p className="text-neutral-500 text-sm">
//                   We'll send a 4-digit OTP to your email
//                 </p>
//               </div>
//             </div>
//           </div>
//         </>
//       ) : (
//         <OtpVerification email={email} />
//       )}
//     </div>
//   );
// };

// export default TappRegistration;

import React, { useState } from "react";
import useAuthStore from "../store/authStore";
import OtpVerification from "./Otp";
import { toast } from "react-toastify";
import logo from "../assets/images/logo.svg";
import rgs from "../assets/images/rgs.svg";
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
      setUser({ id: "", name: fullName, email });
      setCurrentStep("otp");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const isFormValid = fullName.trim() !== "" && email.trim() !== "";

  return (
    <div className="min-h-screen bg-white">
      {/* Desktop: Centered container with max width */}
      <div className="mx-auto max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
        <div className="min-h-screen flex flex-col">
          {currentStep === "register" ? (
            <>
              {/* Logo */}
              <div className="flex justify-center items-center pt-12 pb-12 lg:pt-8 lg:pb-8">
                <img src={logo} alt="" />
              </div>

              {/* Characters Section */}
              <div className="flex-1 relative px-6 pb-8 flex items-center justify-center">
                {/* This is where you'll place your 3D character image (couple holding hands) */}
                <img src={rgs} alt="" />
              </div>

              {/* Registration Form Section */}
              <div className="px-6 pb-8 lg:pb-12">
                <div className="text-center mb-8">
                  <h2 className="text-xl lg:text-2xl font-medium text-black mb-8">
                    Just few details to set you up..
                  </h2>

                  <div className="space-y-6">
                    {/* Email Input */}
                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full px-4 py-4 bg-gray-100 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-yellow-400 transition-all duration-200 text-lg"
                      />
                    </div>

                    {/* Username Input (using fullName state for functionality) */}
                    <div className="relative">
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Username"
                        className="w-full px-4 py-4 bg-gray-100 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-yellow-400 transition-all duration-200 text-lg"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Sign Up Button */}
                  <button
                    onClick={handleContinue}
                    disabled={!isFormValid || loading}
                    className="w-full py-4 px-6 bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-300 disabled:text-gray-500 text-black font-medium rounded-xl transition-all duration-200 disabled:cursor-not-allowed text-lg"
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
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
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

export default TappRegistration;
