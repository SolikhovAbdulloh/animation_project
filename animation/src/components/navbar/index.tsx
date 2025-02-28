import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { pages } from "../../utils";
const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div className="p-4 flex justify-around items-center">
      {/* Logo */}
      <img
        src="https://jabuanimation.uz/images/88/13397998/Logo.png"
        alt="logo"
      />

      {/* Mobile menu button */}
      <button
        className="md:hidden block text-black focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        {open ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      {/* Desktop menu */}
      <div className="hidden md:flex text-[grey] items-center  gap-9">
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

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-[#d5b0b0] p-4 flex flex-col items-center md:hidden shadow-lg z-10">
          {pages.map((val, index) => (
            <h3
              key={index}
              className="cursor-pointer py-3 text-black hover:text-gray-700 transition-colors duration-200 w-full text-center"
              onClick={() => {
                navigate(`${val.pages}`);
                setOpen(false);
              }}
            >
              {val.title}
            </h3>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
