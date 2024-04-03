import React from "react";
import Spinner from "./Spinner";

type Props = {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  isLoading?: boolean;
};

const Button: React.FC<Props> = ({
  children,
  className,
  disabled,
  type,
  onClick,
  isLoading,
}) => {
  return (
    <button
      className={`flex flex-row items-center
                justify-center gap-1
                rounded-md bg-indianred p-1 px-4
                text-white shadow-md outline-none 
                transition-colors duration-150 
                hover:bg-indianred 
                ${className}`}
      disabled={disabled}
      type={type || "button"}
      onClick={onClick}
    >
      {isLoading && <Spinner size="sm" />}
      {children}
    </button>
  );
};

export default Button;
