import { motion } from "framer-motion";
import wed1 from "../assets/image/wed2.png";
import ganpati from "../assets/image/ganpati.jpg";

// Centralized config object - Admin can easily edit all details here
const weddingConfig = {
  id: "malti-devansh-2025",
  heroImage: wed1,
  ganpatiIcon: ganpati,
  introText: "With the blessings of their families",
  coupleNames: "Malti & Devansh",
  invitationText: "request your gracious presence  <br /> to celebrate their wedding",
  eventDate: "SATURDAY, NOVEMBER 15, 2025",
  venue: {
    name: "Raunak Banquet",
    address:
      "2nd Floor, Shreeji Arambh, Above Star Bazar, <br/> Kanakia Road, Mira Road East, Mumbai - 401107",
  },
  primaryColor: "#a12727",
  bgLeft: "#e6d9c8",
  bgRight: "#fff9f0",
};

export default function HeroSection() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 w-full border-b-8"
      style={{ borderColor: weddingConfig.primaryColor }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      {/* LEFT IMAGE SECTION */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -50 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-full h-[400px] sm:h-[480px] md:h-[650px] flex items-center justify-center text-gray-700 border-r-0 md:border-r-4"
        style={{
          backgroundColor: weddingConfig.bgLeft,
          borderColor: weddingConfig.primaryColor,
        }}
      >
        <motion.img
          src={weddingConfig.heroImage}
          alt="wedding"
          className="w-full h-full object-cover md:object-fill rounded-lg shadow-lg hover:shadow-2xl cursor-pointer"
          initial={{ y: 0 }}
          whileHover={{ y: -12, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      </motion.div>

      {/* RIGHT TEXT SECTION */}
      <motion.div
        className="flex flex-col justify-center px-6 sm:px-10 py-20 text-center relative"
        style={{ backgroundColor: weddingConfig.bgRight }}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* GANPATI ICON */}
        <motion.div
          className="w-16 h-16 sm:w-20 sm:h-20 bg-[#f2d7b6] rounded-full absolute top-6 left-1/2 -translate-x-1/2 shadow-md flex items-center justify-center overflow-hidden z-10"
          initial={{ rotate: 0, scale: 0 }}
          whileInView={{ rotate: [0, -6, 6, -6], scale: 1 }}
          viewport={{ once: true }}
          transition={{
            rotate: { repeat: Infinity, duration: 4, ease: "easeInOut" },
            scale: { duration: 0.6, delay: 0.4 },
          }}
        >
          <motion.img
            src={weddingConfig.ganpatiIcon}
            alt="ganu"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-gray-700 mt-20 md:mt-0 font-para text-sm sm:text-base"
          dangerouslySetInnerHTML={{ __html: weddingConfig.introText }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="font-head text-4xl sm:text-5xl md:text-6xl mt-4"
          style={{ color: weddingConfig.primaryColor }}
          whileHover={{ scale: 1.02 }}
        >
          {weddingConfig.coupleNames}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-4 text-gray-800 font-para text-sm sm:text-base leading-6"
          dangerouslySetInnerHTML={{ __html: weddingConfig.invitationText }}
        />

        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mt-6 leading-6 font-bold font-weds text-base sm:text-lg"
          style={{ color: weddingConfig.primaryColor }}
          whileHover={{ y: -2 }}
        >
          {weddingConfig.eventDate}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-6 text-gray-700 font-para text-sm sm:text-base leading-6"
          dangerouslySetInnerHTML={{ __html: weddingConfig.venue.address }}
        />

        <motion.div
          initial={{ width: 0, scaleX: 0 }}
          whileInView={{ width: "8rem", scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="mt-10 mx-auto border-t-4"
          style={{ borderColor: weddingConfig.primaryColor }}
        />
      </motion.div>
    </motion.div>
  );
}
