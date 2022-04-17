export const CreditCard: React.FC<{
  name: string;
  role: string;
}> = ({ name, role }) => (
  <div className="flex flex-col items-center justify-center leading-tight text-center">
    <h3 className="text-xl leading-tight text-white/75">{name}</h3>
    <span className="text-sm leading-none text-white/50">{role}</span>
  </div>
);
export default CreditCard;
