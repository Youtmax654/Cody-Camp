type Props = {
  value: string;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

const Button: React.FC<Props> = ({
  value,
  className,
  disabled,
  type,
  onClick,
}) => {
  return (
    <button
      className={`bg-salmon hover:bg-indianred rounded-md p-1 text-white shadow-md outline-none transition-colors duration-150 before:bg-black ${className}`}
      disabled={disabled}
      type={type || "button"}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;
