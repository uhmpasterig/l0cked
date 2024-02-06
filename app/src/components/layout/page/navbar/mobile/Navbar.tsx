"use client";
import { useState } from "react";
import { MobileNavbarItem } from ".";
import type { NavbarItemInfo } from "../";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/classname.utils";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import "./keyframes.css";
import { Cross1Icon, DragHandleHorizontalIcon, HamburgerMenuIcon, StackIcon } from "@radix-ui/react-icons";

interface MobileNavbarProps {
  children?: React.ReactNode;
  tabs: NavbarItemInfo[];
}

const MobileNavbar = ({ children, tabs }: MobileNavbarProps) => {
  const [isOpen, setOpen] = useState(false);
  const [isHidden, setHidden] = useState(true);

  const toggleVisibility = (setTo: boolean) => {
    if (!setTo) {
      setHidden(true);
      setTimeout(() => {
        setOpen(false);
      }, 310);
    } else {
      setHidden(false);
      setOpen(true);
    }
  };

  return (
    <>
      <div className="z-40" onClick={() => toggleVisibility(isHidden)}>
        {isHidden ? (
          <HamburgerMenuIcon className="h-5 w-5 text-primary" />
        ) : (
          <Cross1Icon className="h-5 w-5 text-primary" />
        )}
      </div>

      <motion.nav
        className={cn(
          `navbar-animation absolute z-20 h-screen w-4/5 inset-0 bg-background border-y-[1px] border-r-[1px] border-border/50 px-10 pt-24`,
          "flex-col gap-3 justify-between pb-10",
          isOpen ? "flex" : "hidden",
          isHidden ? "fade-out" : ""
        )}
      >
        <div className="flex flex-col gap-3">
          {tabs.map((value, index) => {
            return (
              <MobileNavbarItem link={value.link} href={value.href} key={index}>
                {value.title}
              </MobileNavbarItem>
            );
          })}
        </div>
        <div className="flex flex-col gap-3">
          <Button variant="outline" onClick={() => toggleVisibility(false)}>
            Log In
          </Button>
          <Button variant="default" onClick={() => toggleVisibility(false)}>
            Sign Up
          </Button>
        </div>
      </motion.nav>
      <div
        className={cn(
          `absolute top-0 right-0 w-1/5 h-screen z-20 bg-transparent`,
          isHidden ? "hidden" : "block"
        )}
        onClick={() => toggleVisibility(false)}
      />
    </>
  );
};

export { MobileNavbar };
