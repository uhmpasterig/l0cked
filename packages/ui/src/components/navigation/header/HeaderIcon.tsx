"use client";

import { MenuIcon, XIcon } from "lucide-react";
import { Logo } from "../../Logo";
import { useSidebarStore } from "../stores";

const HeaderIcon = () => {
  const { isOpen, setOpen } = useSidebarStore();

  return (
    <>
      <Logo className="hidden lg:flex" />
      {isOpen ? (
        <XIcon className="flex lg:hidden" onClick={() => setOpen(isOpen)} />
      ) : (
        <MenuIcon className="flex lg:hidden" onClick={() => setOpen(isOpen)} />
      )}
    </>
  );
};

export { HeaderIcon };
