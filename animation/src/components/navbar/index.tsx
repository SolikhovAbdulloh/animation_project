import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { pages } from "../../utils";
import logotip from "../../assets/logo_lola.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between items-center text-black !p-4">
      {/* Logo */}
      <img
        alt="logo"
        src={logotip}
        onClick={() => navigate("/")}
        className="w-16 sm:w-20 md:w-24 object-contain cursor-pointer"
      />

      {/* Mobile menu button */}
      <button
        className="md:hidden text-[#FD6F00] focus:outline-none animate-drop"
        onClick={() => setOpen(!open)}
      >
        {open ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Desktop menu */}
      <div className="hidden md:flex items-center gap-6 text-black">
        {pages.map((val, index) => (
          <h3
            key={index}
            className={`cursor-pointer transition-all duration-300 ease-in-out text-sm md:text-base hover:text-[#FD6F00] hover:border-b-2 hover:border-[#FD6F00] ${
              location.pathname === val.pages
                ? "text-[#FD6F00] border-b-2 border-[#FD6F00] p-1"
                : "border-b-2 border-transparent"
            }`}
            onClick={() => navigate(`${val.pages}`)}
          >
            {val.title}
          </h3>
        ))}
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className={`fixed top-0 left-0 w-[70%] max-w-[300px] h-full bg-gradient-to-br from-gray-700 to-gray-900 p-6 flex flex-col items-center md:hidden shadow-2xl rounded-r-xl z-30 transition-transform duration-500 ease-in-out ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="w-full flex justify-end"></div>
          <div className="flex flex-col items-center w-full mt-6">
            {pages.map((val, index) => (
              <h3
                key={index}
                className={`cursor-pointer py-4 text-[white] transition-all duration-300 ease-in-out w-full text-center text-lg font-medium hover:text-[#FD6F00] hover:bg-gray-600/30 rounded-md ${
                  location.pathname === val.pages
                    ? "text-[#FD6F00] bg-[#FD6F00] p-2"
                    : "text-white"
                }`}
                onClick={() => {
                  navigate(`${val.pages}`);
                  setOpen(false);
                }}
              >
                {val.title}
              </h3>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
