import { motion } from "framer-motion";

const Students = () => {
  // Animation variants for staggered effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
      transition: {
        duration: 0.3,
      },
    },
  };

  const videos = [
    { src: "/videos/Husanjon-24.mp4", id: 1 },
    { src: "/videos/Doniyor-13.mp4", id: 2 },
    { src: "/videos/Doniyor-17.mp4", id: 3 },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-100 to-red-100 py-12 px-4 flex flex-col items-center justify-center gap-12">
      <header>
        <strong className="text-4xl text-green-500 p-2">Shogirdlar Ijodidan</strong>
        <motion.h1
          initial={{ opacity: 0, y: -2 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-500"
        ></motion.h1>
      </header>

      <motion.div
        className="w-full max-w-7xl flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {videos.map((video) => (
          <motion.article
            key={video.id}
            variants={cardVariants}
            whileHover="hover"
            className="w-full sm:w-[48%] lg:w-[31%] bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <video
              className="w-full h-[250px] sm:h-[300px] md:h-[320px] rounded-t-2xl object-cover"
              controls
              aria-label={`Student creation video ${video.id}`}
            >
              <source src={video.src} type="video/mp4" />
              Sizning brauzeringiz video formatini qo'llab-quvvatlamaydi.
            </video>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Students;
