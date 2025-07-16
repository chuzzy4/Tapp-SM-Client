import React from "react";
import { ShoppingCart, Download, Settings, Share2 } from "lucide-react";
import hiw from "../assets/images/hiw.svg";
import hiw1 from "../assets/images/hiw1.svg";
import hiw2 from "../assets/images/hiw2.svg";
import hiw3 from "../assets/images/hiw3.svg";
const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Buy a tapp product that fits your needs.",
      description:
        "Choose from our range of smart NFC cards and products designed for seamless networking.",
      icon: <ShoppingCart className="w-8 h-8" />,
      bgColor: "bg-orange-500",
      imageSrc: hiw,
      imageAlt: "Buy tap product illustration",
    },
    {
      step: "02",
      title: "Download tap free app and build your profile.",
      description:
        "Create your digital identity with our intuitive app. Add your contact info, social links, and more.",
      icon: <Download className="w-8 h-8" />,
      bgColor: "bg-[#CBE896]",
      imageSrc: hiw1,
      imageAlt: "Download app and build profile illustration",
    },
    {
      step: "03",
      title: "Activate your product through the app.",
      description:
        "Connect your physical card to your digital profile with a simple activation process.",
      icon: <Settings className="w-8 h-8" />,
      bgColor: "bg-orange-500",
      imageSrc: hiw2,
      imageAlt: "Activate product illustration",
    },
    {
      step: "04",
      title: "Share your profile via QR code, link or with just a tap.",
      description:
        "Network effortlessly with multiple sharing options - tap, scan, or share your link.",
      icon: <Share2 className="w-8 h-8" />,
      bgColor: "bg-[#CBE896]",
      imageSrc: hiw3,
      imageAlt: "Share profile illustration",
    },
  ];

  return (
    <section className="min-h-screen py-20 relative overflow-hidden ">
      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-3xl font-light mb-6 text-[#CBE896]">
            How It Works
          </h2>
          <p className="text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto">
            Get started with Tapp in just 4 simple steps
          </p>
        </div>

        {/* Steps Grid */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#CBE896] text-black font-medium text-lg rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>

                {/* Image */}
                <div className="mb-6 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-2xl overflow-hidden ">
                    <img
                      src={step.imageSrc}
                      alt={step.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-lg font-light text-gray-900 leading-tight">
                    {step.title}
                  </h3>
                  {/* <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
