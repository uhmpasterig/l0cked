import { LucideIcon } from "@locked/icons/lucide";

export namespace Navigation {
  export type NavigationItem = {
    label: string;
    href: string;
    icon?: LucideIcon;
  };

  export type NavigationSection = {
    label: string;
    items: NavigationItem[];
  };

  export type NavigationList = NavigationSection[];
}