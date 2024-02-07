import { cn } from "@ui/lib/utils";
import { Navigation } from "locked";
import { MobileSidebarWrapper } from "./Mobile.SidebarWrapper";
import { SidebarSection } from "./Sidebar.Section";

type NavigationProps = {
  navigationList: Navigation.NavigationList;
};

const Sidebar = ({ navigationList }: NavigationProps) => {
  return (
    <>
      <DesktopSidebar navigationList={navigationList} />

      {/* I need to do it this way because i cant pass the navigation list directly into the client component. */}
      <MobileSidebarWrapper>
        <MobileSidebar navigationList={navigationList} />
      </MobileSidebarWrapper>
    </>
  );
};

const MobileSidebar = ({ navigationList }: NavigationProps) => {
  return (
    <>
      {navigationList.map((item, index) => (
        <SidebarSection key={index} section={item} />
      ))}
    </>
  );
};

const DesktopSidebar = ({ navigationList }: NavigationProps) => {
  return (
    <nav
      className={cn(
        "fixed hidden lg:flex w-60 border-r h-screen flex-col gap-3 pb-5 pt-16 items-center"
      )}
    >
      {navigationList.map((item, index) => (
        <SidebarSection key={index} section={item} />
      ))}
    </nav>
  );
};

export { Sidebar };
