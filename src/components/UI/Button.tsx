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
      className={`rounded-md bg-indianred p-1 
                text-white shadow-md outline-none 
                transition-colors duration-150 
                before:bg-black hover:bg-indianred 
                ${className}`}
      disabled={disabled}
      type={type || "button"}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;
