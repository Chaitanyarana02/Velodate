import { FaLessThan } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

const ContactQueryDetailed = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { queryData } = location.state;

  return (
    <>
      <div className="px-4 mt-4 w-full flex  flex-col mb-8">
        {/* left side user profile and name */}
        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex gap-4 items-start w-full">
            <FaLessThan
              className="text-[#C5C5C5] cursor-pointer"
              onClick={() => navigate("/reports")}
            />

            <img
              src="/usersAssets/userProfileImage.svg"
              alt="usersAssets/userProfile"
            />
            <div className="flex flex-col">
              <h1 className="text-[#D19D00] font-semibold text-2xl">
                {queryData.name}
              </h1>
              <div className="flex items-center gap-2">
                <IoLocationOutline className="text-[#F6F6F6]" />
                <p className="text-[#F6F6F6] text-md">Los Angles</p>
              </div>
            </div>
          </div>

          {/* status button */}
          <div className="flex justify-end gap-8 w-full mt-8 md:mt-0">
            <div className="col-span-1 max-[549px]:col-span-2 max-[340px]:col-span-3 text-[#FFFFFF] text-[14px] w-2/6 max-[549px]:w-1/2">
              {queryData.status.toLowerCase() === "active" ? (
                <span className="flex justify-between items-center p-2 bg-[#CD256133] rounded-full text-center border-2 border-[#CD2561]">
                  {queryData.status}
                  <IoIosArrowDown className="mr-2" />
                </span>
              ) : (
                <span className="flex justify-between items-center p-2 bg-[#25CD7C33] rounded-full text-center border-2 border-[#25CD7C33]">
                  {queryData.status}
                  <IoIosArrowDown className="mr-2" />
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Basic Details */}
        <div className="w-full mt-8 flex flex-col text-[#F6F6F6]">
          <div className="w-full flex flex-col">
            <h3>Basic Details</h3>
            <div className="flex gap-12 items-center my-4">
              <div className="flex flex-col gap-6">
                <h1 className="m-0 p-0 text-[16px]">Gender</h1>
                <h1 className="m-0 p-0 text-[16px]">Phone</h1>
                <h1 className="m-0 p-0 text-[16px]">Email</h1>
                <h1 className="m-0 p-0 text-[16px]">Like to date</h1>
                <h1 className="m-0 p-0 text-[16px]">Interests</h1>
              </div>
              <div className="flex flex-col gap-6">
                <h1 className="m-0 p-0 text-[16px]">Female</h1>
                <h1 className="m-0 p-0 text-[16px]">+91 9975879857</h1>
                <h1 className="m-0 p-0 text-[16px]">example@gmail.com</h1>
                <h1 className="m-0 p-0 text-[16px]">Girl</h1>
                <h1 className="m-0 p-0 text-[16px]">
                  Therapy, Movie, Badminton, Gym, Yoga{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-[#949494] w-full my-8"></div>

        {/* Report a safety concern */}
        <div className="text-[#F6F6F6]">
          <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col">
            <h3>Report a safety concern</h3>
            <p className="text-[16px] mt-8">
              Lorem ipsum dolor sit amet consectetur. Tempus enim id vitae nulla
              morbi. Donec bibendum volutpat eu amet sed proin feugiat aliquam
              curabitur. Quis montes nibh natoque aenean elit proin nibh dapibus
              dignissim. Amet non lobortis sed morbi eget.
            </p>
          </div>

          <div className="w-full flex flex-col mt-4">
            <h1 className="m-0 p-0 text-[16px]">Images</h1>

            <div className="flex gap-4 my-4 relative">
              <div className="relative">
                <img
                  src="/usersAssets/userListImages.svg"
                  alt="userListImages"
                />
                <button className="absolute top-0 right-0 p-1">
                  <img
                    src="/usersAssets/userImageCrosIcon.svg"
                    alt="userImageCrosIcon"
                  />
                </button>
              </div>
              <div className="relative">
                <img
                  src="/usersAssets/userListImages.svg"
                  alt="userListImages"
                />
                <button className="absolute top-0 right-0 p-1">
                  <img
                    src="/usersAssets/userImageCrosIcon.svg"
                    alt="userImageCrosIcon"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactQueryDetailed;
