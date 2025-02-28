import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { pages } from "../../utils";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between items-center bg-[black] text-red-800 !p-4 shadow-md z-20">
      {/* Logo */}
      <img
        src="https://jabuanimation.uz/images/88/13397998/Logo.png"
        alt="logo"
        onClick={() => navigate("/")}
        className="w-16 sm:w-20 md:w-24 object-contain cursor-pointer"
      />

      {/* Mobile menu button */}
      <button
        className="md:hidden text-[#FD6F00] focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        {open ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Desktop menu */}
      <div className="hidden md:flex items-center gap-6 text-white">
        {pages.map((val, index) => (
          <h3
            key={index}
            className="cursor-pointer hover:text-[#FD6F00] transition-colors duration-200 text-sm md:text-base"
            onClick={() => navigate(`${val.pages}`)}
          >
            {val.title}
          </h3>
        ))}
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className={`fixed top-0 left-0 w-[50%] h-[400px] bg-[grey] p-4 flex flex-col items-center md:hidden shadow-lg z-30 mt-14 sm:mt-16 transition-transform duration-[3000ms] ease-in-out ${
            open ? "translate-x-0" : "-translate-x-[50%]"
          }`}
        >
          {pages.map((val, index) => (
            <h3
              key={index}
              className="cursor-pointer py-3 text-black hover:text-[#FD6F00] transition-colors duration-200 w-full text-center text-base"
              onClick={() => {
                navigate(`${val.pages}`);
                setOpen(false);
              }}
            >
              {val.title}
            </h3>
          ))}
          <button
            className="text-[20px] mt-4 text-black hover:text-[#FD6F00]"
            onClick={() => setOpen(false)}
          >
            Exit
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
