"use server";
import { ShopConfig } from "./shop-config.types";
import { notFound } from "next/navigation";
const FIVE_MINUTES = 1000 * 60 * 5;

type ShopConfigInCache = { timestamp: number } & ShopConfig;
const configCache: { [id: number]: ShopConfigInCache } = {};

const exampleConfigsToFetch: ShopConfig[] = [
  {
    id: 1,
    currency: "USD",
    theme: "blue",
    shopName: "Web Services",
    shopDescription: "We provide premium services well fitting for your needs!",
    navbarItems: [
      {
        title: "Scripts",
        href: "/scripts",
      },
      {
        title: "Changelog",
        href: "/changelog",
      },
      {
        title: "Discord",
        href: "https://discord.gg/WJquMqRF",
        link: true,
      },
    ],
  },
  {
    id: 2,
    currency: "EUR",
    theme: "red",
    shopName: "DNZ Scripts",
    shopDescription: "The 2nd best shop for fivem scripts in the world",
    navbarItems: [
      {
        title: "Scripts",
        href: "/scripts",
      },
      {
        title: "Changelog",
        href: "/changelog",
      },
      {
        title: "Discord",
        href: "https://discord.gg/WJquMqRF",
        link: true,
      },
    ],
  },
];

const fetchConfig = (id: number) => {
  id = Number(id);
  const config = exampleConfigsToFetch.find((config) => config.id === id);
  if (!config) {
    notFound();
  }
  return config;
};

const fetchAndCacheConfig = (id: number): ShopConfig | undefined => {
  const newConfig = fetchConfig(id);
  if (newConfig) {
    addToCache(id, newConfig);
  }
  return newConfig;
};

const addToCache = (id: number, config: ShopConfig) => {
  configCache[id] = { ...config, timestamp: Date.now() };
};

const removeFromCache = (id: number) => {
  delete configCache[id];
};

export const getShopConfig = (id: number) => {
  id = Number(id);

  const cachedConfig = configCache[id];
  if (cachedConfig && Date.now() - cachedConfig.timestamp < FIVE_MINUTES) {
    return cachedConfig;
  } else {
    removeFromCache(id);
    return fetchAndCacheConfig(id);
  }
};
