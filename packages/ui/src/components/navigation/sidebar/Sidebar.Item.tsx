import { Navigation } from "locked";
import { Button } from "@ui/components/ui/button";

type NavigationItemProps = {
  item: Navigation.NavigationItem;
};

const SidebarItem = ({ item }: NavigationItemProps) => {
  const { label, href, icon } = item;
  const Icon = icon;

  return (
    <Button variant="ghost" className="w-full flex h-10 mb-1" asChild>
      <a href={href}>
        {Icon && <Icon className="w-6 h-6 mr-6" />}
        <span className="flex-grow">{label}</span>
      </a>
    </Button>
  );
};

export { SidebarItem };
