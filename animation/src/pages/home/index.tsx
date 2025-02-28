import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
} from "react-icons/fa6";
import model from "../../assets/Model.png";

const Home = () => {
  return (
    <div className="bg-black text-white mt-5 flex flex-col md:flex-row items-center justify-center px-4 md:px-9 py-6">
      {/* Chap qism (Matn + Ijtimoiy tarmoqlar + Tugmalar) */}
      <div className="md:w-1/2 flex flex-col gap-4 p-4 text-center md:text-left">
        <p className="text-gray-300 font-semibold text-lg sm:text-xl md:text-2xl">
          Hi I am
        </p>
        <h2 className="text-gray-300 font-bold text-xl sm:text-2xl md:text-[28px]">
          Mahmood Fazile
        </h2>
        <h1 className="text-4xl sm:text-5xl md:text-[70px] font-extrabold text-orange-500 mt-2">
          UI/UX designer
        </h1>

        {/* Ijtimoiy tarmoqlar */}
        <div className="flex gap-3 mt-4 justify-center md:justify-start">
          <FaInstagram className="text-white w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 cursor-pointer" />
          <FaFacebook className="text-white w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 cursor-pointer" />
          <FaTelegram className="text-white w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 cursor-pointer" />
          <FaLinkedinIn className="text-white w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 cursor-pointer" />
        </div>

        {/* Tugmalar */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4 justify-center md:justify-start">
          <button className="bg-orange-500 w-full sm:w-[140px] md:w-[156px] h-10 md:h-12 text-white rounded-lg text-sm md:text-base">
            Hire Me
          </button>
          <button className="border border-gray-400 text-gray-300 w-full sm:w-[180px] md:w-[208px] h-10 md:h-12 rounded-lg text-sm md:text-base">
            Download CV
          </button>
        </div>
      </div>

      {/* O'ng qism (Rasm) */}
      <div className="mt-6 md:mt-0">
        <img
          src={model}
          alt="Model"
          className="w-full max-w-[300px] md:max-w-[400px] mx-auto"
        />
      </div>
    </div>
  );
};

export default Home;
