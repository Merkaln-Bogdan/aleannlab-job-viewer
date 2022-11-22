type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const defaultProps: Partial<ButtonProps> = {
  className: undefined,
};

export function Button(props: ButtonProps): React.ReactElement {
  const { children, className, disabled, type, value, name, onClick } = {
    ...defaultProps,
    ...props,
  };

  return (
    <button
      disabled={disabled}
      className={`flex py-4 px-7 text-xs rounded-lg ${className}`}
      type={type}
      value={value}
      name={name}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
