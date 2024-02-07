import { cn } from "../../lib/utils";

const Item = ({ children, className }: Component.HasChildrenAndClassName) => {
  return (
    <div className={cn("relative bg-background", className)}>{children}</div>
  );
};

export { Item };
