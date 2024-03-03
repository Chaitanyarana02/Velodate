import { Outlet } from "react-router-dom";
import SideNavBar from "./pages/SideNavBar";
import TopNavBar from "./pages/TopNavBar";

const DashboardLayout = () => {
  return (
    <>
      <div className="flex w-full h-auto bg-black">
        <div className="flex flex-col">
          <SideNavBar />
        </div>

        <div className="w-full flex flex-col">
          <TopNavBar />

          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
