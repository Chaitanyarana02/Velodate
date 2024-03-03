import { useMatch } from "react-router-dom";

const TopNavBar = () => {
  // show the page name on navBar
  const match = useMatch("/:pageName");

  let pageName = "Dashboard";

  if (match) {
    pageName = match.params.pageName
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <>
      <div className="text-[#F6F6F6] h-[64px] w-full flex items-center justify-between px-4 border-b border-[#FFFFFF] max-[363px]:px-2">
        {/* Left side */}
        <div>
          <span className="text-lg font-bold font-[Poppins]">{pageName}</span>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4 px-6 max-[363px]:px-2">
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
      </div>
    </>
  );
};

export default TopNavBar;
