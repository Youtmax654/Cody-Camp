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
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
};

export default Spinner;
