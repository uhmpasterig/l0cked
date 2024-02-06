"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getBasePath } from "../routing.utils";
import { cn } from "@/lib/utils/classname.utils";
import { Separator } from "@/components/ui/separator";

interface MobileNavbarItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  link?: boolean;
  children: React.ReactNode;
}

const MobileNavbarItem = ({ href, link, children, ...props }: MobileNavbarItemProps) => {
  let url = usePathname();
  if (!url) return null;

  if (!link) {
    url = getBasePath(url) + href;
  } else {
    url = href;
  }
  return (
    <>
      <Link href={href} {...props} className={cn("transition-colors hover:text-foreground")}>
        <h1>{children}</h1>
      </Link>
      <Separator className="w-full" />
    </>
  );
};

export { MobileNavbarItem };
