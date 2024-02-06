import { NavigationList } from ".";

export const HEADER_HEIGHT = "14";

type PageHeader = "page-header";
type DashboardHeader = "dashboard-header";
type HeaderVariant = PageHeader | DashboardHeader;

type HeaderProps = {
  variant: HeaderVariant;
  navigationList: NavigationList;
};

export type { HeaderVariant, HeaderProps };
