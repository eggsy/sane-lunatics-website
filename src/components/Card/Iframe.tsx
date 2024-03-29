import { useState } from "react";
import { motion } from "framer-motion";

// Components
import { Play } from "../Icons";

// Functions
import { getProxiedImageUrl } from "../../functions/getProxiedImageUrl";

export const IframeCard: React.FC<{ poster: string; src: string }> = ({
  poster,
  src,
}) => {
  const [clicked, setClicked] = useState(false);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      className="relative w-full bg-center bg-cover rounded-lg bg-white/10 h-80"
      style={{
        backgroundImage: !clicked ? `url('${getProxiedImageUrl(poster)}')` : "",
      }}
    >
      {!clicked && (
        <div
          className="absolute inset-0 flex items-center justify-center transition-colors cursor-pointer bg-black/50 text-white/50 hover:text-white"
          onClick={() => setClicked(true)}
        >
          <Play />
        </div>
      )}

      <motion.iframe
        src={src}
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        className={`w-full rounded-lg bg-white/10 h-80
        ${clicked ? "block" : "hidden"}`}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        whileHover={{
          scale: 1.05,
        }}
      />
    </motion.div>
  );
};

export default IframeCard;
