import { motion } from "framer-motion";

// Functions
import { getProxiedImageUrl } from "../../functions/getProxiedImageUrl";

export const PlaceCard: React.FC<{
  place: string;
  section: string;
  date: string;
  background: string;
  image: string;
}> = ({ place, section, date, background, image }) => (
  <motion.div
    whileHover={{
      scale: 1.05,
    }}
    className="p-8 space-y-4 cursor-default rounded-xl"
    style={{ backgroundColor: background }}
  >
    <div className="flex flex-col items-center gap-4 lg:flex-row">
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={getProxiedImageUrl(image)}
          loading="lazy"
          width="48px"
          alt="university logo"
          className="w-12"
        />
      </div>

      <div className="flex flex-col ">
        <span className="text-sm uppercase">{place}</span>

        <h3 className="text-3xl font-bold">{date}</h3>
      </div>
    </div>

    <div className="flex items-center justify-center gap-2 leading-tight lg:justify-start">
      <span className="text-sm uppercase">{section}</span>
    </div>
  </motion.div>
);

export default PlaceCard;
