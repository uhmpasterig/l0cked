import { cn } from "@/lib/utils/classname.utils";

interface GridContainerProps extends React.HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode;
  className?: string;
}

const GridContainer = ({ children, className, ...props }: GridContainerProps) => {
  return (
    <ul className={cn(`grid`, className)} {...props}>
      {children}
    </ul>
  );
};

export { GridContainer };
