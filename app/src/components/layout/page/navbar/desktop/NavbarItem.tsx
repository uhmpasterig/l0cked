"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getBasePath } from "../routing.utils";

interface DesktopNavbarItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  link?: boolean;
  children: React.ReactNode;
}

const DesktopNavbarItem = ({ href, link, children, ...props }: DesktopNavbarItemProps) => {
  let url = usePathname();
  if (!url) return null;

  if (!link) {
    url = getBasePath(url) + href;
  } else {
    url = href;
  }
  return (
    <Link
      href={url}
      {...props}
      className="transition-colors hover:text-foreground/80 text-foreground/60"
    >
      <h1>{children}</h1>
    </Link>
  );
};

export { DesktopNavbarItem };
