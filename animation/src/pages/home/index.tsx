import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
} from "react-icons/fa6";
import model from "../../assets/Model.png";
import { Carousel } from "antd";
import lula from "../../assets/lula.png";
import nan from "../../assets/lulu.png";
import nana from "../../assets/nana.png";
import lulu from "../../assets/lulu_nana.png"
const images = [lula, nan, nana, lula,,lulu, nan, nana];

const Home = () => {
  const responsiveSettings = [
    {
      breakpoint: 4000,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ];

  return (
    <div className="flex flex-col gap-[30px] min-h-screen m-auto ">
      <div className="bg-black text-white mt-5 flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-9 py-6">
        <div className="md:w-1/2 flex flex-col gap-4 p-4 text-center md:text-left">
          <p className="text-gray-300 font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">
            Hi I am
          </p>
          <h2 className="text-gray-300 font-bold text-lg sm:text-xl md:text-2xl lg:text-[28px]">
            Mahmood Fazile
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-extrabold text-orange-500 mt-2 leading-tight">
            UI/UX designer
          </h1>

          <div className="flex gap-2 sm:gap-3 mt-4 justify-center md:justify-start">
            <FaInstagram className="text-white w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 cursor-pointer hover:text-orange-500 transition-colors" />
            <FaFacebook className="text-white w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 cursor-pointer hover:text-orange-500 transition-colors" />
            <FaTelegram className="text-white w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 cursor-pointer hover:text-orange-500 transition-colors" />
            <FaLinkedinIn className="text-white w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 cursor-pointer hover:text-orange-500 transition-colors" />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-4 justify-center md:justify-start">
            <button className="bg-orange-500 w-full sm:w-[120px] md:w-[140px] lg:w-[156px] h-10 md:h-11 lg:h-12 text-white rounded-lg text-sm md:text-base hover:bg-orange-600 transition-colors">
              Hire Me
            </button>
            <button className="border border-gray-400 text-gray-300 w-full sm:w-[160px] md:w-[180px] lg:w-[208px] h-10 md:h-11 lg:h-12 rounded-lg text-sm md:text-base hover:border-orange-500 hover:text-orange-500 transition-colors">
              Download CV
            </button>
          </div>
        </div>

        <div className="mt-6 md:mt-0 px-4">
          <img
            src={model}
            alt="Model"
            className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] mx-auto object-contain"
          />
        </div>
      </div>

      <div className="!mt-[30px] !mb-[30px] px-4 sm:px-6 md:px-8">
        <Carousel
          autoplay
          autoplaySpeed={2000}
          responsive={responsiveSettings}
          className="py-6"
        >
          {images.map((img, index) => (
            <div key={index} className="flex justify-center">
              <img
                className=" w-[200px] h-[150px] cursor-pointer"
                src={img}
                alt={`carousel-img-${index}`}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
