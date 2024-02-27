import { SidebarItem } from "./Sidebar.Item";
import { Navigation } from "locked";
import { Separator } from "@ui/components/ui/separator";

type NavigationSectionProps = {
  section: Navigation.NavigationSection;
};

const SidebarSection = ({ section }: NavigationSectionProps) => {
  return (
    <div className="mb-2 max-w-52 w-full overflow-hidden">
      <div className="flex items-center justify-center gap-4 mb-1">
        <Separator className="w-full" />
        <h2 className="text-sm text-gray-500">{section.label}</h2>
        <Separator className="w-full" />
      </div>
      {section.items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
};

export { SidebarSection };
