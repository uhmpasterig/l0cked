"use client";
import { MenuIcon, XIcon } from "lucide-react";
import { BrandLogo } from "@ui/components/assets";
import { useSidebarStore } from "../stores";
const HeaderIcon = () => {
  const { isOpen, setOpen } = useSidebarStore();

  return (
    <>
      <BrandLogo className="hidden lg:flex" />
      {isOpen ? (
        <XIcon className="flex lg:hidden" onClick={() => setOpen(isOpen)} />
      ) : (
        <MenuIcon className="flex lg:hidden" onClick={() => setOpen(isOpen)} />
      )}
    </>
  );
};

export { HeaderIcon };
