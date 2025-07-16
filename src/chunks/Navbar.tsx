import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  return (
    <div>
      {/* Modern Rounded Navigation Header - Now Sticky */}
      <div className="fixed top-0 left-0 right-0 flex justify-center pt-6 md:px-8 px-5 z-50 bg-neutral-900/80 backdrop-blur-md pb-6">
        <nav className="flex items-center justify-between md:px-4 px-4 py-4 bg-neutral-800/80 backdrop-blur-md rounded-full border border-neutral-700/50 shadow-lg max-w-4xl w-full ">
          {/* Logo */}
          <div>
            <h1 className="font-bold font-clash text-2xl">TAPP</h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Benefits
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              How it works
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Product
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              FAQs
            </a>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4 ">
            {/* Get Your Card Button */}
            <Link to={"/login"}>
              {" "}
              <button className="hover:bg-[#F47621] bg-orange-600 border border-white text-white md:px-8 py-3 px-6 rounded-full font-light transition-colors">
                Log In
              </button>
            </Link>
            <div className="md:hidden">
              <p className="text-gray-300 hover:text-white transition-colors text-3xl">
                <FiMenu />
              </p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
