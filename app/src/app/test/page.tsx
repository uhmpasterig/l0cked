import { Header, NavigationList } from "@/components/navigation";
import { CalendarDays, HomeIcon, ListIcon, Users } from "lucide-react";

export default function Test() {
  const navitems: NavigationList = [
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
        { label: "Profile", href: "/profile", icon: HomeIcon },
        { label: "Settings", href: "/settings", icon: ListIcon },
      ],
    },
  ];

  return (
    <div className="flex">
      <Header variant="dashboard-header" navigationList={navitems} />
      <main className="flex-1 mt-14">Content</main>
    </div>
  );
}
