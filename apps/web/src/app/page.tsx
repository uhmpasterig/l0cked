import { DashboardWrapper, BarChart, Button } from "@locked/ui";
import { Navigation } from "locked";
import {
  CalendarDays,
  HomeIcon,
  ListIcon,
  Users,
  Settings2,
  User,
  ComputerIcon,
  LayoutIcon,
  WrenchIcon,
  GitBranch,
  LucideIcon,
  TimerIcon,
  LightbulbIcon,
  Package,
  ListX,
  Languages,
} from "@locked/icons/lucide";

import { Grid } from "@locked/ui";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  ScrollArea,
} from "@locked/ui";

export default function Page(): JSX.Element {
  const navitems: Navigation.NavigationList = [
    {
      label: "Home",
      items: [
        { label: "Dashboard", href: "/dashboard", icon: HomeIcon },
        { label: "Projects", href: "/projects", icon: ListIcon },
        { label: "Calendar", href: "/calendar", icon: CalendarDays },
        { label: "Team", href: "/team", icon: Users },
      ],
    },
    {
      label: "Settings",
      items: [
        { label: "Profile", href: "/profile", icon: User },
        { label: "Settings", href: "/settings", icon: Settings2 },
      ],
    },
  ];

  return (
    <DashboardWrapper navigationList={navitems}>
      <Grid.Box
        variant="rows-auto"
        className="grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mb-5"
      >
        <StatsItem title="Users" value={25921} percentage={320} />

        <StatsItem title="Authentications" value={79219} percentage={562} />

        <StatsItem title="Stones" value={442} percentage={136} />

        <StatsItem title="Rocks" value={25921} percentage={320} />

        <StatsItem title="Torches" value={79219} percentage={562} />

        <StatsItem title="Shops" value={442} percentage={136} />

        <Grid.Item className="h-4 col-span-full shadow-sm" />

        <Changelog />
        <UpcomingEvents />
        <Grid.Item className="h-4 col-span-full shadow-sm" />
      </Grid.Box>
    </DashboardWrapper>
  );
}

const StatsItem = ({
  title,
  value,
  percentage,
}: {
  title: string;
  value: number;
  percentage: number;
}) => {
  return (
    <Grid.Item className="h-36 col-span-2 text-card-foreground shadow-sm flex flex-row">
      <div className="w-5/12">
        <div className="flex flex-row items-center justify-between p-6 pb-2 space-y-0">
          <h3 className="tracking-tight sm:text-sm md:text-base font-normal">
            {title}
          </h3>
        </div>
        <div className="p-6 pt-0 pr-0">
          <div className="text-2xl font-bold">+{value}</div>

          <p className="text-xs text-muted-foreground">
            +{percentage}% from last month
          </p>
        </div>
      </div>
      <div className="px-5 p-5 items-end justify-center bottom-0 flex w-7/12">
        <BarChart />
      </div>
    </Grid.Item>
  );
};

const UpcomingEvents = () => {
  return (
    <Grid.Item className="col-span-full lg:col-span-3 shadow-sm p-6">
      <div className="flex flex-col items-start pb-2">
        <h1 className="text-foreground text-2xl font-semibold leading-none tracking-tight pb-2">
          Upcoming Events
        </h1>
        <p className="text-muted-foreground text-xs">
          Check our{" "}
          <a
            href="https://twitter.com/yourusername"
            className="hover:underline text-foreground font-medium"
          >
            Discord
          </a>{" "}
          to stay up to date
        </p>
      </div>

      <ScrollArea className="p-2 pb-0 flex flex-col max-h-64">
        <Event
          icon={Package}
          title="Docker migration for all of our services"
          date="In 2 days"
        />

        <Event
          icon={ListX}
          title="Removing deprecated Lua hooks from our services"
          date="In 4 days"
        />

        <Event
          icon={Languages}
          title="Adding new languages to our services"
          date="In 6 days"
        />

        <Event
          icon={Languages}
          title="Adding new languages to our services"
          date="In 6 days"
        />

        <Event
          icon={Languages}
          title="Adding new languages to our services"
          date="In 6 days"
        />
      </ScrollArea>
    </Grid.Item>
  );
};

const Event = ({
  icon,
  title,
  date,
}: {
  icon: LucideIcon;
  title: string;
  date: string;
}) => {
  const Icon = icon;
  return (
    <div className="flex flex-row items-center mb-2 border p-3 rounded-sm">
      <Icon className="w-4 h-4 mr-4 text-muted-foreground" />
      <div className="flex flex-col overflow-hidden">
        <a className="text-ellipsis text-nowrap text-sm hover:underline cursor-pointer">
          {title}
        </a>
        <p className="text-muted-foreground text-xs">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>{date}</TooltipTrigger>
              <TooltipContent>9.2.2024 10:00 CET</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </p>
      </div>
    </div>
  );
};

const Changelog = () => {
  return (
    <Grid.Item className="col-span-full lg:col-span-3 shadow-sm p-6">
      <div className="flex flex-row items-center justify-between pb-2">
        <div>
          <h1 className="text-foreground text-2xl font-semibold leading-none tracking-tight pb-2">
            Changelogs
          </h1>
          <p className="text-muted-foreground text-xs flex items-center">
            Last 5 changes in&nbsp;
            <a
              href="https://github.com/"
              className="hover:underline text-foreground font-medium inline-flex items-center"
            >
              <GitBranch className="w-4 h-4 inline-block" />
              l0cked/main
            </a>
          </p>
        </div>
        <Button className="text-foreground text-xs h-8" variant="outline">
          View all
        </Button>
      </div>

      <div className="p-4 pb-0 flex flex-col">
        <Change
          icon={ComputerIcon}
          title="chore(web): added stuff that should be added and is added now"
          date="1 day ago"
        />

        <Change
          icon={LayoutIcon}
          title="style(ui): redesigned stuff that should be redesigned and is redesigned"
          date="2 days ago"
        />

        <Change
          icon={WrenchIcon}
          title="fix(web): fixxed stuff that should be fixxed and is fixxed now"
          date="4 days ago"
        />

        <Change
          icon={TimerIcon}
          title="perf(web): optimized stuff that should be optimized and is optimized now"
          date="5 days ago"
        />

        <Change
          icon={LightbulbIcon}
          title="test(web): testing stuff that should be tested and is tested now"
          date="6 days ago"
        />
      </div>
    </Grid.Item>
  );
};

const Change = ({
  icon,
  title,
  date,
}: {
  icon: LucideIcon;
  title: string;
  date: string;
}) => {
  const Icon = icon;
  return (
    <div className="flex flex-row items-center mb-2">
      <Icon className="w-4 h-4 mr-4 text-muted-foreground" />
      <div className="flex flex-col overflow-hidden">
        <a className="text-ellipsis text-nowrap text-sm hover:underline cursor-pointer">
          {title}
        </a>
        <p className="text-muted-foreground text-xs">{date}</p>
      </div>
    </div>
  );
};
