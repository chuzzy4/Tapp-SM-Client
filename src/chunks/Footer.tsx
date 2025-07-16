import { FaXTwitter } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { SiInstagram, SiTiktok } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-slate-800/50 rounded-t-[150px] text-white">
      <div className="container mx-auto px-10 py-10">
        {/* Main content with logo and social icons */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <h2 className="text-2xl font-medium">Tapp</h2>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors duration-300"
            >
              <FaXTwitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors duration-300"
            >
              <SiInstagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors duration-300"
            >
              <SiTiktok className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors duration-300"
            >
              <MdMail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 mt-8 pt-6">
          <div className="text-center md:text-left">
            <p className="text-slate-400 text-sm">
              © 2025 Tapp. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
