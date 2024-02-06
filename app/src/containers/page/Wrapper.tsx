import { Theme } from "@/app/shop/[id]/actions/shop-config.types";
import { BackgroundGrid } from "@/components/layout/BackgroundGrid";
import { PageHeader, Footer } from "@/components/layout/page";
import { NavbarItemInfo } from "@/components/layout/page/navbar";
import { cn } from "@/lib/utils/classname.utils";

interface PageWrapperProps {
  children: React.ReactNode;
  navbarItems: NavbarItemInfo[];
  theme?: Theme;
  customHeaderButtons?: React.ReactNode;
}

const getActiveElements = () => {
  const activeElements = [];
  const max = 20;
  for (let i = 0; i < max; i++) {
    activeElements.push({ x: Math.floor(Math.random() * 20), y: Math.floor(Math.random() * 20) });
  }
  return activeElements;
};

const PageWrapper = ({
  theme = "blue",
  children,
  navbarItems,
  customHeaderButtons,
}: PageWrapperProps) => {
  return (
    <div className="relative flex min-h-screen flex-col max-w-screen overflow-hidden">
      <PageHeader navbarItems={navbarItems} customHeaderButtons={customHeaderButtons} />
      <BackgroundGrid
        theme={theme}
        className={cn(
          "h-[120vh] w-[120vh] absolute z-[-1]",
          "left-1/2 -translate-x-1/2 top-1/3 -translate-y-1/2"
        )}
        columns={20}
        rows={20}
        activeElements={getActiveElements()}
      />
      <main
        className={`
        mx-auto flex items-center flex-col py-14 lg:pb-20 
        max-w-screen-2xl w-screen-full 
        md:max-w-4xl md:w-full
        lg:max-w-5xl
        2xl:max-w-7xl`}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export { PageWrapper };
