type Props = {
  size?: "sm" | "md" | "lg" | "xl";
};

const Spinner: React.FC<Props> = ({ size }) => {
  return (
    <div
      className={`inline-block 
                animate-spin 
                rounded-full 
                border-4 border-solid 
                border-current 
                border-r-transparent 
                align-[-0.125em] 
                motion-reduce:animate-[spin_1.5s_linear_infinite]
                ${
                  (size === "sm" && "size-4") ||
                  (size === "md" && "size-6") ||
                  (size === "lg" && "size-8") ||
                  (size === "xl" && "size-12") ||
                  "size-6"
                }
                `}
      role="status"
    ></div>
  );
};

export default Spinner;
