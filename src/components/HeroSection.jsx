import { motion } from "framer-motion";
import wed1 from "../assets/image/wed2.png";
import ganpati from "../assets/image/ganpati.jpg";

export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full border-b-8 border-[#a12727]">

      {/* LEFT IMAGE SECTION */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-full h-[400px] sm:h-[480px] md:h-[650px] bg-[#e6d9c8] flex items-center justify-center text-gray-700 border-r-0 md:border-r-4 border-[#a12727]"
      >
        <motion.img
          src={wed1}
          alt="wedding"
          className="w-full h-full object-cover md:object-fill rounded-lg shadow-lg"
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
      </motion.div>

      {/* RIGHT TEXT SECTION */}
      <div className="bg-[#fff9f0] flex flex-col justify-center px-6 sm:px-10 py-20 text-center relative">

        {/* GANPATI ICON */}
        <motion.div
          className="w-16 h-16 sm:w-20 sm:h-20 bg-[#f2d7b6]
           rounded-full absolute top-6 left-1/2 -translate-x-1/2 shadow-md flex items-center justify-center overflow-hidden"
          animate={{ rotate: [-6, 6, -6] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <img src={ganpati} alt="ganu" className="w-full h-full object-cover" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-gray-700 mt-20 md:mt-0 font-para text-sm sm:text-base"
        >
          With the blessings of their families
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="font-head text-4xl sm:text-5xl md:text-6xl text-[#a12727] mt-4"
        >
          Malti & Devansh
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-4 text-gray-800 font-para text-sm sm:text-base leading-6"
        >
          request your gracious presence  
          <br /> to celebrate their wedding
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-6 leading-6 font-bold text-[#a12727] font-weds text-base sm:text-lg"
        >
          SATURDAY, NOVEMBER 15, 2025
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-6 text-gray-700 font-para text-sm sm:text-base leading-6"
        >
          Raunak Banquet <br />
          2nd Floor, Shreeji Arambh, Above Star Bazar,
          <br/>
           Kanakia Road, Mira Road East, Mumbai - 401107
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "8rem" }}
          transition={{ delay: 1.7, duration: 0.8 }}
          className="mt-10 mx-auto border-t-4 border-[#a12727]"
        />
      </div>
    </div>
  );
}
