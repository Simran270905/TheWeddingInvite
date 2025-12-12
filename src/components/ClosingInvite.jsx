import { motion } from "framer-motion";

export default function ClosingInvite() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="py-16 bg-[#fff9f0] text-center"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="font-foot text-5xl text-[#a12727] mb-4"
      >
        Hope to see you soon!
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="text-gray-700 text-lg font-title"
      >
        Your presence will make our celebration truly special.
      </motion.p>

      {/* Divider / Line Animation */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "8rem" }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        className="mx-auto mt-10 border-t-4 border-[#a12727]"
      ></motion.div>
    </motion.div>
  );
}
