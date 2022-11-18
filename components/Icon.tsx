import { IconBaseProps } from "react-icons";
import * as BS from "react-icons/bs";

export type IconName = keyof typeof BS;

export type IconProps = {
  name: IconName;
  label?: string;
} & IconBaseProps;

export function Icon(props: IconProps): React.ReactElement {
  const { name, className, label, ...rest } = { ...props };

  const Tag = BS[name];

  return label ? (
    <span className={`flex items-center  ${className}`}>
      <Tag {...rest} className="mr-2.5" />
      {label}
    </span>
  ) : (
    <Tag {...rest} />
  );
}
