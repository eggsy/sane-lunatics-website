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
      className="transition-all transform rounded-xl lg:hover:scale-105"
    />
  );

  if (name && role)
    return (
      <div className="flex flex-col w-full space-y-2">
        {PersonImage}

        <div className="flex flex-col items-center flex-shrink-0 text-center">
          <span className="text-2xl font-semibold opacity-75">{name}</span>
          <span className="text-xl text-white/50">{role}</span>
        </div>
      </div>
    );

  return PersonImage;
};
export default PeopleCard;
