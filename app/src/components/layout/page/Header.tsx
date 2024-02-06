import { DesktopNavbar, MobileNavbar, NavbarItemInfo } from "./navbar";

import { Logo } from "@/components/layout/Logo";
import { ThemeSwitchButton } from "@/components/providers/theme";

import { GearIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Header } from "../Header";

interface HeaderProps {
  children?: React.ReactNode;
  navbarItems: NavbarItemInfo[];
  customHeaderButtons?: React.ReactNode;
}

const HeaderButtons = () => {
  return (
    <div className="flex flex-row justify-evenly gap-2">
      <ThemeSwitchButton />
      <Button variant="ghost" size="icon">
        <GearIcon className="h-[1rem] w-[1rem] rotate-0 transition-all" />
      </Button>
    </div>
  );
};

const PageHeader = ({ children, navbarItems, customHeaderButtons }: HeaderProps) => {
  return (
    <Header>
      <div className="container h-14 flex max-w-screen-2xl items-center justify-between">
        <div className="hidden md:flex">
          <Logo className="mr-6" />
          <DesktopNavbar tabs={navbarItems} />
        </div>
        <div className="flex md:hidden">
          <MobileNavbar tabs={navbarItems} />
        </div>

        {customHeaderButtons ? customHeaderButtons : <HeaderButtons />}
      </div>
    </Header>
  );
};

export { PageHeader };
