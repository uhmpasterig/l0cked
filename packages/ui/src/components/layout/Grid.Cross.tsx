const alignmentVariants = {
  "top-left": "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
  "top-right": "top-0 right-0 translate-x-1/2 -translate-y-1/2",
  "bottom-left": "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
  "bottom-right": "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
};

const Cross = ({
  alignment,
}: {
  alignment: keyof typeof alignmentVariants;
}) => {
  return (
    <div
      className={`absolute z-10 w-4 h-4 transform flex items-center justify-center ${alignmentVariants[alignment]}`}
    >
      <svg
        className="stroke-foreground/80 stroke-2"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <line x1="10" y1="0" x2="10" y2="20"></line>
        <line x1="0" y1="10" x2="20" y2="10"></line>
      </svg>
    </div>
  );
};

export { Cross };
