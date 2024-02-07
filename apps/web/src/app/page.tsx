import { DashboardWrapper } from "@locked/ui";
import { Navigation } from "locked";
import {
  CalendarDays,
  HomeIcon,
  ListIcon,
  Users,
  Settings2,
  User,
} from "@locked/icons/lucide";

export default function Page(): JSX.Element {
  const navitems: Navigation.NavigationList = [
    {
      label: "Home",
      items: [
        { label: "Dashboard", href: "/dashboard", icon: HomeIcon },
        { label: "Projects", href: "/projects", icon: ListIcon },
        { label: "Calendar", href: "/calendar", icon: CalendarDays },
        { label: "Team", href: "/team", icon: Users },
      ],
    },
    {
      label: "Settings",
      items: [
        { label: "Profile", href: "/profile", icon: User },
        { label: "Settings", href: "/settings", icon: Settings2 },
      ],
    },
  ];

  return (
    <DashboardWrapper navigationList={navitems}>
      <h1 className="h-screen w-full">Content</h1>
      <h1 className="h-screen">Content</h1>
    </DashboardWrapper>
  );
}
