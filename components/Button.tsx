export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const defaultProps: Partial<ButtonProps> = {
  className: undefined,
};

export function Button(props: ButtonProps): React.ReactElement {
  const { children, className, disabled, type, value, name } = {
    ...defaultProps,
    ...props,
  };

  return (
    <button
      disabled={disabled}
      className={className || "py-4 px-7 bg-dark text-white text-xs rounded-lg"}
      type={type}
      value={value}
      name={name}
    >
      {children}
    </button>
  );
}
