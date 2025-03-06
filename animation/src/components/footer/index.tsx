import { useNavigate } from "react-router-dom";
import { pages } from "../../utils";
import { FaFacebook, FaInstagram} from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { SlEnvolope } from "react-icons/sl";
import { IoCallOutline } from "react-icons/io5";
import log from "/logo_lola.png";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-6 gap-[20px] bg-amber-200 text-white w-full">
      {/* Logo */}
      <img src={log} alt="logo" className="w-24 md:w-32 object-contain" />

      {/* Pages links */}
      <div className="mt-4">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-black">
          {pages.map((val, index) => (
            <h3
              key={index}
              className="cursor-pointer hover:text-[#FD6F00] transition-colors duration-200"
              onClick={() => navigate(`${val.pages}`)}
            >
              {val.title}
            </h3>
          ))}
        </div>
      </div>

      {/* Social media icons */}
      <div className="flex items-center text-black gap-4 md:gap-6 mt-4">
        <FaInstagram
          className="cursor-pointer hover:text-[red] hover:scale-110  transition-transform duration-200"
          size={30}
        />
        <FaTelegram
          className="cursor-pointer hover:scale-110 hover:text-[#60cfdb] transition-transform duration-200"
          size={30}
        />

        <FaFacebook
          className="cursor-pointer hover:scale-110 hover:text-[blue]  transition-transform duration-200"
          size={30}
        />
      </div>

      {/* Contact info */}
      <div className="flex flex-col md:flex-row items-center text-black gap-3 md:gap-8 mt-4  text-sm md:text-base">
        <p className="flex items-center gap-2">
          <SlEnvolope /> @ilhomshavkatKarimov
        </p>
        <p className="flex items-center gap-2">
          <IoCallOutline /> +9989 46 448 203
        </p>
      </div>

      {/* Footer bottom */}
      <p className="text-[red]  text-sm mt-6 border-t border-gray-700 pt-3 w-full text-start ">
        Designed and create by @Solikhov_Frontend
      </p>
    </div>
  );
};

export default Footer;
