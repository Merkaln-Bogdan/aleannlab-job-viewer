import { ReactNode } from "react";
import { Headline } from "./Headline";

type InfoProps = {
  children: ReactNode;
  label?: string;
  className?: string;
};

export function Info(props: InfoProps): React.ReactElement {
  const { children, label, className } = {
    ...props,
  };

  return (
    <div className={`text-dark mb-10 ${className}`}>
      {label && (
        <Headline className="mb-4 font-bold text-dark">{label}</Headline>
      )}
      {children}
    </div>
  );
}
