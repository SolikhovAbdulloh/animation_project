import { useNavigate } from "react-router-dom";
import { pages } from "../../utils";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { SlEnvolope } from "react-icons/sl";
import { IoCallOutline } from "react-icons/io5";
import log from "../../assets/logo_lola.png";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center  items-center p-2 m-auto flex-col gap-5">
      <img src={log} alt="logo" className="w-30 md:w-24 object-contain" />

      <div>
        <div className="flex text-[grey] items-center justify-center  gap-6">
          {pages.map((val, index) => (
            <h3
              key={index}
              className="cursor-pointer text-grey hover:text-[#FD6F00] transition-colors duration-200"
              onClick={() => navigate(`${val.pages}`)}
            >
              {val.title}
            </h3>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-5">
        <FaInstagram className="cursor-pointer" color="white" size={30} />
        <FaTelegram className="cursor-pointer" color="white" size={30} />
        <FaLinkedinIn className="cursor-pointer" color="white" size={30} />
        <FaFacebook className="cursor-pointer" color="white" size={30} />
      </div>
      <div className="flex items-center text-[grey] gap-[30px]">
        <p className="flex items-center gap-2.5">
          <SlEnvolope />
          @ilhomshavkatKarimov
        </p>
        <p className="flex items-center gap-2.5">
          <IoCallOutline />
          +9989 46 448 203
        </p>
      </div>
      <a className="cursor-pointer border-t-1 mt-[30px] text-[grey]  border-[gray]">
        Designed by @Solikhov_Frontend
      </a>
    </div>
  );
};

export default Footer;
