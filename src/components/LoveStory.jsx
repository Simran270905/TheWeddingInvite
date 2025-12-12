import { motion } from "framer-motion";
import love1 from "../assets/image/love1.jpg";
import love2 from "../assets/image/love2.jpg";

export default function LoveStory() {
  return (
    <div className="py-20 px-6 md:px-20 bg-[#fff4e3]">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="font-title text-5xl text-center text-[#a12727] mb-12"
      >
        Our Love Journey
      </motion.h2>

      {/* ------------------- HOW WE MET ------------------- */}
      <div className="grid md:grid-cols-2 gap-12">

        {/* Text Box */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-white p-8 shadow-lg border-l-8 border-[#a12727] relative"
        >
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="absolute -top-4 left-4 bg-[#f2d7b6] px-3 py-1 font-bold text-[#a12727] shadow font-font"
          >
            How We Met
          </motion.div>

          <p className="leading-7 text-gray-800 mt-6 font-font font-regular">
            We often joke that the universe had to practically shove us together.
            It wasn't a whirlwind romance or a perfectly planned introduction—it
            was better. It began with a classic case of mistaken identity in a
            bustling café, where one of us accidentally snagged the other's
            perfectly-brewed latte...
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full h-[320px] bg-[#e6d9c8] shadow-md border-l-4 border-[#a12727] flex items-center justify-center overflow-hidden"
        >
          <motion.img
            src={love1}
            alt="love1"
            className="w-full h-full object-cover"
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>

      {/* ------------------- PROPOSAL ------------------- */}
      <div className="grid md:grid-cols-2 gap-12 mt-16">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full h-[320px] bg-[#e6d9c8] shadow-md border-l-4 border-[#a12727] flex items-center justify-center"
        >
          <motion.img
            src={love2}
            alt="love2"
            className="w-full h-full object-cover"
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Text Box */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-white p-8 shadow-lg border-l-8 border-[#a12727] relative"
        >
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="absolute -top-4 left-4 bg-[#f2d7b6] px-3 py-1 font-bold font-font text-[#a12727] shadow"
          >
            The Proposal
          </motion.div>

          <p className="leading-7 text-gray-800 mt-6 font-font font-regular">
            The meeting was fate, but the proposal was a beautifully orchestrated
            moment of pure surprise. It happened in our favorite rooftop at sunset...
          </p>
        </motion.div>
      </div>
    </div>
  );
}
