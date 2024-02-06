"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon, GearIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ThemeSwitcherWrapperProps {
  children: React.ReactNode;
}

const ThemeSwitcherWrapper = ({ children }: ThemeSwitcherWrapperProps) => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const ThemeSwitchButton = () => {
  return (
    <ThemeSwitcherWrapper>
      <Button variant="ghost" size="icon">
        <SunIcon className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </ThemeSwitcherWrapper>
  );
};
export { ThemeSwitcherWrapper, ThemeSwitchButton };
