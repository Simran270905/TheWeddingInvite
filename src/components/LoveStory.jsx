import { motion } from "framer-motion";
import love1 from "../assets/image/love1.jpg";
import love2 from "../assets/image/love2.jpg";

const loveStoryConfig = {
  id: "love-journey-1",
  sectionBg: "#fff4e3",
  primaryColor: "#a12727",
  tagBg: "#f2d7b6",
  imageBg: "#e6d9c8",
  title: "Our Love Journey",
  stories: [
    {
      id: "how-we-met",
      tag: "How We Met",
      text: `We often joke that the universe had to practically shove us together.
      It wasn't a whirlwind romance or a perfectly planned introduction—it
      was better. It began with a classic case of mistaken identity in a
      bustling café, where one of us accidentally snagged the other's
      perfectly-brewed latte...`,
      image: love1,
      imageAlt: "how-we-met",
      reverse: false, // text left, image right
    },
    {
      id: "proposal",
      tag: "The Proposal",
      text: `The meeting was fate, but the proposal was a beautifully orchestrated
      moment of pure surprise. It happened in our favorite rooftop at sunset...`,
      image: love2,
      imageAlt: "proposal",
      reverse: true, // image left, text right
    },
  ],
};

export default function LoveStory() {
  return (
    <div
      className="py-20 px-6 md:px-20"
      style={{ backgroundColor: loveStoryConfig.sectionBg }}
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="font-title text-5xl text-center mb-12"
        style={{ color: loveStoryConfig.primaryColor }}
      >
        {loveStoryConfig.title}
      </motion.h2>

      {loveStoryConfig.stories.map((story, index) => {
        const isReverse = story.reverse;

        return (
          <div
            key={story.id}
            className={`grid md:grid-cols-2 gap-12 ${
              index > 0 ? "mt-16" : ""
            }`}
          >
            {/* Text Box */}
            <motion.div
              initial={{ opacity: 0, x: isReverse ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="bg-white p-8 shadow-lg border-l-8 relative"
              style={{ borderColor: loveStoryConfig.primaryColor }}
            >
              {/* Tag */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="absolute -top-4 left-4 px-3 py-1 font-bold shadow font-font"
                style={{
                  backgroundColor: loveStoryConfig.tagBg,
                  color: loveStoryConfig.primaryColor,
                }}
              >
                {story.tag}
              </motion.div>

              <p className="leading-7 text-gray-800 mt-6 font-font font-regular">
                {story.text}
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: isReverse ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full h-[320px] shadow-md border-l-4 flex items-center justify-center overflow-hidden"
              style={{
                backgroundColor: loveStoryConfig.imageBg,
                borderColor: loveStoryConfig.primaryColor,
              }}
            >
              <motion.img
                src={story.image}
                alt={story.imageAlt}
                className="w-full h-full object-cover"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
