type Props = {
  value: string;
  className?: string;
  disabled?: boolean;
};

const Button: React.FC<Props> = ({ value, className, disabled }) => {
  return (
    <button
      className={`rounded-md bg-purple p-1 text-white shadow-md outline-none hover:bg-purple/90 ${className}`}
      disabled={disabled}
    >
      {value}
    </button>
  );
};

export default Button;
