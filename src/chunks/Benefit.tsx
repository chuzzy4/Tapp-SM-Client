import React, { useState } from "react";

import {
  Palette,
  Smartphone,
  Brain,
  Users,
  Nfc,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
// import cd from "../assets/images/Rectangle 7.svg";

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const benefits: Benefit[] = [
    {
      icon: <Nfc className="w-6 h-6" />,
      title: "One Tap, Instant Share",
      description:
        "Share your contact details, social links, and more with just one tap. No apps, no friction, no awkward typing.",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Sleek & Stylish",
      description:
        "Your card, your vibe. Tapp gives you a clean, modern identity that stands out from basic paper business cards.",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Always Up to Date",
      description:
        "Need to update your number or social handle? Do it once — your Tapp profile stays current without reprinting anything.",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Memorable Connections",
      description:
        "Leave an impression they won't forget. Tapp helps you network smarter, faster, and with style.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Stand Out at Events",
      description:
        "Be the person they remember. Tapp is perfect for networking, conferences, meetups, and creators.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % benefits.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  return (
    <section className="min-h-screen bg-neutral-900 text-white font-clash py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-[#CBE896]">
            Benefits
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-light">
            Ditch paper. Connect smarter.
          </p>
        </div>

        {/* Mobile Layout - Carousel */}
        <div className="block md:hidden">
          <div className="relative">
            {/* Product Image */}
            {/* <img src={cd} alt="" className="" /> */}

            {/* Carousel */}
            <div className="relative overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {benefits.map((benefit: Benefit, index: number) => (
                  <div key={index} className="w-full flex-shrink-0 p-6">
                    <div className="bg-neutral-800/50 backdrop-blur-sm rounded-2xl p-4 border border-neutral-700/50 text-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center text-orange-400 mx-auto mb-6">
                        {benefit.icon}
                      </div>
                      <h3 className="text-lg font-medium mb-4 text-white">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-neutral-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-neutral-700 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-neutral-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-neutral-700 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {benefits.map((_: Benefit, index: number) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? "bg-orange-500 w-8"
                      : "bg-neutral-600 hover:bg-neutral-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Tablet Layout - Clean Grid */}
        <div className="hidden md:block lg:hidden">
          {/* Product Image */}

          {/* First 3 cards in a row */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {benefits.slice(0, 3).map((benefit: Benefit, index: number) => (
              <div
                key={index}
                className="bg-neutral-800/50 backdrop-blur-sm rounded-2xl p-6 border border-neutral-700/50 hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center text-orange-400 mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-medium mb-2 text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Last 2 cards centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-6 max-w-2xl">
              {benefits.slice(3).map((benefit: Benefit, index: number) => (
                <div
                  key={index + 3}
                  className="bg-neutral-800/50 backdrop-blur-sm rounded-2xl p-6 border border-neutral-700/50 hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center text-orange-400 mx-auto mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-medium mb-2 text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout - Clean Grid */}
        <div className="hidden lg:block">
          {/* First 3 cards in a row */}
          <div className="grid grid-cols-3 gap-8 mb-8">
            {benefits.slice(0, 3).map((benefit: Benefit, index: number) => (
              <div key={index} className="">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center text-orange-400 mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-medium mb-2 text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Last 2 cards centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-8 max-w-2xl">
              {benefits.slice(3).map((benefit: Benefit, index: number) => (
                <div key={index + 3} className="">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center text-orange-400 mx-auto mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-medium mb-2 text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full text-lg font-light transition-all duration-300 shadow-lg hover:shadow-orange-500/25">
            Shop Now!
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
