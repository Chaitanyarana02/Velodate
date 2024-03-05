import { useMatch } from "react-router-dom";
import { IoClose, IoReorderThreeSharp } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import SideNavBar from "./SideNavBar";

const TopNavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isIconCross, setIsIconCross] = useState(false);

  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);

    setIsIconCross(!isIconCross);
  };

  // show the page name on navBar
  const match = useMatch("/:pageName");

  let pageName = "Dashboard";

  if (match) {
    pageName = match.params.pageName
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  // close the nav bar in any where click on screen
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
        setIsIconCross(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className="text-[#F6F6F6] h-[64px] w-full flex items-center justify-between px-4 border-b border-[#C5C5C5] max-[363px]:px-2"
        ref={sidebarRef}
      >
        {/* Left side */}
        <div>
          <span className="text-lg font-bold font-[Poppins]">{pageName}</span>
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center space-x-4 px-6 max-[363px]:px-2">
          {/* Search box */}
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="bg-[#3D3B35] px-4 py-1 rounded-3xl text-white pl-4"
            />
            <img
              src="/sidTopNavAssets/search-icon.svg"
              alt="notification_icon"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
            />
          </div>

          {/* User icon */}
          <img
            src="/sidTopNavAssets/topNav_user-icon.svg"
            alt="user-icon"
            className="cursor-pointer"
          />

          {/* Username */}
          <span className="text-sm font-semibold font-[Poppins]">Gaurav</span>

          {/* Notification icon */}
          <img
            src="/sidTopNavAssets/notification-icon.svg"
            alt="notification_icon"
            className="cursor-pointer"
          />
        </div>

        {/* three dot on right side */}
        {/* Icon */}
        <div className="flex items-center space-x-4 px-6 max-[363px]:px-2 md:hidden">
          {isIconCross ? (
            <IoClose
              className="text-[#F6F6F6] text-5xl cursor-pointer"
              onClick={toggleSidebar}
            />
          ) : (
            <IoReorderThreeSharp
              className="text-[#F6F6F6] text-5xl cursor-pointer"
              onClick={toggleSidebar}
            />
          )}
        </div>

        {/* Sidebar */}
        {isSidebarOpen && (
          <div className="h-full fixed right-0 top-[4.2rem] z-50">
            <SideNavBar isOpen={isSidebarOpen} />
          </div>
        )}
      </div>
    </>
  );
};

export default TopNavBar;
