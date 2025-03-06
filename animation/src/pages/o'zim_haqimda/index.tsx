import React from "react";
import { motion, useInView } from "framer-motion";
import model from "/Model.png";

const About = () => {
  const textRef = React.useRef(null);
  const isTextInView = useInView(textRef, { once: true, amount: 0.3 });

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div className="flex flex-col items-center min-h-screen ">
      <div
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://daryo.uz/cache/2020/07/ralp-728x455.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.h1
            initial="hidden"
            animate={isTextInView ? "visible" : "hidden"}
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-wide drop-shadow-lg"
          >
            Animatsiya olami
          </motion.h1>
        </div>
      </div>

      {/* Content Section */}
      <div className=" w-full px-4 sm:px-6 md:px-8 py-12  rounded-xl  mt-[60px]  z-20">
        <motion.div
          ref={textRef}
          initial="hidden"
          animate={isTextInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-between gap-8 text-gray-800"
        >
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              className="w-[300px] sm:w-[350px] md:w-[400px] rounded-full  shadow-lg transition-all duration-500 hover:rotate-4  hover:brightness-125"
              src={model}
              alt="Ilhom Karimov"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-600">
              Ilhom Karimov
            </h2>
            <p className="text-lg sm:text-xl font-medium text-gray-600">
              "Lola Animation" loyihasi bosh animatori | 3D animatsiya
              "Shogirdlik" dasturi bo‘yicha ustoz
            </p>
            <p className="text-base sm:text-lg text-gray-700">
              Animatsiya sohasida{" "}
              <span className="font-semibold text-orange-500">3 yillik</span>{" "}
              tajribaga ega mutaxassis.
            </p>
            <p className="text-base sm:text-lg text-gray-700">
              Ular ishtirokida quyidagi loyihalar tayyorlangan:
            </p>
            <ul className="list-none space-y-3 text-base sm:text-lg text-gray-800">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>{" "}
                “Baxt Ulashamiz”
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>{" "}
                “Lulu Nana”
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>{" "}
                “Qahramonlar”
              </li>
            </ul>
            <p className="text-base sm:text-lg text-gray-700">
              Nafaqat o‘zi muvaffaqiyatli loyihalarni amalga oshirgan, balki o‘z
              bilim va tajribasini boshqalarga ulashishga ham ulgurgan.
            </p>
            <p className="text-base sm:text-lg text-gray-700">
              Ular ta’lim bergan{" "}
              <span className="font-semibold text-orange-500">
                6 nafar o‘quvchi
              </span>{" "}
              bugungi kunda{" "}
              <span className="font-semibold text-orange-500">
                Lola Animation
              </span>{" "}
              jamoasining bir qismiga aylanib, animator sifatida ishlashmoqda.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
