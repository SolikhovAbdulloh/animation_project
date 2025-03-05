import React from "react";
import { motion, useInView } from "framer-motion"; // Framer Motion import qilindi

const About = () => {
  const imgRef = React.useRef(null);
  const textRef = React.useRef(null);

  // Elementlar ekranga kirganligini tekshirish
  const isImgInView = useInView(imgRef, { once: true, amount: 0.2 });
  const isTextInView = useInView(textRef, { once: true, amount: 0.2 });

  // Animatsiya variantlari
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="text-black mt-[60px] flex flex-col gap-[30px] mb-[30px] bg-gray-50 px-4 sm:px-6 md:px-8">
      {/* Sarlavha qismi */}
      <div className="flex items-center justify-center flex-col text-center py-8">
        <motion.h2
          initial="hidden"
          animate={isImgInView || isTextInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="text-4xl sm:text-3xl md:text-4xl font-bold text-gray-800"
        >
          O‘zim haqimda
        </motion.h2>
        <motion.p
          initial="hidden"
          animate={isImgInView || isTextInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="text-gray-500 text-lg sm:text-base md:text-lg font-medium mt-2"
        >
          "Lola Animation" loyihasi bosh animatori
        </motion.p>
      </div>

      {/* Rasm va matn qismi */}
      <div className="flex flex-col md:flex-row items-center justify-around py-4 gap-8 rounded-lg mx-auto max-w-7xl">
        <motion.div
          ref={textRef}
          initial="hidden"
          animate={isTextInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="font-medium text-xl sm:text-lg md:text-xl text-gray-600 max-w-[350px] leading-relaxed text-left"
        >
          <p className="mb-2">
            <strong className="text-xl sm:text-lg md:text-xl">
              {" "}
              Ilhom Karimov{" "}
            </strong>{" "}
            "Lola Animation" loyihasi bosh animatori | 3D animatsiya
            "Shogirdlik" dasturi bo'yicha ustoz. Animatsiya sohasida{" "}
            <strong className="text-lg sm:text-base md:text-lg">
              {" "}
              3 yillik{" "}
            </strong>{" "}
            tajribaga ega mutaxassisman.
          </p>
          <p className="mb-2">Ishtirokimda quyidagi loyihalar tayyorlangan:</p>
          <ul className="list-disc list-inside text-black mb-4">
            <li className="text-base sm:text-sm md:text-base">
              “Baxt Ulashamiz”
            </li>
            <li className="text-base sm:text-sm md:text-base">“Lulu Nana”</li>
            <li className="text-base sm:text-sm md:text-base">“Qahramonlar”</li>
          </ul>
          <p className="mb-2">
            Nafaqat o‘zi muvaffaqiyatli loyihalarni amalga oshirgan, balki o‘z
            bilim va tajribasini boshqalarga ulashishga ham ulgurganlar.
          </p>
          <p>
            Ular ta’lim bergan 6 nafar o‘quvchi bugungi kunda{" "}
            <strong className="text-lg sm:text-base md:text-lg">
              {" "}
              Lola Animation{" "}
            </strong>
            jamoasining bir qismiga aylanib, animator sifatida ishlashmoqda.
          </p>
        </motion.div>
        <motion.img
          ref={imgRef}
          initial="hidden"
          animate={isImgInView ? "visible" : "hidden"}
          variants={itemVariants}
          src={
            "https://optim.tildacdn.one/tild6561-3330-4535-a437-386236653265/-/format/webp/IMG_7513.JPG"
          }
          alt="Ilhom Karimov"
          className="w-full h-[560px] max-w-[600px] md:max-w-[500px] sm:max-w-[300px] rounded-lg object-cover shadow-lg"
        />
      </div>
    </div>
  );
};

export default About;
