import { cn } from "@ui/lib/utils";

interface LogoProps {
  noLink?: boolean;
}

const _LogoWithText = () => {
  return (
    <>
      <img
        src="s"
        alt="Logo"
        className="cursor-pointer h-10 w-10 inline-block"
      />
      <span className="font-black bg-gradient-to-b bg-clip-text from-foreground to-muted-foreground text-transparent hidden md:inline-block">
        Locked
      </span>
    </>
  );
};

const BrandLogo = ({
  className,
  noLink,
}: LogoProps & Component.HasClassName) => {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      {!noLink ? (
        <a
          href="/"
          className={cn("flex justify-center items-center cursor-pointer")}
        >
          <_LogoWithText />
        </a>
      ) : (
        <div className={cn("flex justify-center items-center cursor-pointer")}>
          <_LogoWithText />
        </div>
      )}
    </div>
  );
};

export { BrandLogo };
