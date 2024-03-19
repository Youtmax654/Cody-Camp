type Props = {
  placeholder?: string;
  className?: string;
  type?: string;
  name?: string;
  disabled?: boolean;
};

const Input: React.FC<Props> = ({
  placeholder,
  className,
  type,
  name,
  disabled,
}) => {
  return (
    <input
      type={type || "text"}
      name={name || ""}
      placeholder={placeholder}
      disabled={disabled}
      className={`rounded-md border 
                  border-solid 
                  border-gray-300 
                  p-2 shadow-md outline-1 
                  focus:outline-gray-400 
                  disabled:cursor-not-allowed
                  disabled:bg-gray-200
                  ${className}`}
    />
  );
};

export default Input;
