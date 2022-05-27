import { motion } from "framer-motion";

// Functions
import { getProxiedImageUrl } from "../../functions/getProxiedImageUrl";

export const PreviewCard: React.FC<{
  image: string;
}> = ({ image }) => (
  <motion.div
    className="w-full h-56 bg-center bg-cover rounded-lg bg-white/10"
    style={{ backgroundImage: `url('${getProxiedImageUrl(image)}')` }}
    whileHover={{
      scale: 1.025,
    }}
  />
);
export default PreviewCard;
