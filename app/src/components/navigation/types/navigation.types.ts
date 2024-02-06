import { LucideIcon } from "lucide-react";

type NavigationItem = {
  label: string;
  href: string;
  icon?: LucideIcon;
};

type NavigationSection = {
  label: string;
  items: NavigationItem[];
};

type NavigationList = NavigationSection[];

type NavigationProps = {
  navigationList: NavigationList;
};

type NavigationSectionProps = {
  section: NavigationSection;
};

type NavigationItemProps = {
  item: NavigationItem;
};


export type {
  NavigationItem,
  NavigationList,
  NavigationProps,
  NavigationItemProps,
  NavigationSectionProps,
};
