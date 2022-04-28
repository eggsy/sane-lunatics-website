export const PreviewCard: React.FC<{
  image: string;
}> = ({ image }) => (
  <div
    className="w-full h-56 transition-all bg-center bg-cover rounded-lg lg:grayscale lg:hover:grayscale-0 lg:hover:scale-105"
    style={{ backgroundImage: `url('/previews/${image}')` }}
  />
);
export default PreviewCard;
