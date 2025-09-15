// import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <div>
      {/* Main Content - Added top padding to account for fixed navbar */}
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-180px)]  px-8 relative z-10 ">
        {/* Background Grid - Only in hero section */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
            `,
              backgroundSize: "35px 35px",
            }}
          ></div>
        </div>
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto md:mt-52 mt-32">
          <h1 className="text-4xl md:text-6xl font-medium mb-8 leading-tight">
            One Tap
            <br />
            <span className="text-4xl md:text-6xl whitespace-nowrap">
              Network With Ease{" "}
              {/* <Typewriter
                words={[
                  "Network in Style",
                  "Network with Steeze",
                  "Ditch Paper Cards",
                  "Tap to Connect",
                ]}
                loop={true}
                cursor
                cursorStyle="."
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2300}
              /> */}
            </span>
          </h1>

          <p className="text-sm md:text-xl text-gray-300 mb-12 max-w-xl mx-auto leading-relaxed">
            Ditch the paper cards share your contact info, socials, and more
            with style. Just tap to connect. It's fast, modern, and made for
            networking with steeze.
          </p>

          {/* <img src={hrimg} alt="" className="rounded-xl" /> */}

          {/* CTA Button */}
          <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-4 rounded-full text-lg font-light transition-all duration-300 mb-16 shadow-lg hover:shadow-orange-500/25">
            Request a Card
          </button>
        </div>
      </main>
    </div>
  );
}
