import { useNavigate } from "react-router-dom";
import { pages } from "../../utils";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { SlEnvolope } from "react-icons/sl";
import { IoCallOutline } from "react-icons/io5";
import log from "/logo_lola.png";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gradient-to-t from-amber-300 to-amber-200 text-black py-10 px-4 md:px-8 w-full">
      <div className=" mx-auto flex flex-col items-center space-y-6">
        {/* Logo */}
        <img src={log} alt="logo" className="w-28 md:w-36 object-contain" />

        {/* Navigation links */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm font-medium">
          {pages.map((val, index) => (
            <button
              key={index}
              onClick={() => navigate(val.pages)}
              className="hover:text-orange-600 transition-colors duration-200"
            >
              {val.title}
            </button>
          ))}
        </nav>

        {/* Social media icons */}
        <div className="flex items-center gap-5 mt-4">
          <FaInstagram
            className="cursor-pointer hover:text-pink-500 hover:scale-110 transition-transform duration-200"
            size={26}
          />
          <FaTelegram
            className="cursor-pointer hover:text-cyan-500 hover:scale-110 transition-transform duration-200"
            size={26}
          />
          <FaFacebook
            className="cursor-pointer hover:text-blue-600 hover:scale-110 transition-transform duration-200"
            size={26}
          />
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-10 text-sm mt-4">
          <p className="flex items-center gap-2">
            <SlEnvolope /> @ilhomshavkatKarimov
          </p>
          <p className="flex items-center gap-2">
            <IoCallOutline /> +998 94 644 82 03
          </p>
        </div>

        {/* Bottom Text */}
        <p className="text-xs text-center border-t border-black/30 w-full pt-4 mt-4">
          Designed and created by{" "}
          <span className="font-semibold">@Solikhov_Frontend</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
