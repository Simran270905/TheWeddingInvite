import { motion } from "framer-motion";
import Collage from "../components/Collage";

const scheduleConfig = {
  id: "wedding-schedule-1",
  sectionBg: "#faf7f2",
  primaryColor: "#a12727",
  lineColor: "#d5b48c",
  title: "Wedding Day Rituals",
  items: [
    { id: 1, date: "11 November 2025", label: "Engagement Ceremony" },
    { id: 2, date: "12 November 2025", label: "Mehendi Ceremony" },
    { id: 3, date: "13 November 2025", label: "Cocktail Party" },
    { id: 4, date: "14 November 2025", label: "Haldi Ceremony" },
    { id: 5, date: "15 November 2025", label: "Wedding" },
  ],
};

export default function Schedule() {
  const { sectionBg, primaryColor, lineColor, title, items } = scheduleConfig;

  return (
    <section
      className="w-full px-6 md:px-24 py-16"
      style={{ backgroundColor: sectionBg }}
    >
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
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="font-title text-5xl mb-12 text-center md:text-left"
            style={{ color: primaryColor }}
          >
            {title}
          </motion.h2>

          {/* Vertical Timeline */}
          <div
            className="relative border-l-4 pl-8 space-y-12"
            style={{ borderColor: lineColor }}
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.id}
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
                      `0 0 0px ${primaryColor}`,
                      `0 0 12px ${primaryColor}`,
                      `0 0 0px ${primaryColor}`,
                    ],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.5,
                    ease: "easeInOut",
                  }}
                  className="absolute -left-[1.05rem] top-1 w-5 h-5 rounded-full border-4"
                  style={{
                    backgroundColor: primaryColor,
                    borderColor: sectionBg,
                  }}
                />

                {/* Text */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <p
                    className="text-xl font-semibold ml-3"
                    style={{ color: primaryColor }}
                  >
                    {item.date}
                  </p>
                  <p className="text-gray-700 text-md font-font">
                    {item.label}
                  </p>
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
              ease: "easeInOut",
            }}
          >
            <Collage />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
