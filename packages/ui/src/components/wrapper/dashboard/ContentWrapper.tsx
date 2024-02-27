"use client";
import { useSidebarStore } from "../../navigation/stores";
import { cn } from "../../../lib/utils";
import { useEffect } from "react";

const DashboardContentWrapper = ({ children }: Component.HasChildren) => {
  const { isOpen, setOpen } = useSidebarStore();
  return (
    <main
      id="content"
      onClick={() => isOpen && setOpen(isOpen)}
      className={cn(
        "max-w-screen min-h-screen break-words overflow-hidden",
        "px-4 lg:pl-64",
        "pt-[4.5rem]",
        isOpen ? "touch-none lg:touch-auto" : "touch-auto"
      )}
    >
      {children}
    </main>
  );
};

export { DashboardContentWrapper };
