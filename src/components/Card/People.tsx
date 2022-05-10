import { motion } from "framer-motion";

// Functions
import getProxiedImageUrl from "../../functions/getProxiedImageUrl";

export const PeopleCard: React.FC<{
  image: string;
  name?: string;
  role?: string;
}> = ({ image, name, role }) => {
  const PersonImage = (
    // eslint-disable-next-line @next/next/no-img-element
    <motion.img
      src={getProxiedImageUrl(image)}
      loading="lazy"
      alt="person image"
      className="object-cover w-full h-56 rounded-xl"
      whileHover={{
        scale: 1.05,
      }}
    />
  );

  if (name && role)
    return (
      <div className="flex flex-col w-full space-y-2">
        {PersonImage}

        <div className="flex flex-col items-center flex-shrink-0 text-center">
          <span className="text-2xl font-semibold">{name}</span>
          <span className="text-xl text-yellow-500">{role}</span>
        </div>
      </div>
    );

  return PersonImage;
};
export default PeopleCard;
