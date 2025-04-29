import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaTelegramPlane } from "react-icons/fa";

const Call = () => {
  const contactItems = [
    {
      icon: <FaPhoneAlt />,
      label: "Qo‘ng‘iroq qilish",
      value: "+998 90 123 45 67",
      link: "tel:+998901234567",
    },
    {
      icon: <FaEnvelope />,
      label: "Email yuborish",
      value: "animator@example.com",
      link: "mailto:animator@example.com",
    },
    {
      icon: <FaTelegramPlane />,
      label: "Telegram orqali",
      value: "@ihlom_3d",
      link: "https://t.me/Solikhov_Frontend",
    },
  ];

  return (
    <section className="min-h-screen py-16 px-4 flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 to-orange-100">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-10"
      >
        Bog‘lanish
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {contactItems.map((item, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 px-6 py-8 text-center hover:bg-orange-50"
              aria-label={item.label}
            >
              <div className="text-4xl text-orange-500 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {item.label}
              </h2>
              <p className="text-gray-600">{item.value}</p>
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Call;
