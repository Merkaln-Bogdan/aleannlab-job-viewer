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
      className={className}
      type={type}
      value={value}
      name={name}
    >
      {children}
    </button>
  );
}
