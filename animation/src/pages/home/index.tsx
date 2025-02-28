import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
} from "react-icons/fa6";
import model from "../../assets/Model.png";
const Home = () => {
  return (
    <div className="bg-[black] text-white flex !mt-[20px]  md:flex-row items-center !px-9  justify-center ">
      {/* Chap qism (Matn + Ijtimoiy tarmoqlar + Tugmalar) */}
      <div className="md:w-1/2 text-center flex-col gap-5 flex  !p-7 md:text-left">
        <p className="text-gray-300 font-600 text-[24px]">Hi I am</p>
        <h2 className="text-gray-300 font-700 text-[28px]">Mahmood Fazile</h2>
        <h1 className="text-[70px] font-900 text-orange-500 mt-2">
          UI/UX designer
        </h1>

        {/* Ijtimoiy tarmoqlar */}
        <div className="flex gap-4 mt-6 justify-center md:justify-start">
          <FaInstagram className="text-white w-[40px] h-[40px] cursor-pointer" />
          <FaFacebook className="text-white w-[40px] h-[40px] cursor-pointer" />
          <FaTelegram className="text-white w-[40px] h-[40px] cursor-pointer" />
          <FaLinkedinIn className="text-white w-[40px] h-[40px] cursor-pointer" />
        </div>

        {/* Tugmalar */}
        <div className="flex gap-4 mt-6 justify-center md:justify-start">
          <button className="bg-orange-500 w-[156px] h-[48px] cursor-pointer text-white rounded-[8px]">
            Hire Me
          </button>
          <button className="border border-gray-400 text-gray-300 cursor-pointer w-[208px] h-[48px] rounded-[8px]">
            Download CV
          </button>
        </div>
      </div>

      {/* O'ng qism (Rasm) */}
      <div>
        <img src={model} alt="Model" />
      </div>
    </div>
  );
};

export default Home;
