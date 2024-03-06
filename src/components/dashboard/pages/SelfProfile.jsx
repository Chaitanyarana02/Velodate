import { useState } from "react";
import { FaLessThan } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SelfProfile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState("password");

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setInputType(showPassword ? "password" : "text");
  };

  return (
    <>
      <div className="px-4 mt-4 w-full flex  flex-col mb-8">
        {/* left side user profile and name */}
        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex gap-4 items-start w-full">
            <FaLessThan
              className="text-[#C5C5C5] cursor-pointer"
              onClick={() => navigate("/")}
            />

            <img
              src="/usersAssets/userProfileImage.svg"
              alt="usersAssets/userProfile"
            />
            <div className="flex flex-col">
              <h1 className="text-[#D19D00] font-semibold text-2xl">Gaurav</h1>
              <div className="flex items-center gap-2">
                <IoLocationOutline className="text-[#F6F6F6]" />
                <p className="text-[#F6F6F6] text-md">Los Angles</p>
              </div>
            </div>
          </div>

          {/* Save button */}
          <div className="flex justify-end gap-8 w-full mt-8 md:mt-0">
            <button className="text-[#FFFFFF] hover:border hover:border-[#D19D00] text-[14px] p-2 rounded-md">
              Save Changes
            </button>
          </div>
        </div>

        {/* Basic Details */}
        <div className="w-full mt-8 flex flex-col text-[#F6F6F6]">
          <div className="w-full flex flex-col">
            <h3>Basic Details</h3>
            <div className="flex flex-col gap-4 my-4">
              {/* Full Name */}
              <div className="flex items-start gap-16 max-[446px]:gap-2 max-[446px]:flex-col">
                <label htmlFor="name" className="w-32">
                  Full name
                </label>
                <input
                  type="text"
                  name="name"
                  id="userName"
                  className="border border-[#C5C5C5] outline-none rounded-md bg-black p-[12px] h-[40px]"
                />
              </div>

              {/* Email */}
              <div className="flex items-start gap-16 max-[446px]:gap-2 max-[446px]:flex-col">
                <label htmlFor="name" className="w-32">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="userEmail"
                  className="border border-[#C5C5C5] outline-none rounded-md bg-black p-[12px] h-[40px]"
                />
              </div>

              {/* Contact number */}
              <div className="flex items-start gap-16 max-[446px]:gap-2 max-[446px]:flex-col">
                <label htmlFor="name" className="w-32">
                  Contact number
                </label>
                <input
                  type="number"
                  name="number"
                  id="userNumber"
                  className="border border-[#C5C5C5] outline-none rounded-md bg-black p-[12px] h-[40px]"
                />
              </div>

              {/* DOB */}
              <div className="flex items-start gap-16 max-[446px]:gap-2 max-[446px]:flex-col">
                <label htmlFor="name" className="w-32">
                  DOB
                </label>
                <input
                  type="datetime-local"
                  name="dob"
                  id="userDob"
                  className="border border-[#C5C5C5] outline-none rounded-md bg-black p-[12px] h-[40px]"
                />
              </div>

              {/* Gender */}
              <div className="flex items-start gap-16 max-[446px]:gap-2 max-[446px]:flex-col">
                <label htmlFor="name" className="w-32">
                  Gender
                </label>
                <select
                  name="gender"
                  id="nameGender"
                  className="border border-[#C5C5C5] outline-none rounded-md bg-black p-[12px] h-[40px]"
                >
                  <option value="gender" className="text-[16px]">
                    SelectGender
                  </option>
                  <option value="gender" className="text-[16px]">
                    Male
                  </option>
                  <option value="gender" className="text-[16px]">
                    Female
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-[#949494] w-full my-8"></div>

        {/* Report a safety concern */}
        <div className="w-full">
          <div className="w-full flex justify-between items-center">
            <h3 className="text-[#F6F6F6] ">Password</h3>

            {/* Reset button */}
            <div className="flex justify-end gap-8 w-full">
              <button
                className="text-[#FFFFFF] hover:border hover:border-[#D19D00] text-[14px] p-2 rounded-md"
                onClick={() => navigate("/reset-password")}
              >
                Reset Passowrd
              </button>
            </div>
          </div>

          <div className="w-full flex mt-4">
            {/* Password */}
            <div className="text-[#C5C5C5] flex items-start gap-16 max-[446px]:gap-2 max-[446px]:flex-col relative">
              <label htmlFor="userPassword" className="w-32">
                Passowrd
              </label>
              <input
                type={inputType}
                name="password"
                id="userPassword"
                className="border border-[#C5C5C5] outline-none rounded-md bg-black p-[12px] h-[40px]"
              />

              {showPassword ? (
                <img
                  src="/usersAssets/userPasswordOpenEye.svg"
                  alt="userPasswordEye"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer max-[446px]:top-[72%]"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <img
                  src="/usersAssets/userPasswordCloseEye.svg"
                  alt="userPasswordEye"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer max-[446px]:top-[72%]"
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelfProfile;
