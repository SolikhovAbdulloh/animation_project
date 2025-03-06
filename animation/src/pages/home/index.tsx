import { useRef } from "react";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa6";
import model from "../../public/Model.png";
import { Carousel } from "antd";
import lula from "../../public/lula.png";
import nan from "../../public/lulu.png";
import nana from "../../public/nana.png";
import lulu from "../../public/lulu_nana.png";
import { motion, useInView } from "framer-motion"; 
import { useNavigate } from "react-router-dom";
const images = [lula, nan, nana, lula, lulu, nan, nana];

const Home = () => {
  const bg1Ref = useRef(null);
  const textImageRef = useRef(null);
  const carouselRef = useRef(null);
  const navigate = useNavigate();
  const isBg1InView = useInView(bg1Ref, { once: false, amount: 0.2 });
  const isTextImageInView = useInView(textImageRef, {
    once: false,
    amount: 0.2,
  });
  const isCarouselInView = useInView(carouselRef, { once: false, amount: 0.2 });

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
      settings: { slidesToShow: 8, slidesToScroll: 2 },
    },
    {
      breakpoint: 1200,
      settings: { slidesToShow: 6, slidesToScroll: 1 },
    },
    {
      breakpoint: 900,
      settings: { slidesToShow: 4, slidesToScroll: 1 },
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 2, slidesToScroll: 1 },
    },
  ];

  return (
    <div className="flex flex-col gap-[30px] min-h-screen m-auto">
      <motion.div
        ref={textImageRef}
        initial="hidden"
        animate={isTextImageInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className=" text-white mt-5 flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-9 py-6"
      >
        <div className="md:w-1/2 flex flex-col gap-5 p-5 text-center md:text-left  text-white rounded-xl">
          <p className="text-orange-400 font-semibold text-base sm:text-lg md:text-xl lg:text-2xl italic">
            Animatsiya olamiga xush kelibsiz
          </p>
          <h2 className="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-[28px] tracking-wider">
            Ihlom Karimov
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-extrabold  mt-2 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-400">
            3D Animator
          </h1>

          <div className="flex gap-5 mt-4 justify-center md:justify-start">
            <FaInstagram className="text-orange-500 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 cursor-pointer hover:text-pink-600 transition-colors duration-200 animate-bounce" />
            <FaFacebook className="text-orange-500 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 cursor-pointer hover:text-blue-700 transition-colors duration-200 animate-bounce" />
            <FaTelegram className="text-orange-500 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 cursor-pointer hover:text-cyan-400 transition-colors duration-200 animate-bounce" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-5 justify-center md:justify-start">
            <button
              onClick={() => navigate("/about")}
              className="bg-orange-500 text-white w-full sm:w-[180px] md:w-[200px] lg:w-[220px] h-12 md:h-13 lg:h-14 rounded-lg text-base md:text-lg font-bold hover:bg-orange-600 hover:scale-105 transition-all duration-300"
            >
              Batafsil
            </button>
          </div>
        </div>

        <div className="mt-6 md:mt-0 px-4">
          <div className="relative py-3 w-full max-w-[150px] sm:max-w-[300px] md:max-w-[250px] lg:max-w-[300px] mx-auto">
            <div className="absolute inset-0 rounded-xl border-2 border-orange-300 bg-white animate-twirl-glow shadow-md transform transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-orange-300 opacity-20 animate-twirl-spin"></div>
              <div className="absolute top-[-20px] left-[-20px]  bg-white rounded-full flex items-center justify-center border-2 border-orange-300 shadow-sm animate-bounce">
                <img src={nana} className="w-[150px] h-[150px]" alt="lulu" />
              </div>
              <div className="absolute bottom-[-20px] right-[-20px]  bg-white rounded-full flex items-center justify-center border-2 border-orange-300 shadow-sm animate-bounce">
                <img src={lulu} className="w-[150px] h-[150px]" alt="lulu" />
              </div>
              <div className="absolute top-[-20px] right-[-20px] bg-white rounded-full flex items-center justify-center border-2 border-orange-300 shadow-sm animate-bounce-delayed">
                <img src={nan} className="w-[150px] h-[150px]" alt="lulu" />
              </div>
              <div className="absolute bottom-[-20px] left-[-20px]  bg-white rounded-full flex items-center justify-center border-2 border-orange-300 shadow-sm animate-bounce-delayed">
                <img src={lula} className="w-[150px] h-[150px]" alt="lulu" />
              </div>
            </div>
            <img
              src={model}
              alt="Model"
              className="relative w-full h-auto rounded-lg object-cover z-10"
            />
            <style>{`
              @keyframes twirlGlow {
                0% {
                  transform: rotate(0deg) scale(1);
                }
                25% {
                  transform: rotate(90deg) scale(1.02);
                }
                50% {
                  transform: rotate(180deg) scale(1);
                }
                75% {
                  transform: rotate(270deg) scale(1.02);
                }
                100% {
                  transform: rotate(360deg) scale(1);
                }
              }
              @keyframes twirlSpin {
                0% {
                  transform: rotate(0deg);
                }
                100% {
                  transform: rotate(360deg);
                }
              }
              @keyframes bounce {
                0%,
                100% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(-10px);
                }
              }
              @keyframes bounceDelayed {
                0%,
                100% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(-10px);
                }
              }
              .animate-twirl-glow {
                animation: twirlGlow 16s ease-in-out infinite;
              }
              .animate-twirl-spin {
                animation: twirlSpin 12s linear infinite;
              }
              .animate-bounce {
                animation: bounce 2s ease-in-out infinite;
              }
              .animate-bounce-delayed {
                animation: bounceDelayed 2s ease-in-out infinite 0.5s;
              }
            `}</style>
          </div>
        </div>
      </motion.div>
      <motion.div
        ref={bg1Ref}
        initial="hidden"
        animate={isBg1InView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="h-[600px] flex items-center justify-center text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
      >
        <div className="flex items-center justify-between gap-4">
          <video controls className="w-[50%] h-[500px]">
            <source
              type="video/mp4"
              src="/src/public/videos/Final_with-render-2.mp4"
            />
          </video>
          <video controls className="w-[50%] h-[500px]">
            <source type="video/mp4" src="/src/public/videos/final.mp4" />
          </video>
        </div>
      </motion.div>

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
