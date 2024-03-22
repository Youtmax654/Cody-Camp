type Props = {
  placeholder?: string;
  className?: string;
  type?: string;
  name?: string;
  disabled?: boolean;
  label?: string;
};

const Input: React.FC<Props> = ({
  placeholder,
  className,
  type,
  name,
  disabled,
  label,
}) => {
  return (
    <label className="flex flex-col" htmlFor={label}>
      <p className="font-bold">{label}</p>
      <input
        type={type || "text"}
        name={name || ""}
        id={label}
        placeholder={placeholder}
        disabled={disabled}
        className={`bg-white-100 rounded-md 
                  border border-solid
                  border-gray-300 
                  p-2 shadow-md outline-1 
                  focus:outline-gray-400 
                  disabled:cursor-not-allowed
                  disabled:bg-gray-200
                  ${className}`}
      />
    </label>
  );
};

export default Input;
