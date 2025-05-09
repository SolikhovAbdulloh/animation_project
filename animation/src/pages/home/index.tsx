import { useRef } from "react";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa6";
import model from "/Model.png";
import { Carousel } from "antd";
import lula from "/lula.png";
import nan from "/lulu.png";
import nana from "/nana.png";
import lulu from "/lulu_nana.png";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import About from "../o'zim_haqimda";

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
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 20, delay: 0.3 },
    },
  };

  return (
    <div className="flex flex-col gap-[30px] min-h-screen m-auto">
      <motion.div
        ref={textImageRef}
        initial="hidden"
        animate={isTextImageInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="text-white mt-5 flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-9 py-6"
      >
        <div className="md:w-1/2 flex flex-col gap-5 p-5 text-center md:text-left text-white rounded-xl">
          <motion.p
            className="text-orange-400 font-semibold text-base sm:text-lg md:text-xl lg:text-2xl italic"
            variants={headingVariants}
          >
            Animatsiya olamiga xush kelibsiz
          </motion.p>
          <motion.h2
            className="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-[28px] tracking-wider"
            variants={headingVariants}
          >
            Ihlom Karimov
          </motion.h2>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-extrabold mt-2 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-400"
            variants={headingVariants}
          >
            3D Animator
          </motion.h1>

          <div className="flex gap-5 mt-4 justify-center md:justify-start">
            {[FaInstagram, FaFacebook, FaTelegram].map((Icon, i) => (
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                key={i}
              >
                <Icon className="text-orange-500 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 cursor-pointer hover:animate-pulse transition duration-300" />
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-5 justify-center md:justify-start">
            <motion.button
              onClick={() => navigate("/about")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-white w-full sm:w-[180px] md:w-[200px] lg:w-[220px] h-12 md:h-13 lg:h-14 rounded-lg text-base md:text-lg font-bold hover:bg-orange-600 transition-all duration-300"
            >
              Batafsil
            </motion.button>
          </div>
        </div>

        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ duration: 0.3 }}
          className="mt-6 px-4 flex justify-center sm:mt-[10px]"
        >
          <div className="w-full max-w-[450px] p-4 rounded-2xl cursor-pointer bg-gradient-to-r from-white to-orange-500 shadow-xl hover:shadow-2xl">
            <img
              src={model}
              alt="logo"
              className="w-full h-auto rounded-lg object-cover border-2 border-white"
            />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        ref={bg1Ref}
        initial="hidden"
        animate={isBg1InView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="h-[600px] flex items-center justify-center text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
      >
        <motion.div
          variants={sectionVariants}
          transition={{ delay: 0.2, duration: 1.2 }}
          className="flex flex-col sm:flex-row items-center gap-4 px-2"
        >
          <video controls className="w-full sm:w-[50%] h-[200px] sm:h-[500px]">
            <source type="video/mp4" src="/videos/Final_with-render-2.mp4" />
          </video>
          <video controls className="w-full sm:w-[50%] h-[200px] sm:h-[500px]">
            <source type="video/mp4" src="/videos/final.mp4" />
          </video>
        </motion.div>
      </motion.div>

      {/* <motion.div
        ref={carouselRef}
        initial="hidden"
        animate={isCarouselInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className="!mt-[30px] !mb-[30px] px-4 sm:px-6 md:px-8"
      >
        <Carousel autoplay autoplaySpeed={2000} className="py-1">
          {images.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex justify-between"
            >
              <img
                className="w-[200px] h-[250px] cursor-pointer rounded-lg shadow-md transition-transform duration-300"
                src={img}
                alt={`carousel-img-${index}`}
              />
            </motion.div>
          ))}
        </Carousel>
      </motion.div> */}
    </div>
  );
};

export default Home;
