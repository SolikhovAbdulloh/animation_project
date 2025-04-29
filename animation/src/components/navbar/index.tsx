import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { pages } from "../../utils";
import logotip from "/logo_lola.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex navbar justify-between items-center text-black !p-4">
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
          className={`fixed top-0 left-0 h-full bg-gradient-to-b bg-[#ececec] p-6 flex justify-start z-30 transition-all duration-500 ease-in-out transform ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div
            className="w-[250px] p-6 rounded-r-2xl shadow-2xl flex flex-col items-start gap-6 animate-slideRight"
            style={{
              animation: "slideRight 0.5s ease-out",
            }}
          >
            {/* Close button */}
          

            {/* Menu links */}
            {pages.map((val, index) => {
              const isActive = location.pathname === val.pages;
              return (
                <button
                  key={index}
                  className={`w-[90%] py-3 px-5 rounded-lg text-lg font-medium flex justify-center text-center transition-all duration-500 transform 
              ${
                isActive
                  ? "bg-gradient-to-r from-[#FF6200] to-[#FF8F00]  shadow-lg scale-105 ring-1 "
                  : "bg-[##FF8F00]/50 hover:scale-105 hover:bg-gradient-to-r hover:from-[#FF6200]/60 hover:to-[#FF8F00]/60 hover:shadow-md"
              }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "both",
                  }}
                  onClick={() => {
                    navigate(val.pages);
                    setOpen(false);
                  }}
                >
                  {val.title}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
