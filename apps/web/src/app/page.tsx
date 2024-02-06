import { Header } from "@locked/ui/components/navigation/header/Header";

export default function Page(): JSX.Element {
  const navitems = [
    {
      label: "Home",
      items: [
        { label: "Dashboard", href: "/dashboard" },
        { label: "Projects", href: "/projects" },
        { label: "Calendar", href: "/calendar" },
        { label: "Team", href: "/team" },
      ],
    },
    {
      label: "Settings",
      items: [
        { label: "Profile", href: "/profile" },
        { label: "Settings", href: "/settings" },
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
