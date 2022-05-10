import { getProxiedImageUrl } from "../../functions/getProxiedImageUrl";

export const PreviewCard: React.FC<{
  image: string;
}> = ({ image }) => (
  <div
    className="w-full h-56 transition-all bg-center bg-cover rounded-lg lg:hover:scale-105"
    style={{ backgroundImage: `url('${getProxiedImageUrl(image)}')` }}
  />
);
export default PreviewCard;
