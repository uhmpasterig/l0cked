import React from "react";
import Link from "next/link";
import { GridContainer, GridItem } from "@/components/grid";
import { PageWrapper } from "@/containers/page/Wrapper";
import { NavbarItemInfo } from "@/components/layout/page/navbar";
import { cn } from "@/lib/utils/classname.utils";
import { Button } from "@/components/ui/button";
import { ThemeSwitcherWrapper } from "@/components/providers/theme";
import { SunIcon } from "@radix-ui/react-icons";
import { MoonIcon } from "lucide-react";
import { LoginButton } from "@/components/Login";

const HeaderButtons = () => {
  return (
    <div className="flex flex-row justify-evenly items-center gap-5">
      <LoginButton className="w-24" size="sm" variant="outline" />

      <ThemeSwitcherWrapper>
        <Button variant="ghost" size="icon">
          <SunIcon className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </ThemeSwitcherWrapper>
    </div>
  );
};

export default function Shop({ params }: { params: { id: number } }) {
  const navbarItems: NavbarItemInfo[] = [];
  return (
    <PageWrapper navbarItems={navbarItems} theme="blue" customHeaderButtons={HeaderButtons()}>
      <div className="relative w-full py-10 md:py-16 lg:py-24 flex flex-col items-center gap-4 mt-12">
        <h1
          className={cn(
            "text-center text-3xl font-extrabold leading-tight tracking-tighter md:text-7xl lg:leading-[1.1] block"
          )}
        >
          L0cked
        </h1>
        <h2 className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
          The most secure authentication and authorization platform for developers.
        </h2>

        <div className="flex flex-row gap-5 w-full justify-center mt-5">
          <Button variant="outline" className="w-28" asChild>
            <Link href="/docs">Docs</Link>
          </Button>
          <Button variant="default" className="w-28">
            Get Started
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
}
