import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SideNavBar from "./pages/SideNavBar";
import TopNavBar from "./pages/TopNavBar";
import { useEffect } from "react";

const DashboardLayout = () => {
  const privateRoutes = ["/"];
  const navigate = useNavigate();
  const location = useLocation();

  const isPrivateRoute = privateRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  useEffect(() => {
    if (!localStorage.getItem("token") && isPrivateRoute) {
      navigate("/sign-in");
    }
  }, [isPrivateRoute, navigate]);

  return (
    <>
      <div className="flex w-full min-h-screen bg-black relative">
        <div className="sticky top-0 opacity-100 z-50 max-h-screen">
          <div
            className="w-[72px] hidden md:flex flex-col"
            style={{
              visibility: "hidden",
            }}
          ></div>

          <div className="flex flex-col h-screen absolute">
            <SideNavBar />
          </div>
        </div>

        <div className="w-full flex flex-col flex-1">
          <TopNavBar />

          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
