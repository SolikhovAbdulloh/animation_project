import { Carousel } from "antd";
import lula from "/lula.png";
import nan from "/lulu.png";
import nana from "/nana.png";
import lulu from "/lulu_nana.png";
import { motion } from "framer-motion";

const Lessons = () => {
  const images = [lula, lulu, nan, nana];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-yellow-200 to-orange-300 p-6">
      <div className="w-full max-w-6xl shadow-2xl rounded-2xl overflow-hidden bg-white p-4">
        <Carousel
          autoplay
          autoplaySpeed={3000}
          dots
          effect="fade"
          className="rounded-2xl"
        >
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center items-center"
            >
              <img
                className="h-[600px] md:h-[700px] w-full object-cover rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
                src={img}
                alt={`lesson-${idx}`}
              />
            </motion.div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Lessons;
