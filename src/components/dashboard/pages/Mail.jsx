import { useEffect, useRef, useState } from "react";
import notificationData from "../../../../userNotifications.json";
import { IoTriangleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Mail = () => {
  const [isReportSortOpen, setIsReportSortOpen] = useState(false);
  const [isReportFilterOpen, setIsReportFilterOpen] = useState(false);
  const [maleChecked, setMaleChecked] = useState(false);
  const [femaleChecked, setFemaleChecked] = useState(false);
  const [activeChecked, setActiveChecked] = useState(false);
  const [inactiveChecked, setInactiveChecked] = useState(false);

  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleReportFilter = () => {
    setIsReportFilterOpen(!isReportFilterOpen);
    if (!isReportFilterOpen && isReportSortOpen) {
      setIsReportSortOpen(false);
    }
  };

  const toggleReportSort = () => {
    setIsReportSortOpen(!isReportSortOpen);
    if (!isReportSortOpen && isReportFilterOpen) {
      setIsReportFilterOpen(false);
    }
  };

  // handle to select and deselect the checkbox
  const handleMaleChange = () => {
    setMaleChecked(!maleChecked);
    setFemaleChecked(false);
  };

  const handleFemaleChange = () => {
    setMaleChecked(false);
    setFemaleChecked(!femaleChecked);
  };

  const handleActiveChange = () => {
    setActiveChecked(!activeChecked);
    setInactiveChecked(false);
  };

  const handleInactiveChange = () => {
    setActiveChecked(false);
    setInactiveChecked(!inactiveChecked);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsReportSortOpen(false);
        setIsReportFilterOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const rowsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total number of pages
  const totalPages = Math.ceil(notificationData.length / rowsPerPage);

  // Calculate index range for current page
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, notificationData.length);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleUserClick = (notify) => {
    // console.log("send the correct data from the users", notify);
    navigate("/push-mail", { state: { notifyData: notify } });
    // navigate("/user-profile");
  };

  return (
    <>
      <div className="px-4 mt-2 w-full flex flex-col h-screen flex-1">
        <div className="w-full flex justify-between items-center max-[464px]:flex-col mt-1">
          <h3 className="text-[#F6F6F6] text-[28px] font-semibold w-full">
            Sent Emails
          </h3>

          {/* Filter and sort icons */}

          <div
            className="flex items-center justify-end gap-4 px-6 w-full"
            ref={dropdownRef}
          >
            <div className="">
              <img
                src="/usersAssets/plusIcon.svg"
                alt="filter"
                className="w-8 h-8 cursor-pointer"
                onClick={() => navigate("/new-mail")}
              />
            </div>

            {/* filter icon */}
            <div className="relative">
              <img
                src="/usersAssets/filter.svg"
                alt="filter"
                className="w-8 h-8 cursor-pointer"
                onClick={toggleReportFilter}
              />

              {/* Filter Drop-down */}
              {isReportFilterOpen && (
                <div className="absolute top-11 right-3 w-48 bg-[#3D3B35] rounded-md shadow-lg">
                  <div className="relative">
                    <IoTriangleSharp className="absolute right-0 top-[-0.8rem] text-[#3D3B35]" />
                  </div>

                  <div className="py-1">
                    {/* gender */}
                    <div className="p-2">
                      <h1 className="text-[12px] text-[#F6F6F6]">Gender</h1>
                      <div className="flex items-center my-4">
                        <input
                          type="checkbox"
                          name="checkbox"
                          id="filter-mail-checkbox"
                          className="w-4 h-4 mr-2 cursor-pointer"
                          checked={maleChecked}
                          onChange={handleMaleChange}
                        />
                        <label
                          htmlFor="filter-mail-checkbox"
                          className="text-[#FFFFFF] text-[14px] cursor-pointer"
                        >
                          Male
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          name="checkbox"
                          id="filter-female-checkbox"
                          className="w-4 h-4 mr-2 cursor-pointer"
                          checked={femaleChecked}
                          onChange={handleFemaleChange}
                        />
                        <label
                          htmlFor="filter-female-checkbox"
                          className="text-[#FFFFFF] text-[14px] cursor-pointer"
                        >
                          Female
                        </label>
                      </div>
                    </div>

                    <hr />

                    {/* status */}
                    <div className="p-2">
                      <h1 className="text-[12px] text-[#F6F6F6]">Status</h1>
                      <div className="flex items-center my-4">
                        <input
                          type="checkbox"
                          name="checkbox"
                          id="filter-active-checkbox"
                          className="w-4 h-4 mr-2 cursor-pointer"
                          checked={activeChecked}
                          onChange={handleActiveChange}
                        />
                        <label
                          htmlFor="filter-active-checkbox"
                          className="text-[#FFFFFF] text-[14px] cursor-pointer"
                        >
                          Active
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          name="checkbox"
                          id="filter-inactive-checkbox"
                          className="w-4 h-4 mr-2 cursor-pointer"
                          checked={inactiveChecked}
                          onChange={handleInactiveChange}
                        />
                        <label
                          htmlFor="filter-inactive-checkbox"
                          className="text-[#FFFFFF] text-[14px] cursor-pointer"
                        >
                          Inactive
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* sort icon */}
            <div className="relative">
              <img
                src="/usersAssets/sort.svg"
                alt="sort"
                className="w-8 h-8 cursor-pointer"
                onClick={toggleReportSort}
              />

              {/* Sort dropdown */}
              {isReportSortOpen && (
                <div className="absolute top-11 right-3 w-48 bg-[#3D3B35] rounded-md shadow-lg">
                  <div className="relative">
                    <IoTriangleSharp className="absolute right-0 top-[-0.8rem] text-[#3D3B35]" />
                  </div>

                  <div className="py-1">
                    <button className="block px-4 py-2 text-[14px] text-[#F6F6F6] hover:text-[#f6f6f2e2]">
                      Old to new users
                    </button>

                    <hr />

                    <button className="block px-4 py-2 text-[14px] text-[#F6F6F6] hover:text-[#f6f6f2e2]">
                      New to old users
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="w-full flex flex-col items-center">
          {/* Table Head */}
          <div className="w-full grid grid-cols-4 gap-4 p-2 my-6">
            {/* checkbox */}
            <div className="col-span-1 max-[549px]:col-span-2 max-[340px]:col-span-3 flex items-center">
              <input
                type="checkbox"
                name="checkbox"
                id="table-h-checkbox"
                className="w-4 h-4 mr-8"
              />
              <label
                htmlFor="table-h-checkbox"
                className="text-[#FFFFFF] text-[12px]"
              >
                Date
              </label>
            </div>

            <div className="col-span-1 max-[549px]:col-span-2 text-[#FFFFFF] text-[12px]">
              Subject
            </div>

            <div className="col-span-1"></div>

            <div className="col-span-1 max-[549px]:col-span-2 text-[#FFFFFF] text-[12px]">
              User Type
            </div>
          </div>

          {/* Table Body */}
          <div className="w-full">
            {/* show the user data and display rows using map */}
            {notificationData
              .slice(startIndex, endIndex)
              .map((notify, index) => (
                <div
                  key={startIndex + index}
                  className="w-full bg-[#3D3B35] rounded-2xl grid grid-cols-4 md:grid-cols-4 gap-12 p-[0.4rem] my-[0.2rem] hover:border hover:border-[#D8A409] cursor-pointer items-center md:h-[3.2em] lg:h-[2.8em]"
                  onClick={() => handleUserClick(notify)}
                >
                  {/* checkbox */}
                  <div className="col-span-1 max-[549px]:col-span-2 max-[340px]:col-span-3 max-[340px]:flex-row-reverse max-[340px]:justify-between max-[340px]:w-full flex items-center ">
                    <input
                      type="checkbox"
                      name="checkbox"
                      id={`checkbox-${startIndex + index}`}
                      className="w-4 h-4 mr-8 max-[340px]:mr-[1rem]"
                    />
                    <label
                      htmlFor={`checkbox-${startIndex + index}`}
                      className="text-[#FFFFFF] text-[14px] hover:text-[#D8A409]"
                      // onClick={() => navigate("/user-profile")}
                    >
                      {notify.date}
                    </label>
                  </div>

                  {/* notification subject */}
                  <div className="col-span-1 max-[549px]:col-span-2 max-[340px]:col-span-3 text-[#FFFFFF] text-[14px]">
                    {notify.subject}
                  </div>

                  <div className="col-span-1"></div>

                  {/* notification user type */}
                  <div className="col-span-1 max-[549px]:col-span-2 max-[340px]:col-span-3 text-[#FFFFFF] text-[14px]">
                    {notify.user_type}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Pagination */}

      <div className="mt-4 px-4 flex items-center justify-between max-[449px]:flex-col">
        <h4 className="text-[#FFFFFF] text-[14px]">
          Show {rowsPerPage} rows per page
        </h4>

        <div className="text-[#FFFFFF] flex items-center justify-center">
          {/* Render pagination buttons */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded-lg text-[#FFFFFF] text-2xl mr-2 focus:outline-none"
          >
            {"<"}
          </button>
          <button
            onClick={() => handlePageChange(1)}
            className={`px-3 py-1 rounded-md ${
              currentPage === 1
                ? "bg-[#3D3B35] border-b border-[#D8A409] text-[#D8A409]"
                : "bg-black"
            } text-white text-sm mr-2 focus:outline-none`}
          >
            1
          </button>
          {currentPage > 3 && <span className="px-3 py-1">...</span>}
          {currentPage > 2 && currentPage < totalPages && (
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className={`px-3 py-1 rounded-md bg-black text-white text-sm mr-2 focus:outline-none`}
            >
              {currentPage - 1}
            </button>
          )}
          {currentPage > 1 && currentPage < totalPages && (
            <button
              onClick={() => handlePageChange(currentPage)}
              className={`px-3 py-1 rounded-md bg-[#3D3B35] border-b border-[#D8A409] text-[#D8A409] text-sm mr-2 focus:outline-none`}
            >
              {currentPage}
            </button>
          )}
          {currentPage < totalPages - 1 && (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className={`px-3 py-1 rounded-md bg-black text-white text-sm mr-2 focus:outline-none`}
            >
              {currentPage + 1}
            </button>
          )}
          {currentPage < totalPages - 2 && (
            <span className="px-3 py-1">...</span>
          )}

          {currentPage < totalPages && (
            <button
              onClick={() => handlePageChange(totalPages)}
              className={`px-3 py-1 rounded-md ${
                currentPage === totalPages
                  ? "bg-[#3D3B35] border-b border-[#D8A409] text-[#D8A409]"
                  : "bg-black"
              } text-white text-sm mr-2 focus:outline-none`}
            >
              {totalPages}
            </button>
          )}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded-lg text-white text-2xl mr-2 focus:outline-none"
          >
            {">"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Mail;
