import { motion } from "framer-motion";

const travelStayConfig = {
  id: "travel-stay-1",
  sectionBg: "#faf4e8",
  primaryColor: "#a12727",
  iconBg: "#f2d7b6",
  title: "Travel & Stay",
  subtitle:
    "We want your journey to our celebration to be as beautiful and comfortable as possible.",
  cards: [
    {
      id: "getting-here",
      icon: "✈️",
      title: "Getting Here",
      text: "The nearest airport is <b>City International Airport</b>, 35 minutes from the venue.",
    },
    {
      id: "stay",
      icon: "🏨",
      title: "Stay & Accommodation",
      text: "Comfortable rooms at <b>Rosewood Heritage Resort</b>, with shuttle service.",
    },
    {
      id: "venue",
      icon: "📍",
      title: "Wedding Venue",
      text: "The celebration will take place at <b>Raunak Banquet</b>.",
    },
  ],
};

export default function TravelStay() {
  const { sectionBg, primaryColor, title, subtitle, cards, iconBg } =
    travelStayConfig;

  return (
    <div
      className="py-20 px-6 md:px-20"
      style={{ backgroundColor: sectionBg }}
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="font-title text-5xl text-center mb-6"
        style={{ color: primaryColor }}
      >
        {title}
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="text-center text-gray-700 max-w-2xl mx-auto mb-14 font-font text-lg"
      >
        {subtitle}
      </motion.p>

      {/* Boxes Grid */}
      <div className="grid md:grid-cols-3 gap-10 font-font">
        {cards.map((card) => (
          <AnimatedBox
            key={card.id}
            icon={card.icon}
            title={card.title}
            primaryColor={primaryColor}
            iconBg={iconBg}
          >
            <span
              dangerouslySetInnerHTML={{ __html: card.text }}
            />
          </AnimatedBox>
        ))}
      </div>

      {/* Bottom Divider */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "10rem" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="mx-auto mt-16 border-t-4"
        style={{ borderColor: primaryColor }}
      />
    </div>
  );
}

/* --------------------- Animated Box Component ----------------------- */

function AnimatedBox({ icon, title, children, primaryColor, iconBg }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{
        y: -8,
        boxShadow: "0px 12px 22px rgba(0,0,0,0.15)",
      }}
      className="bg-white p-8 shadow-lg border-t-8 rounded-lg relative"
      style={{ borderColor: primaryColor }}
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
        className="w-16 h-16 border-2 rounded-full flex items-center justify-center mb-6 mx-auto text-3xl"
        style={{ backgroundColor: iconBg, borderColor: primaryColor }}
      >
        {icon}
      </motion.div>

      <h3
        className="text-2xl font-['Great Vibes'] text-center mb-4"
        style={{ color: primaryColor }}
      >
        {title}
      </h3>

      <p className="text-gray-700 text-center leading-7 font-['Patrick Hand']">
        {children}
      </p>
    </motion.div>
  );
}
