import { Theme } from "@/app/shop/[id]/actions/shop-config.types";
import { cn } from "@/lib/utils/classname.utils";

interface BackgroundGridProps {
  className?: string;

  columns: number;
  rows: number;

  theme?: Theme;
  activeElements: GridElement[];
}

interface GridElement {
  x: number;
  y: number;
}

enum BackgroundColors {
  foreground = "bg-foreground/5",
  blue = "bg-blue-500/50",
  red = "bg-red-500/50",
  teal = "bg-teal-300/50",
}

enum BorderColors {
  foreground = "border-foreground/5",
  blue = "border-blue-500/40",
  red = "border-red-500/40",
  teal = "border-teal-300/40",
}

const BackgroundGrid = ({
  columns,
  rows,
  activeElements,
  className,
  theme = "blue",
}: BackgroundGridProps) => {
  const gridColor = BackgroundColors[theme];
  const borderColor = BorderColors[theme];

  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}
      className={cn(
        "grid -skew-y-12 -skew-x-12 opacity-40 [mask-image:radial-gradient(circle,white,transparent)]",
        className
      )}
    >
      {Array.from({ length: columns * rows }).map((_, i) => {
        const x = i % columns;
        const y = Math.floor(i / columns);

        const isActive = activeElements.some((el) => el.x === x && el.y === y);

        return (
          <div
            key={i}
            className={cn(
              "w-full h-full border-[1px]",
              "transition-all duration-300 ease-in-out",
              "md:opacity-50",
              borderColor,
              isActive ? `${gridColor}` : "bg-transparent"
            )}
          />
        );
      })}
    </div>
  );
};

export { BackgroundGrid };
