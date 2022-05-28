import { motion } from "framer-motion";

// Types
import type { IPlaces } from "../../data/places";

// Functions
import { getProxiedImageUrl } from "../../functions/getProxiedImageUrl";

export const PlaceCard: React.FC<IPlaces> = ({
  place,
  section,
  date,
  background,
  image,
  expired = false,
}) => (
  <motion.div
    whileHover={{
      scale: 1.05,
    }}
    className="relative p-8 space-y-4 cursor-default rounded-xl"
    style={{ backgroundColor: background }}
  >
    {expired && (
      <div className="absolute inset-0 flex items-center justify-center text-sm font-bold uppercase select-none bg-black/80">
        <span className="p-2 bg-yellow-500 drop-shadow-md">Gerçekleşti</span>
      </div>
    )}

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

    {section && (
      <div className="flex items-center justify-center gap-2 leading-tight lg:justify-start">
        <span className="text-sm uppercase">{section}</span>
      </div>
    )}
  </motion.div>
);

export default PlaceCard;
