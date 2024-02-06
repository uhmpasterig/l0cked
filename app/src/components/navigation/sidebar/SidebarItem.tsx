import Link from "next/link";
import type { NavigationItemProps } from "..";
import { Button } from "@/components/ui/button";

const SidebarItem = ({ item }: NavigationItemProps) => {
  const { label, href, icon } = item;
  const Icon = icon;

  return (
    <Button variant="ghost" className="w-full flex h-10 mb-1" asChild>
      <Link href={href}>
        {Icon && <Icon className="w-6 h-6 mr-6" />}
        <span className="flex-grow">{label}</span>
      </Link>
    </Button>
  );
};

export { SidebarItem };
