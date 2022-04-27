import Image from "next/image";

export const PeopleCard: React.FC<{
  image: string;
}> = ({ image }) => (
  <Image
    src={`/people${image}`}
    height="200px"
    width="100"
    objectFit="cover"
    alt="person image"
    className="transition-all transform rounded-xl lg:hover:scale-105 lg:grayscale filter lg:hover:grayscale-0"
  />
);
export default PeopleCard;
