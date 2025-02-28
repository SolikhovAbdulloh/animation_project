import { services } from "../../utils/cards";
import { FaUsers } from "react-icons/fa6";

const Curses = () => {
  return (
    <div className="bg-black text-white !mt-[20px] !p-6 !py-6 text-center">
      <h2 className="text-4xl font-700">Services</h2>
      <p className="text-[20px] font-500 text-[grey]">
        Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
        felis ligula aliquam
      </p>

      {/* Grid qismi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 !p-6 ">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-[#321818] text-black rounded-lg shadow-lg flex flex-col w-[350px] h-[320px] !p-8 items-center text-center"
          >
            <FaUsers className="text-orange-500 text-5xl" />
            <h3 className="text-xl font-bold text-center  text-orange-500 ">
              {service.title}
            </h3>
            <p className="text-gray-600 !mt-6">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Curses;
