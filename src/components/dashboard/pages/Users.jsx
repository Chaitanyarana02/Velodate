import { useEffect, useRef, useState } from "react";
import userData from "../../../../userData.json";
import { useNavigate } from "react-router-dom";

const Users = () => {
  // sort dropdown
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [maleChecked, setMaleChecked] = useState(false);
  const [femaleChecked, setFemaleChecked] = useState(false);
  const [activeChecked, setActiveChecked] = useState(false);
  const [inactiveChecked, setInactiveChecked] = useState(false);

  const navigate = useNavigate();

  const dropdownRef = useRef(null);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
    if (!isFilterOpen && isSortOpen) {
      setIsSortOpen(false);
    }
  };

  const toggleSort = () => {
    setIsSortOpen(!isSortOpen);
    if (!isSortOpen && isFilterOpen) {
      setIsFilterOpen(false);
    }
  };

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
        setIsSortOpen(false);
        setIsFilterOpen(false);
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
  const totalPages = Math.ceil(userData.length / rowsPerPage);

  // Calculate index range for current page
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, userData.length);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="px-4 mt-4 w-full flex flex-col">
        {/* Filter and sort icons */}
        <div
          className="flex items-center justify-end gap-4 px-6 w-full"
          ref={dropdownRef}
        >
          {/* filter icon */}
          <img
            src="/usersAssets/filter.svg"
            alt="filter"
            className="w-8 h-8 cursor-pointer"
            onClick={toggleFilter}
          />

          {/* sort icon */}
          <img
            src="/usersAssets/sort.svg"
            alt="sort"
            className="w-8 h-8 cursor-pointer"
            onClick={toggleSort}
          />

          {/* Sort dropdown */}
          {isSortOpen && (
            <div className="relative">
              <div className="absolute top-5 right-3 w-48 bg-[#3D3B35] rounded-md shadow-lg">
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
            </div>
          )}

          {/* Filter Drop-down */}
          {isFilterOpen && (
            <div className="relative">
              <div className="absolute top-5 right-3 w-48 bg-[#3D3B35] rounded-md shadow-lg">
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
            </div>
          )}
        </div>

        {/* Table */}
        <div className="w-full flex flex-col items-center">
          {/* Table Head */}
          <div className="w-full grid grid-cols-6 gap-4 p-2 my-6">
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
                Name
              </label>{" "}
            </div>

            <div className="col-span-1 max-[549px]:col-span-2 text-[#FFFFFF] text-[12px]">
              Gender
            </div>
            <div className="col-span-1 max-[549px]:col-span-2 text-[#FFFFFF] text-[12px]">
              DOB
            </div>
            <div className="col-span-1 max-[549px]:col-span-2 text-[#FFFFFF] text-[12px]">
              Email
            </div>
            <div className="col-span-1 max-[549px]:col-span-2 text-[#FFFFFF] text-[12px]">
              Phone
            </div>
            <div className="col-span-1 max-[549px]:col-span-2 text-[#FFFFFF] text-[12px]">
              Status
            </div>
          </div>

          {/* Table Body */}
          <div className="w-full">
            {/* show the user data and display rows using map */}
            {userData.slice(startIndex, endIndex).map((user, index) => (
              <div
                key={startIndex + index}
                className="w-full bg-[#3D3B35] rounded-2xl grid grid-cols-4 md:grid-cols-6 gap-4 p-2 my-[0.20rem] hover:border hover:border-[#D8A409] cursor-pointer items-center"
                onClick={() => navigate("/user-profile")}
              >
                {/* checkbox */}
                <div className="col-span-1 max-[549px]:col-span-2 max-[340px]:col-span-3 flex items-center">
                  <input
                    type="checkbox"
                    name="checkbox"
                    id={`checkbox-${startIndex + index}`}
                    className="w-4 h-4 mr-8"
                  />
                  <label
                    htmlFor={`checkbox-${startIndex + index}`}
                    className="text-[#FFFFFF] text-[14px] hover:text-[#D8A409]"
                  >
                    {user.name}
                  </label>
                </div>
                {/* gender */}
                <div className="col-span-1 max-[549px]:col-span-2 max-[340px]:col-span-3 text-[#FFFFFF] text-[14px]">
                  {user.gender}
                </div>
                {/* date of birth */}
                <div className="col-span-1 max-[549px]:col-span-2 max-[340px]:col-span-3 text-[#FFFFFF] text-[14px]">
                  {user.dob}
                </div>
                {/* email */}
                <div className="col-span-1 max-[549px]:col-span-2 max-[340px]:col-span-3 text-[#FFFFFF] text-[14px]">
                  {user.email}
                </div>{" "}
                {/* phone number */}
                <div className="col-span-1 max-[549px]:col-span-2 max-[340px]:col-span-3 text-[#FFFFFF] text-[14px]">
                  {user.phone}
                </div>
                <div className="col-span-1 max-[549px]:col-span-2 max-[340px]:col-span-3 text-[#FFFFFF] text-[14px]">
                  {user.status.toLowerCase() === "active" ? (
                    <span className="bg-[#25CD7C33] rounded-full text-center block p-1 border-2 border-[#25CD7C33]">
                      {user.status}
                    </span>
                  ) : (
                    <span className="bg-[#CD256133] rounded-full text-center block p-1 border-2 border-[#CD2561]">
                      {user.status}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}

      <div className="mt-4 px-4 flex items-center justify-between">
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

export default Users;
