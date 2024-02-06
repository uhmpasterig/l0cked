"use client";
import { cn } from "@/lib";
import { NavigationProps } from "..";
import { useSidebarStore } from "../stores";

const MobileSidebarWrapper = ({ children }: Component.HasChildren) => {
  const { isOpen, setOpen } = useSidebarStore();
  console.log(isOpen);
  return (
    <nav
      className={cn(
        "absolute flex lg:hidden mt-14 w-60 h-full border-r z-20 transform top-0 left-0",
        "flex-col gap-3 py-5 items-center",
        "transition-all ease-in-out duration-300 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      {children}
    </nav>
  );
};

export { MobileSidebarWrapper };
