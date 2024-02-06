// layout using next auth to authenticate users and redirect to / if not authenticated

import { getServerSession } from "next-auth";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return children;
}
