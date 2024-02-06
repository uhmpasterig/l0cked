import { DashboardWrapper } from "@/containers/dashboard";

export default function Dashboard({ params }: { params: { id: number } }) {
  return (
    <DashboardWrapper>
      <h1>Hello!</h1>
    </DashboardWrapper>
  );
}
