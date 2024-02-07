"use client";
import { cn } from "@ui/lib/utils";
import { useSidebarStore } from "../stores";

const MobileSidebarWrapper = ({ children }: Component.HasChildren) => {
  const { isOpen, setOpen } = useSidebarStore();
  return (
    <nav
      className={cn(
        "fixed flex lg:hidden mt-14 w-60 h-full border-r z-20 transform top-0 left-0",
        "flex-col gap-3 py-2 items-center",
        "transition-all ease-in-out duration-300 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/95",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      {children}
    </nav>
  );
};

export { MobileSidebarWrapper };
