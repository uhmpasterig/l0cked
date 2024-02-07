import { cn } from "../../lib/utils";

const variants = {
  "rows-auto": "auto-rows-max grid-flow-row",
};

type Variant = {
  variant?: keyof typeof variants;
  rows?: number;
};

const Box = ({
  children,
  className,
  variant,
}: Component.HasChildrenAndClassName & Variant) => {
  let variantClassName = "";
  if (variant) variantClassName = variants[variant];

  return (
    <ul
      className={cn(
        "grid w-full bg-border gap-px border border-border",
        variantClassName,
        className
      )}
    >
      {children}
    </ul>
  );
};

export { Box };
