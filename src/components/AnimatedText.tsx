import { motion, Variants } from "framer-motion";

type StaggeredConfig = {
  [k in "container" | "item"]?: Variants;
};

export const AnimatedTitle: React.FC = () => {
  const staggered: StaggeredConfig = {
    container: {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          delay: 0.25,
          staggerChildren: 0.05,
        },
      },
    },
    item: {
      hidden: { opacity: 0, translateY: 100 },
      show: { opacity: 1, translateY: 0 },
    },
  };

  return (
    <motion.div
      variants={staggered.container}
      initial="hidden"
      animate="show"
      className="text-4xl font-black text-center text-yellow-500 lg:text-6xl"
    >
      {"Aklı Başında Deliler Kumpanyası".split("").map((item, index) => (
        <motion.span variants={staggered.item} key={`homepage-title-${index}`}>
          {item}
        </motion.span>
      ))}
    </motion.div>
  );
};

export const AnimatedTexts: React.FC = () => {
  const staggered: StaggeredConfig = {
    container: {
      hidden: { scale: 0, opacity: 0 },
      show: {
        scale: 1,
        opacity: 1,
        transition: {
          delay: 2,
          staggerChildren: 0.5,
        },
      },
    },
  };

  return (
    <motion.div
      variants={staggered.container}
      initial="hidden"
      animate="show"
      className="flex items-center justify-between space-x-16 text-3xl font-bold text-yellow-500"
    >
      <span>2 Perde</span>
      <span>Komedi Oyunu</span>
    </motion.div>
  );
};
