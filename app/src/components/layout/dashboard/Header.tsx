"use client";
import { Logo } from "@/components/layout/Logo";
import { Header } from "../Header";
import { useSession } from "next-auth/react";
import { ProfilePicture } from "./components";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { DashboardDropdown } from "./components/Dropdown";
import { ThemeSwitchButton } from "@/components/providers/theme";
import { Button } from "@/components/ui/button";

interface HeaderProps {}

const DashboardHeader = () => {
  const { data: session } = useSession();

  return (
    <Header>
      <div className="h-14 flex items-center justify-between px-10">
        <div>
          <Logo />
        </div>

        <div className="flex items-center justify-center gap-4">
          <ThemeSwitchButton />
          <div className="h-10 w-10">
            <DashboardDropdown />
          </div>
        </div>
      </div>
    </Header>
  );
};

export { DashboardHeader };
