import { motion } from "framer-motion";

export default function TravelStay() {
  return (
    <div className="py-20 px-6 md:px-20 bg-[#faf4e8]">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="font-title text-5xl text-center text-[#a12727] mb-6"
      >
        Travel & Stay
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="text-center text-gray-700 max-w-2xl mx-auto mb-14 font-font text-lg"
      >
        We want your journey to our celebration to be as beautiful and comfortable as possible.
      </motion.p>

      {/* Boxes Grid */}
      <div className="grid md:grid-cols-3 gap-10 font-font">
        
        <AnimatedBox icon="✈️" title="Getting Here">
          The nearest airport is <b>City International Airport</b>, 35 minutes from the venue.
        </AnimatedBox>

        <AnimatedBox icon="🏨" title="Stay & Accommodation">
          Comfortable rooms at <b>Rosewood Heritage Resort</b>, with shuttle service.
        </AnimatedBox>

        <AnimatedBox icon="📍" title="Wedding Venue">
          The celebration will take place at <b>Raunak Banquet</b>.
        </AnimatedBox>
      </div>

      {/* Bottom Divider */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "10rem" }}
        transition={{ duration: 1.2 }}
        className="mx-auto mt-16 border-t-4 border-[#a12727]"
      ></motion.div>
    </div>
  );
}

/* --------------------- Animated Box Component ----------------------- */

function AnimatedBox({ icon, title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{
        y: -8,
        boxShadow: "0px 12px 22px rgba(0,0,0,0.15)",
      }}
      className="bg-white p-8 shadow-lg border-t-8 border-[#a12727] rounded-lg relative"
    >
      {/* Animated Icon */}
      <motion.div
        animate={{
          scale: [1, 1.14, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.6,
          ease: "easeInOut",
        }}
        className="w-16 h-16 bg-[#f2d7b6] border-2 border-[#a12727] rounded-full flex items-center justify-center mb-6 mx-auto text-3xl"
      >
        {icon}
      </motion.div>

      <h3 className="text-2xl font-['Great Vibes'] text-[#a12727] text-center mb-4">
        {title}
      </h3>

      <p className="text-gray-700 text-center leading-7 font-['Patrick Hand']">
        {children}
      </p>
    </motion.div>
  );
}
  