import { cn } from "@/lib";
import { NavigationProps, HEADER_HEIGHT } from "..";
import { MobileSidebarWrapper, SidebarSection } from ".";

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
        "hidden lg:flex w-60 border-r h-screen flex-col gap-3 py-5 items-center",
        `mt-${HEADER_HEIGHT}`
      )}
    >
      {navigationList.map((item, index) => (
        <SidebarSection key={index} section={item} />
      ))}
    </nav>
  );
};

export { Sidebar };
