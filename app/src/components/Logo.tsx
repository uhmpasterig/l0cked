import Link from "next/link";
import { cn } from "@/lib/utils/classname.utils";
import Image from "next/image";

interface LogoProps {
  noLink?: boolean;
}

const _LogoWithText = () => {
  return (
    <>
      <Image
        src="/images/lock.png"
        alt="Logo"
        width={300}
        height={300}
        className="cursor-pointer h-10 w-10 inline-block"
      />
      <span className="font-black bg-gradient-to-b bg-clip-text from-foreground to-muted-foreground text-transparent hidden md:inline-block">
        Locked
      </span>
    </>
  );
};

const Logo = ({ className, noLink }: LogoProps & Component.HasClassName) => {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      {!noLink ? (
        <Link href="/" className={cn("flex justify-center items-center cursor-pointer")}>
          <_LogoWithText />
        </Link>
      ) : (
        <div className={cn("flex justify-center items-center cursor-pointer")}>
          <_LogoWithText />
        </div>
      )}
    </div>
  );
};

export { Logo };
