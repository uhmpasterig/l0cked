"use client";
import { useSidebarStore } from "../navigation/stores";
import { cn } from "../../lib/utils";
import { useEffect } from "react";

const DashboardContentWrapper = ({ children }: Component.HasChildren) => {
  const { isOpen, setOpen } = useSidebarStore();
  /* useEffect(() => {
    const content = document.getElementById("content");
    content?.addEventListener("click", () => {
      console.log("click");
      setOpen(isOpen);
    });
  }, []); */

  return (
    <main
      id="content"
      onClick={() => setOpen(isOpen)}
      className={cn(
        "max-w-screen min-h-screen break-words overflow-hidden lg:pl-60 pt-14",
        isOpen ? "touch-none lg:touch-auto" : "touch-auto"
      )}
    >
      {children}
    </main>
  );
};

export { DashboardContentWrapper };
