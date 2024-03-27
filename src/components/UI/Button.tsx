import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

const Button: React.FC<Props> = ({
  children,
  className,
  disabled,
  type,
  onClick,
}) => {
  return (
    <button
      className={`flex flex-row items-center
                justify-center gap-1
                rounded-md bg-indianred p-1 
                text-white shadow-md outline-none 
                transition-colors duration-150 
                before:bg-black hover:bg-indianred 
                ${className}`}
      disabled={disabled}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
