import { services } from "../../utils/cards";
import { FaUsers } from "react-icons/fa6";
import { motion } from "framer-motion";

const Curses = () => {
  return (
    <div className="bg text-white mt-5 p-4 py-6 flex items-center justify-center flex-col gap-6">
      <div className="flex items-center justify-center flex-col gap-4 text-center !mb-6 !mt-[30px]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Services</h2>
        <p className="sm:text-lg md:text-xl font-medium text-gray-400 mt-2 max-w-2xl">
          Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
          felis ligula aliquam
        </p>
      </div>

      {/* Grid qismi */}
      <div className="grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-1 gap-4 mt-8 !p-4">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-[#321818] text-black rounded-lg shadow-lg flex flex-col justify-around items-center text-center !p-4 w-full max-w-[350px] h-auto min-h-[280px] mx-auto"
          >
            <div className="flex items-center justify-center flex-col gap-2 w-[50%]">
              <FaUsers className="text-orange-500 text-3xl sm:text-4xl md:text-5xl" />
              <h3 className="text-lg sm:text-xl font-bold text-orange-500 mt-4">
                {service.title}
              </h3>
            </div>
            <p className="text-gray-600 text-sm sm:text-base mt-4">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Curses;
