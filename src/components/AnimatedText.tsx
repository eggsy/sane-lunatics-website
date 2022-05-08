import { motion } from "framer-motion";

// Variants
const staggeredContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const staggeredItem = {
  hidden: { opacity: 0, translateY: 100 },
  show: { opacity: 1, translateY: 0 },
};

export const AnimatedTitle: React.FC = () => (
  <motion.div
    variants={staggeredContainer}
    initial="hidden"
    animate="show"
    className="text-4xl font-black text-center text-yellow-500 lg:text-6xl"
  >
    {"Aklı Başında Deliler Kumpanyası".split("").map((item, index) => (
      <motion.span variants={staggeredItem} key={`homepage-title-${index}`}>
        {item}
      </motion.span>
    ))}
  </motion.div>
);

export const AnimatedTexts: React.FC = () => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{
      scale: 1,
      opacity: 1,
      transition: {
        delay: 2,
      },
    }}
    className="flex items-center justify-between space-x-16 text-3xl font-bold text-yellow-500"
  >
    <span className="border-b border-white/25">2 Perde</span>
    <span className="border-b border-white/25">Komedi Oyunu</span>
  </motion.div>
);
