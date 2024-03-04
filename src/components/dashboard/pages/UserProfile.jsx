import { FaLessThan } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

import { useLocation, useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const { userData } = location.state;

  // console.log("send the correct data from the usersProfile", userData);

  return (
    <div className="px-4 mt-4 w-full flex  flex-col mb-8">
      {/* left side user profile and name */}
      <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex gap-4 items-start w-full">
          <FaLessThan
            className="text-[#C5C5C5] cursor-pointer"
            onClick={() => navigate("/users")}
          />

          <img
            src="/usersAssets/userProfileImage.svg"
            alt="usersAssets/userProfile"
          />
          <div className="flex flex-col">
            <h1 className="text-[#D19D00] font-semibold text-2xl">
              {userData.name}
            </h1>
            <div className="flex items-center gap-2">
              <IoLocationOutline className="text-[#F6F6F6]" />
              <p className="text-[#F6F6F6] text-md">Los Angles</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-8 w-full mt-8 md:mt-0">
          <button className="text-[#F6F6F6] text-md border-2 hover:border-[#D8A409] p-1 rounded-full w-1/4 max-[570px]:w-2/6 max-[359px]:w-2/5">
            Delete
          </button>
          <button className="text-[#F6F6F6] text-md border-2 hover:border-[#D8A409] p-1 rounded-full w-1/4 max-[570px]:w-2/6 max-[359px]:w-2/5">
            Save Chnages
          </button>
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
              <h1 className="m-0 p-0 text-[16px]">{userData.gender}</h1>
              <h1 className="m-0 p-0 text-[16px]">{userData.phone}</h1>
              <h1 className="m-0 p-0 text-[16px]">{userData.email}</h1>
              <h1 className="m-0 p-0 text-[16px]">Girl</h1>
              <h1 className="m-0 p-0 text-[16px]">
                Therapy, Movie, Badminton, Gym, Yoga{" "}
              </h1>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col mt-4">
          <h1 className="m-0 p-0 text-[16px]">Images</h1>

          <div className="flex gap-4 my-4 relative">
            <div className="relative">
              <img src="/usersAssets/userListImages.svg" alt="userListImages" />
              <button className="absolute top-0 right-0 p-1">
                <img
                  src="/usersAssets/userImageCrosIcon.svg"
                  alt="userImageCrosIcon"
                />
              </button>
            </div>
            <div className="relative">
              <img src="/usersAssets/userListImages.svg" alt="userListImages" />
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

      <div className="border-b border-[#949494] w-full my-8"></div>

      {/* Phone notifications */}
      <div className="text-[#F6F6F6]">
        <div className="w-full flex flex-col">
          <h3>Phone notifications</h3>
          <div className="flex gap-12 items-center my-4">
            <div className="flex flex-col gap-6">
              <h1 className="m-0 p-0 text-[16px]">New Matches</h1>
              <h1 className="m-0 p-0 text-[16px]">New Messages</h1>
              <h1 className="m-0 p-0 text-[16px]">Announcements</h1>
            </div>
            <div className="flex flex-col gap-6">
              <img src="/usersAssets/userSwitchIcon.svg" alt="userSwitchIcon" />
              <img src="/usersAssets/userSwitchIcon.svg" alt="userSwitchIcon" />
              <img src="/usersAssets/userSwitchIcon.svg" alt="userSwitchIcon" />
            </div>
          </div>
          <h1 className="m-0 p-0 text-[12px]">What’s new on VeloDate</h1>
        </div>
      </div>

      <div className="border-b border-[#949494] w-full my-8"></div>

      {/* Email notifications */}
      <div className="text-[#F6F6F6]">
        <div className="w-full flex flex-col">
          <h3>Email notifications</h3>
          <div className="flex gap-12 items-center my-4">
            <div className="flex flex-col gap-6">
              <h1 className="m-0 p-0 text-[16px]">New Matches</h1>
              <h1 className="m-0 p-0 text-[16px]">New Messages</h1>
              <h1 className="m-0 p-0 text-[16px]">Announcements</h1>
            </div>
            <div className="flex flex-col gap-6">
              <img src="/usersAssets/userSwitchIcon.svg" alt="userSwitchIcon" />
              <img src="/usersAssets/userSwitchIcon.svg" alt="userSwitchIcon" />
              <img src="/usersAssets/userSwitchIcon.svg" alt="userSwitchIcon" />
            </div>
          </div>
          <h1 className="m-0 p-0 text-[12px]">What’s new on VeloDate</h1>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
