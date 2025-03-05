import {  useRef } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa6";
import model from "../../assets/Model.png";
import { Carousel } from "antd";
import lula from "../../assets/lula.png";
import nan from "../../assets/lulu.png";
import nana from "../../assets/nana.png";
import lulu from "../../assets/lulu_nana.png";
import { motion, useInView } from "framer-motion"; // Framer Motion import qilindi
import { useNavigate } from "react-router-dom";
const images = [lula, nan, nana, lula, lulu, nan, nana];

const Home = () => {
  const bg1Ref = useRef(null);
  const textImageRef = useRef(null);
  const carouselRef = useRef(null);
  const navigate = useNavigate()
  const isBg1InView = useInView(bg1Ref, { once: false, amount: 0.2 });
  const isTextImageInView = useInView(textImageRef, {
    once: false,
    amount: 0.2,
  });
  const isCarouselInView = useInView(carouselRef, { once: false, amount: 0.2 });

  // Animatsiya variantlari
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const responsiveSettings = [
    {
      breakpoint: 4000,
      settings: { slidesToShow: 6, slidesToScroll: 2 },
    },
    {
      breakpoint: 1200,
      settings: { slidesToShow: 4, slidesToScroll: 1 },
    },
    {
      breakpoint: 900,
      settings: { slidesToShow: 3, slidesToScroll: 1 },
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 2, slidesToScroll: 1 },
    },
  ];

  return (
    <div className="flex flex-col gap-[30px] min-h-screen m-auto">
      {/* Bg1 sektsiyasi */}
      <motion.div
        ref={bg1Ref}
        initial="hidden"
        animate={isBg1InView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="bg1 h-[600px] flex items-center justify-center text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
      >
        JaBu Animation Ustoz - shogird maktabi
      </motion.div>

      {/* Matn va rasm sektsiyasi */}
      <motion.div
        ref={textImageRef}
        initial="hidden"
        animate={isTextImageInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className=" text-white mt-5 flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-9 py-6"
      >
        <div className="md:w-1/2 flex flex-col gap-4 p-4 text-center md:text-left">
          <p className="text-black font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">
            Animatsiya olamiga xush kelibsiz
          </p>
          <h2 className="text-black font-bold text-lg sm:text-xl md:text-2xl lg:text-[28px]">
            Ihlom Karimov
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-extrabold text-orange-500 mt-2 leading-tight">
            3D Animator
          </h1>

          <div className="flex gap-3 sm:gap-3 mt-4 justify-center md:justify-start">
            <FaInstagram className="text-black w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 cursor-pointer hover:text-[red]  transition-colors animate-pulse-rotate" />
            <FaFacebook className="text-black w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 cursor-pointer hover:text-[#0033ffc4] transition-colors animate-pulse-rotate" />
            <FaTelegram className="text-black w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 cursor-pointer hover:text-[#00d9ff] transition-colors animate-pulse-rotate" />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-4 justify-center md:justify-start">
            <button onClick={()=> navigate('/about')} className="border border-gray-400 text-orange-500 w-full sm:w-[160px] md:w-[180px] lg:w-[208px] h-10 md:h-11 lg:h-12 rounded-lg text-sm md:text-base hover:border-orange-500 hover:text-orange-500 transition-colors">
              Batafsil
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
      </motion.div>

      {/* Karusel sektsiyasi */}
      <motion.div
        ref={carouselRef}
        initial="hidden"
        animate={isCarouselInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="!mt-[30px] !mb-[30px] px-4 sm:px-6 md:px-8"
      >
        <Carousel
          autoplay
          autoplaySpeed={2000}
          responsive={responsiveSettings}
          className="py-6"
        >
          {images.map((img, index) => (
            <div key={index} className="flex justify-center">
              <img
                className="w-[200px] h-[150px] cursor-pointer rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                src={img}
                alt={`carousel-img-${index}`}
              />
            </div>
          ))}
        </Carousel>
      </motion.div>
    </div>
  );
};

export default Home;
