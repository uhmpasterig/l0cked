import type { NavbarItemInfo } from "@/components/layout/page/navbar";

type Theme = "blue" | "red";

interface ShopConfig {
  id: number;
  currency: string;
  theme: Theme;

  shopName: string;
  shopDescription: string;
  navbarItems: NavbarItemInfo[];
}

export type {
  Theme,
  ShopConfig,
}