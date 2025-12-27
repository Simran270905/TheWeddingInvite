import { motion } from "framer-motion";

const closingInviteConfig = {
  id: "closing-invite-1",
  sectionBg: "#fff9f0",
  primaryColor: "#a12727",
  title: "Hope to see you soon!",
  subtitle: "Your presence will make our celebration truly special.",
  lineWidth: "8rem",
};

export default function ClosingInvite() {
  const { sectionBg, primaryColor, title, subtitle, lineWidth } =
    closingInviteConfig;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
      className="py-16 text-center"
      style={{ backgroundColor: sectionBg }}
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="font-foot text-5xl mb-4"
        style={{ color: primaryColor }}
      >
        {title}
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="text-gray-700 text-lg font-title"
      >
        {subtitle}
      </motion.p>

      {/* Divider / Line Animation */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: lineWidth }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        className="mx-auto mt-10 border-t-4"
        style={{ borderColor: primaryColor }}
      />
    </motion.div>
  );
}
