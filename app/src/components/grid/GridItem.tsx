import { cn } from "@/lib/utils/classname.utils";

interface GridItemProps {
  children: React.ReactNode;
  className?: string;
}

const GridItem = ({ children, className }: GridItemProps) => {
  return (
    <li className={cn("rounded-xl border bg-card/70 text-card-foreground shadow backdrop-blur-md", className)}>{children}</li>
  );
};

export { GridItem };
