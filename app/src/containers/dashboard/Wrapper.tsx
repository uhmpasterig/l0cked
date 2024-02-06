import { DashboardHeader } from "@/components/layout/dashboard/Header";
import { cn } from "@/lib/utils/classname.utils";

interface DashboardWrapperProps {
  children: React.ReactNode;
}

const DashboardWrapper = ({ children }: DashboardWrapperProps) => {
  return (
    <div className="relative flex min-h-screen flex-col max-w-screen overflow-hidden">
      <DashboardHeader />
    </div>
  );
};

export { DashboardWrapper };
