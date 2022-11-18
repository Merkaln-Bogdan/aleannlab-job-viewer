import { ElementType, HTMLAttributes, FC } from "react";

interface ComponentProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
}

const Headline: FC<ComponentProps> = ({ as: Tag = "span", ...otherProps }) => {
  return <Tag {...otherProps} />;
};

export { Headline };
