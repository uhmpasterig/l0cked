import Image from "next/image";

interface HeaderProps {
  children?: React.ReactNode;
}

const Footer = ({ children }: HeaderProps) => {
  return (
    <div className="w-screen absolute bottom-0 h-14 flex justify-center items-center border-t border-foreground/5 gap-1 ">
      Powered by
      <div className="inline justify-center">
        <Image
          src="/images/lock.png"
          alt="Logo"
          width={100}
          height={100}
          className="cursor-pointer h-10 w-10 inline-block"
        />
        <span className="font-bold text-sm mt-4">Locked</span>
      </div>
      {children}
    </div>
  );
};

export { Footer };