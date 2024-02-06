import { DesktopNavbarItem } from ".";
import type { NavbarItemInfo } from "../";

interface DesktopNavbarProps {
  children?: React.ReactNode;
  tabs: NavbarItemInfo[];
}

const DesktopNavbar = ({ children, tabs }: DesktopNavbarProps) => {
  return (
    <nav className="flex items-center gap-6 text-sm">
      {tabs.map((item, index) => {
        return (
          <DesktopNavbarItem link={item.link} href={item.href} key={index}>
            {item.title}
          </DesktopNavbarItem>
        );
      })}
    </nav>
  );
};

export { DesktopNavbar };
