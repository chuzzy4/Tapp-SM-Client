import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import TapInLogin from "./Auth/Login";
import TappRegistration from "./Auth/register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-white font-clash relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<TapInLogin />} />
        <Route path="/register" element={<TappRegistration />} />
      </Routes>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default LandingPage;
