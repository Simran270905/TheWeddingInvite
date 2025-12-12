import { motion } from "framer-motion";
import Collage from "../components/Collage";

export default function Schedule() {
  const schedule = [
    ["11 November 2025", "Engagement Ceremony"],
    ["12 November 2025", "Mehendi Ceremony"],
    ["13 November 2025", "Cocktail Party"],
    ["14 November 2025", "Haldi Ceremony"],
    ["15 November 2025", "Wedding"]
  ];

  return (
    <section className="w-full px-6 md:px-24 py-16 bg-[#faf7f2]">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* LEFT — Schedule Timeline */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="font-title text-5xl text-[#a12727] mb-12 text-center md:text-left"
          >
            Wedding Day Rituals
          </motion.h2>

          {/* Vertical Timeline */}
          <div className="relative border-l-4 border-[#d5b48c] pl-8 space-y-12">

            {schedule.map(([time, label], idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative"
              >
                {/* Animated Dot */}
                <motion.span
                  animate={{
                    scale: [1, 1.15, 1],
                    boxShadow: [
                      "0 0 0px #a12727",
                      "0 0 12px #a12727",
                      "0 0 0px #a12727"
                    ]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.5,
                    ease: "easeInOut"
                  }}
                  className="absolute -left-[1.05rem] top-1 w-5 h-5 bg-[#a12727] border-4 border-[#faf7f2] rounded-full"
                ></motion.span>

                {/* Text */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <p className="text-xl font-semibold text-[#a12727] ml-3">{time}</p>
                  <p className="text-gray-700 text-md font-font">{label}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — Collage */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut"
            }}
          >
            <Collage />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
