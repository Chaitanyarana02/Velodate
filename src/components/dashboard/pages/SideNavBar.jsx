import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SideNavBar = ({ isOpen }) => {
  return (
    <>
      <div
        className={`bg-[#3D3B35] text-white flex-1 w-[72px] md:flex flex-col gap-[32px] ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {/* logo */}
        <div className="p-4">
          <Link to={"/"}>
            <img
              src="/sidTopNavAssets/logo-icon.svg"
              alt="logo_icon"
              className="w-[36.97px] h-[38px]"
            />
          </Link>
        </div>

        <div className="flex flex-col items-center justify-between flex-grow">
          {/* Sidebar items */}
          <ul className="flex items-center flex-col gap-[32px]">
            {/* dashboard */}
            <li className="">
              <Link to="/" className="block p-1 rounded focus:bg-[#292824]">
                <img
                  src="/sidTopNavAssets/home-icon.svg"
                  alt="home_icon"
                  className="w-[24px] h-[24px]"
                />
              </Link>
            </li>

            {/* user */}
            <li className="">
              <Link
                to="/users"
                className="block p-1 rounded focus:bg-[#292824]"
              >
                <img
                  src="/sidTopNavAssets/sidNav_user-icon.svg"
                  alt="sideNav_user"
                  className="w-[24px] h-[24px]"
                />
              </Link>
            </li>

            {/* report */}
            <li className="">
              <Link
                to="/reports"
                className="block p-1 rounded focus:bg-[#292824]"
              >
                <img
                  src="/sidTopNavAssets/report.svg"
                  alt="report"
                  className="w-[24px] h-[24px]"
                />
              </Link>
            </li>

            {/* contact Query */}
            <li className="">
              <Link
                to="/contact-query"
                className="block p-1 rounded focus:bg-[#292824]"
              >
                <img
                  src="/sidTopNavAssets/contactQuery.svg"
                  alt="contactQuery"
                  className="w-[24px] h-[24px]"
                />
              </Link>
            </li>

            {/* notification */}
            <li className="">
              <Link
                to="/notifications"
                className="block p-1 rounded focus:bg-[#292824]"
              >
                <img
                  src="/sidTopNavAssets/sidNavNotifications.svg"
                  alt="sidNavNotifications"
                  className="w-[24px] h-[24px]"
                />
              </Link>
            </li>

            {/* mail */}
            <li className="">
              <Link to="/mail" className="block p-1 rounded focus:bg-[#292824]">
                <img
                  src="/sidTopNavAssets/sidNavMail.svg"
                  alt="sidNavMail"
                  className="w-[24px] h-[24px]"
                />
              </Link>
            </li>
          </ul>

          {/* Log-out */}
          <div>
            <Link
              href="#"
              className="block p-1 mb-3 rounded focus:bg-[#292824]"
            >
              <img
                src="/sidTopNavAssets/sidNavLogOut.svg"
                alt="sidNavLogOut"
                className="w-[24px] h-[24px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

SideNavBar.propTypes = {
  isOpen: PropTypes.bool,
};

export default SideNavBar;
