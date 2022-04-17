export const PictureCard: React.FC<{
  image: string;
}> = ({ image }) => (
  <div
    className="w-full transition-all bg-center bg-cover rounded-lg lg:grayscale lg:hover:grayscale-0 h-44 lg:hover:scale-105"
    style={{ backgroundImage: `url('/previews/${image}')` }}
  />
);
export default PictureCard;
