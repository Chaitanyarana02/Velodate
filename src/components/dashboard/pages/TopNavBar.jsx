import "./TopNavBar.css";
import { useMatch, useNavigate } from "react-router-dom";
import { IoClose, IoReorderThreeSharp, IoTriangleSharp } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import SideNavBar from "./SideNavBar";
import LogoutModel from "../../models/LogoutModel";

const TopNavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isIconCross, setIsIconCross] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const sidebarRef = useRef(null);
  const dropdownProfileRef = useRef(null);
  const dropdownNotificationRef = useRef(null);

  const navigate = useNavigate();

  const toggleProfile = () => {
    setIsProfile(!isProfile);
    if (!isProfile && isNotification) {
      setIsNotification(false);
    }
  };

  const toggleNotification = () => {
    setIsNotification(!isNotification);
    if (!isNotification && isProfile) {
      setIsProfile(false);
    }
  };

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownProfileRef.current &&
        !dropdownProfileRef.current.contains(event.target)
      ) {
        setIsProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownNotificationRef.current &&
        !dropdownNotificationRef.current.contains(event.target)
      ) {
        setIsNotification(false);
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
          <span className="text-lg font-bold">{pageName}</span>
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
          <div
            className="relative flex gap-2 items-center"
            ref={dropdownProfileRef}
          >
            <img
              src="/sidTopNavAssets/topNav_user-icon.svg"
              alt="user-icon"
              className="cursor-pointer"
              onClick={() => toggleProfile()}
            />

            {/* Username */}
            <span className="text-sm font-semibold">Gaurav</span>

            {/* Sort dropdown */}
            {isProfile && (
              <div className="absolute top-11 right-0 opacity-100 z-50 w-48 bg-[#3D3B35] rounded-md shadow-lg">
                <div className="relative">
                  <IoTriangleSharp className="absolute right-0 top-[-0.8rem] text-[#3D3B35]" />
                </div>

                <div className="py-1">
                  <button
                    className="block px-4 py-2 text-[14px] text-[#F6F6F6] hover:text-[#f6f6f2e2]"
                    onClick={() => navigate("/self-profile")}
                  >
                    View Profile
                  </button>

                  <hr className="border-b border-[#949494]" />

                  <button
                    className="block px-4 py-2 text-[14px] text-[#F6F6F6] hover:text-[#f6f6f2e2]"
                    onClick={openModal}
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}

            <LogoutModel
              isOpenLogout={isModalOpen}
              closeLogoutModal={closeModal}
            />
          </div>

          {/* Notification icon */}
          <div
            className="relative flex gap-2 items-center"
            ref={dropdownNotificationRef}
          >
            <img
              src={
                isNotification
                  ? "/sidTopNavAssets/topNavNotificationOnClick.svg"
                  : "/sidTopNavAssets/notification-icon.svg"
              }
              alt="notification_icon"
              className="cursor-pointer"
              onClick={() => toggleNotification()}
            />
            {/* Sort dropdown */}
            {isNotification && (
              <div className="absolute top-11 right-0 opacity-100 z-50 w-96 bg-[#3D3B35] rounded-md shadow-lg">
                <div className="relative">
                  <IoTriangleSharp className="absolute right-0 top-[-0.8rem] text-[#3D3B35]" />
                </div>
                <div className="py-1">
                  <h3 className="text-[14px] text-[#F6F6F6] hover:text-[#f6f6f2e2] p-2">
                    Notifications
                  </h3>

                  <div className="h-96 overflow-y-auto custom-scrollbar">
                    <div className="flex flex-col p-2 m-2 cursor-pointer hover:bg-[#FFFFFF29] rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h2 className="text-[14px]">Topic</h2>
                        <h3 className="text-[14px]">3 minute</h3>
                      </div>

                      <p className="text-[12px]">
                        Lorem ipsum dolor sit amet consectetur. Sagittis enim
                        viverra arcu egestas ...
                      </p>
                    </div>

                    <hr className="border-b border-[#949494]" />

                    <div className="flex flex-col p-2 m-2 cursor-pointer hover:bg-[#FFFFFF29] rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h2 className="text-[14px]">Topic</h2>
                        <h3 className="text-[14px]">3 minute</h3>
                      </div>

                      <p className="text-[12px]">
                        Lorem ipsum dolor sit amet consectetur. Sagittis enim
                        viverra arcu egestas ...
                      </p>
                    </div>

                    <hr className="border-b border-[#949494]" />

                    <div className="flex flex-col p-2 m-2 cursor-pointer hover:bg-[#FFFFFF29] rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h2 className="text-[14px]">Topic</h2>
                        <h3 className="text-[14px]">3 minute</h3>
                      </div>

                      <p className="text-[12px]">
                        Lorem ipsum dolor sit amet consectetur. Sagittis enim
                        viverra arcu egestas ...
                      </p>
                    </div>

                    <hr className="border-b border-[#949494]" />

                    <div className="flex flex-col p-2 m-2 cursor-pointer hover:bg-[#FFFFFF29] rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h2 className="text-[14px]">Topic</h2>
                        <h3 className="text-[14px]">3 minute</h3>
                      </div>

                      <p className="text-[12px]">
                        Lorem ipsum dolor sit amet consectetur. Sagittis enim
                        viverra arcu egestas ...
                      </p>
                    </div>

                    <hr className="border-b border-[#949494]" />

                    <div className="flex flex-col p-2 m-2 cursor-pointer hover:bg-[#FFFFFF29] rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h2 className="text-[14px]">Topic</h2>
                        <h3 className="text-[14px]">3 minute</h3>
                      </div>

                      <p className="text-[12px]">
                        Lorem ipsum dolor sit amet consectetur. Sagittis enim
                        viverra arcu egestas ...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
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
