interface HeaderProps {
  children?: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <header className="fixed top-0 w-full border-b-[1px] border-border/40 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {children}
    </header>
  );
};

export { Header };
