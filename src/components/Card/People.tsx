import Image from "next/image";

export const PeopleCard: React.FC<{
  image: string;
  name?: string;
  role?: string;
}> = ({ image, name, role }) => {
  const PersonImage = (
    <Image
      src={`/people${image}`}
      height="200px"
      width="100"
      objectFit="cover"
      alt="person image"
      className="transition-all transform rounded-xl lg:hover:scale-105 lg:grayscale filter lg:hover:grayscale-0"
    />
  );

  if (name && role)
    return (
      <div className="flex flex-col w-full space-y-2">
        {PersonImage}

        <div className="flex flex-col items-center flex-shrink-0">
          <span className="text-xl opacity-75">{name}</span>
          <span className="opacity-50">{role}</span>
        </div>
      </div>
    );

  return PersonImage;
};
export default PeopleCard;
