import { cn } from "@ui/lib/utils";
import { Header as HeaderTypes, Navigation } from "locked";
import { Sidebar } from "../sidebar";
import { MenuIcon } from "lucide-react";
import { HeaderIcon } from "./Header.Icon";

type HeaderProps = {
  variant: HeaderTypes.HeaderVariant;
  navigationList: Navigation.NavigationList;
};

type SubHeaderProps = Omit<HeaderProps, "variant">;

const sharedStyles = {
  container: cn("flex items-center justify-between h-14"),
};

export const Header = ({ variant, navigationList }: HeaderProps) => {
  const HeaderChild =
    variant === "dashboard-header" ? DashboardHeader : PageHeader;

  return <HeaderChild navigationList={navigationList} />;
};

const HeaderWrapper = ({ children }: Component.HasChildren) => {
  return (
    <header className="fixed top-0 w-full border-b-[1px] z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {children}
    </header>
  );
};

const PageHeader = ({ navigationList }: SubHeaderProps) => {
  return (
    <>
      <HeaderWrapper>
        <div
          className={cn(sharedStyles.container, "container max-w-screen-2xl")}
        >
          {/* <Logo /> */}
        </div>
      </HeaderWrapper>
    </>
  );
};

const DashboardHeader = ({ navigationList }: SubHeaderProps) => {
  return (
    <>
      <HeaderWrapper>
        <div className={cn(sharedStyles.container, "px-6 md:px-10")}>
          <HeaderIcon />
        </div>
      </HeaderWrapper>
      <Sidebar navigationList={navigationList} />
    </>
  );
};
