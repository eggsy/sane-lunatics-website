import type { ReactNode } from "react";

export const Title: React.FC<{ children: ReactNode }> = ({ children }) => (
  <h2 className="text-6xl text-center">{children}</h2>
);

export default Title;
