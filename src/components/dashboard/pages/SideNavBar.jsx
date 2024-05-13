import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SideNavBar = ({ isOpen, setIsOpen }) => {
  const [isHovered, setIsHovered] = useState(false);

  const [colorChnageDashboard, setColorChnageDashboard] = useState(false);
  const [colorChnageUser, setColorChnageUser] = useState(false);
  const [colorChnageReport, setColorChnageReport] = useState(false);
  const [colorChnageContact, setColorChnageContact] = useState(false);
  const [colorChnageNotification, setColorChnageNotification] = useState(false);
  const [colorChnageMail, setColorChnageMail] = useState(false);
  const [colorChnageLogout, setColorChnageLogout] = useState(false);

  const [focusedItem, setFocusedItem] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // console.log(isSibeBarColse);

  const handleFocus = (itemName, e) => {
    setFocusedItem(itemName);
    if (window.innerWidth <= 768 && setIsOpen && e.target.tagName === "A") {
      setIsOpen(false);
    }
  };

  // update the focus sate based on the clik user
  const fetchDataBasedOnLocation = () => {
    const { pathname } = location;
    if (pathname === "/") {
      setFocusedItem("dashboard");
    } else if (pathname === "/users") {
      setFocusedItem("user");
    } else if (pathname === "/reports") {
      setFocusedItem("reports");
    } else if (pathname === "/contact-query") {
      setFocusedItem("contactQuery");
    } else if (pathname === "/notifications") {
      setFocusedItem("notification");
    } else if (pathname === "/mail") {
      setFocusedItem("mail");
    }
  };

  useEffect(() => {
    fetchDataBasedOnLocation();
  }, [location]);

  useEffect(() => {
    if (isOpen && focusedItem !== null && window.innerWidth <= 768) {
      setIsOpen(true);
    }
  }, [isOpen, focusedItem, setIsOpen]);

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/sign-in");
  };

  return (
    <>
      <div
        className={`bg-[#3D3B35] text-white w-[72px] flex-1 md:flex flex-col items-center gap-[32px] ${
          isOpen || isHovered ? "flex h-screen custom-vh-32 px-2" : "hidden"
        }`}
        // ${isHovered && "flex h-screen w-[206px]"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transition: "width 100ms ease-in",
        }}
      >
        {/* logo */}
        <div className="p-4">
          <Link to={"/"} onClick={(e) => handleFocus("dashboard", e)}>
            <img
              src={
                isHovered || isOpen
                  ? "/authAssets/velodate.svg"
                  : "/sidTopNavAssets/logo-icon.svg"
              }
              alt="logo_icon"
              className={
                isHovered || isOpen
                  ? "w-[177.3px] h-[38px]"
                  : "w-[36.97px] h-[38px]"
              }
            />
          </Link>
        </div>

        <div className="flex flex-col items-center justify-between flex-grow w-full">
          {/* Sidebar items */}
          <ul
            className={`flex items-center flex-col gap-[32px] ${
              (isHovered || isOpen) && "w-full"
            }`}
          >
            {/* dashboard */}
            <li className={`${(isHovered || isOpen) && "w-full"}`}>
              <Link
                to="/"
                className={`rounded-md ${
                  focusedItem === "dashboard" && "bg-[#292824]"
                } ${
                  isHovered || isOpen
                    ? "w-full flex items-center gap-2 justify-start px-4 py-2"
                    : "block p-2"
                }`}
                onClick={(e) => handleFocus("dashboard", e)}
              >
                <img
                  src={
                    colorChnageDashboard || focusedItem === "dashboard"
                      ? "/sidTopNavAssets/homeIconHover.svg"
                      : "/sidTopNavAssets/home-icon.svg"
                  }
                  alt="home_icon"
                  className="w-[24px] h-[24px]"
                  onMouseEnter={() => setColorChnageDashboard(true)}
                  onMouseLeave={() => setColorChnageDashboard(false)}
                />
                {(isHovered || isOpen) && (
                  <span
                    className={
                      colorChnageDashboard ? "text-[#D8A409]" : "text-[#F6F6F6]"
                    }
                    onMouseEnter={() => setColorChnageDashboard(true)}
                    onMouseLeave={() => setColorChnageDashboard(false)}
                  >
                    Dashboard
                  </span>
                )}
              </Link>
            </li>

            {/* user */}
            <li className={`${(isHovered || isOpen) && "w-full"}`}>
              <Link
                to="/users"
                className={`rounded-md ${
                  focusedItem === "user" && "bg-[#292824]"
                } ${
                  isHovered || isOpen
                    ? "w-full flex items-center gap-2 justify-start px-4 py-2"
                    : "block p-2"
                }`}
                onClick={(e) => handleFocus("user", e)}
              >
                <img
                  src={
                    colorChnageUser || focusedItem === "user"
                      ? "/sidTopNavAssets/sidNavUserIconHover.svg"
                      : "/sidTopNavAssets/sidNav_user-icon.svg"
                  }
                  alt="home_icon"
                  className="w-[24px] h-[24px]"
                  onMouseEnter={() => setColorChnageUser(true)}
                  onMouseLeave={() => setColorChnageUser(false)}
                />
                {(isHovered || isOpen) && (
                  <span
                    className={
                      colorChnageUser ? "text-[#D8A409]" : "text-[#F6F6F6]"
                    }
                    onMouseEnter={() => setColorChnageUser(true)}
                    onMouseLeave={() => setColorChnageUser(false)}
                  >
                    User
                  </span>
                )}
              </Link>
            </li>

            {/* report */}
            <li className={`${(isHovered || isOpen) && "w-full"}`}>
              <Link
                to="/reports"
                className={`rounded-md ${
                  focusedItem == "reports" && "bg-[#292824]"
                } ${
                  isHovered || isOpen
                    ? "w-full flex items-center gap-2 justify-start px-4 py-2"
                    : "block p-2"
                }`}
                onClick={(e) => handleFocus("reports", e)}
              >
                <img
                  src={
                    colorChnageReport || focusedItem == "reports"
                      ? "/sidTopNavAssets/reportHover.svg"
                      : "/sidTopNavAssets/report.svg"
                  }
                  alt="home_icon"
                  className="w-[24px] h-[24px]"
                  onMouseEnter={() => setColorChnageReport(true)}
                  onMouseLeave={() => setColorChnageReport(false)}
                />
                {(isHovered || isOpen) && (
                  <span
                    className={
                      colorChnageReport ? "text-[#D8A409]" : "text-[#F6F6F6]"
                    }
                    onMouseEnter={() => setColorChnageReport(true)}
                    onMouseLeave={() => setColorChnageReport(false)}
                  >
                    Report
                  </span>
                )}
              </Link>
            </li>

            {/* contact Query */}
            <li className={`${(isHovered || isOpen) && "w-full"}`}>
              <Link
                to="/contact-query"
                className={`rounded-md ${
                  focusedItem == "contactQuery" && "bg-[#292824]"
                } ${
                  isHovered || isOpen
                    ? "w-full flex items-center gap-2 justify-start px-4 py-2"
                    : "block p-2"
                }`}
                onClick={(e) => handleFocus("contactQuery", e)}
              >
                <img
                  src={
                    colorChnageContact || focusedItem == "contactQuery"
                      ? "/sidTopNavAssets/contactQueryHover.svg"
                      : "/sidTopNavAssets/contactQuery.svg"
                  }
                  alt="home_icon"
                  className="w-[24px] h-[24px]"
                  onMouseEnter={() => setColorChnageContact(true)}
                  onMouseLeave={() => setColorChnageContact(false)}
                />
                {(isHovered || isOpen) && (
                  <span
                    className={
                      colorChnageContact ? "text-[#D8A409]" : "text-[#F6F6F6]"
                    }
                    onMouseEnter={() => setColorChnageContact(true)}
                    onMouseLeave={() => setColorChnageContact(false)}
                  >
                    Contact
                  </span>
                )}
              </Link>
            </li>

            {/* notification */}
            <li className={`${(isHovered || isOpen) && "w-full"}`}>
              <Link
                to="/notifications"
                className={`rounded-md ${
                  focusedItem == "notification" && "bg-[#292824]"
                } ${
                  isHovered || isOpen
                    ? "w-full flex items-center gap-2 justify-start px-4 py-2"
                    : "block p-2"
                }`}
                onClick={(e) => handleFocus("notification", e)}
              >
                <img
                  src={
                    colorChnageNotification || focusedItem == "notification"
                      ? "/sidTopNavAssets/sidNavNotificationHover.svg"
                      : "/sidTopNavAssets/sidNavNotifications.svg"
                  }
                  alt="home_icon"
                  className="w-[24px] h-[24px]"
                  onMouseEnter={() => setColorChnageNotification(true)}
                  onMouseLeave={() => setColorChnageNotification(false)}
                />
                {(isHovered || isOpen) && (
                  <span
                    className={
                      colorChnageNotification
                        ? "text-[#D8A409]"
                        : "text-[#F6F6F6]"
                    }
                    onMouseEnter={() => setColorChnageNotification(true)}
                    onMouseLeave={() => setColorChnageNotification(false)}
                  >
                    Notification
                  </span>
                )}
              </Link>
            </li>

            {/* mail */}
            <li className={`${(isHovered || isOpen) && "w-full"}`}>
              <Link
                to="/mail"
                className={`rounded-md ${
                  focusedItem == "mail" && "bg-[#292824]"
                } ${
                  isHovered || isOpen
                    ? "w-full flex items-center gap-2 justify-start px-4 py-2"
                    : "block p-2"
                }`}
                onClick={(e) => handleFocus("mail", e)}
              >
                <img
                  src={
                    colorChnageMail || focusedItem == "mail"
                      ? "/sidTopNavAssets/sidNavMailHover.svg"
                      : "/sidTopNavAssets/sidNavMail.svg"
                  }
                  alt="home_icon"
                  className="w-[24px] h-[24px]"
                  onMouseEnter={() => setColorChnageMail(true)}
                  onMouseLeave={() => setColorChnageMail(false)}
                />
                {(isHovered || isOpen) && (
                  <span
                    className={
                      colorChnageMail ? "text-[#D8A409]" : "text-[#F6F6F6]"
                    }
                    onMouseEnter={() => setColorChnageMail(true)}
                    onMouseLeave={() => setColorChnageMail(false)}
                  >
                    Mail
                  </span>
                )}
              </Link>
            </li>
          </ul>

          {/* Log-out */}
          <div className={`${(isHovered || isOpen) && "w-full"}`}>
            <Link
              to="/sign-in"
              className={`focus:bg-[#292824] rounded-md mb-2 ${
                focusedItem == "logOut" && "bg-[#292824]"
              } ${
                isHovered || isOpen
                  ? "w-full flex items-center gap-2 justify-start px-4 py-2"
                  : "block p-2"
              }`}
              onClick={(e) => {
                handleFocus("logOut", e);
                handleLogout();
              }}
            >
              <img
                src={
                  colorChnageLogout || focusedItem == "logOut"
                    ? "/sidTopNavAssets/sidNavLogOutHover.svg"
                    : "/sidTopNavAssets/sidNavLogOut.svg"
                }
                alt="home_icon"
                className="w-[24px] h-[24px]"
                onMouseEnter={() => setColorChnageLogout(true)}
                onMouseLeave={() => setColorChnageLogout(false)}
              />
              {(isHovered || isOpen) && (
                <span
                  className={
                    colorChnageLogout ? "text-[#D8A409]" : "text-[#F6F6F6]"
                  }
                  onMouseEnter={() => setColorChnageLogout(true)}
                  onMouseLeave={() => setColorChnageLogout(false)}
                >
                  Logout
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

SideNavBar.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default SideNavBar;
