import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import prd1 from "../assets/images/Rectangle 6.svg";
import prd2 from "../assets/images/Rectangle 7.svg";
import prd3 from "../assets/images/Rectangle 8.svg";
import prd4 from "../assets/images/Rectangle 9.svg";

const ModernProductSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const products = [
    {
      id: 1,
      name: "Pocket™ - World's Most Advanced NFC Cardholder - Brown",
      price: "NGN 100.00",
      image: prd1,
    },
    {
      id: 2,
      name: "Tap NFC Business Card - Share Everything With A Tap - Black",
      price: "NGN 299.00",
      image: prd2,
    },
    {
      id: 3,
      name: "Tap NFC Keychain Share Everything With A Tap Handmade",
      price: "NGN 299.00",
      image: prd3,
    },
    {
      id: 4,
      name: "Pocket™ - World's Most Advanced NFC Cardholder - Black",
      price: "NGN 599.00",
      image: prd4,
    },
    {
      id: 5,
      name: "Tap NFC Business Card - Premium Edition",
      price: "NGN 399.00",
      image: prd2,
    },
    {
      id: 6,
      name: "Tap NFC Wallet Card - Minimalist Design",
      price: "NGN 199.00",
      image: prd1,
    },
  ];

  const itemsPerSlide = isMobile ? 1 : 4;
  const totalSlides = Math.ceil(products.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, totalSlides]);

  // Reset slide when switching between mobile/desktop
  useEffect(() => {
    setCurrentSlide(0);
  }, [isMobile]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section className="py-20 bg-orange-600 min-h-screen  rounded-t-[50px]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-[#CBE896]">
            Products{" "}
          </h2>
        </div>

        {/* Product Slider */}
        <div
          className="relative bg-white rounded-3xl p-4 md:p-8 shadow-2xl"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Products Grid */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div
                    className={`grid gap-6 ${
                      isMobile
                        ? "grid-cols-1"
                        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                    }`}
                  >
                    {products
                      .slice(
                        slideIndex * itemsPerSlide,
                        slideIndex * itemsPerSlide + itemsPerSlide
                      )
                      .map((product) => (
                        <div key={product.id} className="group cursor-pointer">
                          {/* Product Card */}
                          <div className="bg-gray-50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-105">
                            {/* Product Image */}
                            <div className="aspect-square bg-white rounded-xl mb-4 flex items-center justify-center overflow-hidden shadow-sm">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover rounded-xl"
                              />
                            </div>

                            {/* Product Info */}
                            <div className="space-y-2">
                              <h3 className="text-sm font-medium text-gray-900 leading-tight line-clamp-2">
                                {product.name}
                              </h3>
                              <p className="text-lg font-bold text-gray-900">
                                {product.price}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-xl transition-all duration-300 z-10"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-xl transition-all duration-300 z-10"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-orange-500 w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default ModernProductSection;
