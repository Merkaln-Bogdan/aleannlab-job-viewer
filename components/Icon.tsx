import { IconBaseProps } from "react-icons";
import * as BS from "react-icons/bs";

export type IconName = keyof typeof BS;

export type IconProps = {
  name: IconName;
} & IconBaseProps;

export function Icon(props: IconProps): React.ReactElement {
  const { name, className, ...rest } = { ...props };

  const Tag = BS[name];

  return className ? (
    <span className={className}>
      <Tag {...rest} />
    </span>
  ) : (
    <Tag {...rest} />
  );
}
