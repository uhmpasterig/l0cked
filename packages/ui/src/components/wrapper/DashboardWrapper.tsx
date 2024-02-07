import { Header as HeaderTypes, Navigation } from "locked";
import { Header } from "../navigation";
import { DashboardContentWrapper } from "./Dashboard.ContentWrapper";

type DashboardWrapperProps = {
  navigationList: Navigation.NavigationList;
};

const DashboardWrapper = ({
  navigationList,
  children,
}: DashboardWrapperProps & Component.HasChildren) => {
  return (
    <>
      <Header variant="dashboard-header" navigationList={navigationList} />
      <DashboardContentWrapper>{children}</DashboardContentWrapper>
    </>
  );
};

export { DashboardWrapper };
