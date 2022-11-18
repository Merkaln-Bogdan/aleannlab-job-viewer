import { ReactNode } from "react";
import { Headline } from "./Headline";

type InfoProps = {
  children: ReactNode;
  label?: string;
};

export function Info(props: InfoProps): React.ReactElement {
  const { children, label } = {
    ...props,
  };

  return (
    <div className="flex flex-col text-dark mb-10">
      {label && (
        <Headline className="mb-4 font-bold text-dark">{label}</Headline>
      )}
      {children}
    </div>
  );
}
