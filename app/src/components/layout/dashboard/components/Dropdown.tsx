"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@radix-ui/react-separator";
import { User } from "next-auth";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CreditCard,
  Github,
  LifeBuoy,
  LogOut,
  LucideIcon,
  Settings,
  User as UserIcon,
} from "lucide-react";
import { useSession } from "next-auth/react";

interface DashboardDropdownProps {
  user: User | undefined;
}

interface DropdownItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

type DropdownSection = DropdownItem[];

const dropdownList: DropdownSection[] = [
  [
    {
      label: "Profile",
      href: "/profile",
      icon: UserIcon,
    },
    {
      label: "Billing",
      href: "/billing",
      icon: CreditCard,
    },
    {
      label: "Settings",
      href: "/settings",
      icon: Settings,
    },
  ],
  [
    {
      label: "GitHub",
      href: "/github",
      icon: Github,
    },
    {
      label: "Support",
      href: "https://discord.gg/NWJvVUQy",
      icon: LifeBuoy,
    },
  ],
  [
    {
      label: "Log out",
      href: "/iconut",
      icon: LogOut,
    },
  ],
];

const UserAvatar = ({ url }: { url: string }) => {
  return (
    <Avatar>
      <AvatarImage src={url} alt=":(" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

const DropdownItem = ({ item }: { item: DropdownItem }) => {
  const Icon = item.icon;
  return (
    <DropdownMenuItem>
      <Icon className="mr-2 h-4 w-4" />
      <span>{item.label}</span>
    </DropdownMenuItem>
  );
};

const DropdownSection = ({ section }: { section: DropdownSection }) => {
  return (
    <DropdownMenuGroup>
      {section.map((item, index) => {
        return <DropdownItem item={item} key={index} />;
      })}
    </DropdownMenuGroup>
  );
};

const DashboardDropdown = () => {
  const { data: session } = useSession();
  if (!session) return;
  const { user } = session;
  if (!user) return;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="h-full w-full rounded-full" variant="ghost">
          <UserAvatar url={user.image || ""} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72 py-2 px-4 mr-2">
        <div className="flex items-center space-x-4 mt-2 mb-4">
          <UserAvatar url={user.image || ""} />
          <div>
            <h3 className="text-sm font-semibold">{user.name}</h3>
            <p className="text-xs text-foreground/50">{user.email}</p>
          </div>
        </div>

        {dropdownList.map((section, index) => {
          return (
            <>
              <DropdownMenuSeparator />
              <DropdownSection section={section} key={index} />
            </>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { DashboardDropdown };
