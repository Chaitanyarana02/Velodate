import { useState } from "react";

const Sign_In = () => {
  const [signInShowPassword, setSignInShowPassword] = useState(false);
  const [signInInputType, setSignInInputType] = useState("password");

  const toggleSignInPasswordVisibility = () => {
    setSignInShowPassword(!signInShowPassword);
    setSignInInputType(signInShowPassword ? "password" : "text");
  };

  return (
    <div className="flex justify-center w-full">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center my-10 mx-4 md:mx-20">
        <div className="w-full mb-8 md:text-start">
          <img
            src="/authAssets/velodate.svg"
            alt="velodate"
            className="h-[24px] w-[120.22px]"
          />
        </div>

        <div className="md:text-start my-4 w-full">
          <h1 className="text-[#F6F6F6] text-3xl font-medium">Sign in</h1>
          <p className="text-[#F6F6F6] text-[14px] font-normal">
            Please provide required credentials to <br />
            access your account.
          </p>
        </div>

        {/* email */}
        <div className="flex flex-col gap-2 w-full mb-6">
          <label htmlFor="" className="text-[#949494]">
            Email/ Contact Number
          </label>
          <input
            type="email"
            placeholder="Enter email or contact number"
            className="bg-black placeholder-text-[#949494] text-[#949494] border border-[#F6F6F6] outline-none p-2 rounded-md w-10/12 md:w-3/4 lg:w-1/2"
          />
        </div>

        {/* password */}
        <div className="flex flex-col gap-2 w-full relative">
          <label htmlFor="signInPassowrd" className="text-[#949494]">
            Password
          </label>
          <div className="relative w-10/12 md:w-3/4 lg:w-1/2">
            <input
              type={signInInputType}
              name="newPassword"
              id="userNewPassword"
              placeholder="Enter password"
              className="border border-[#C5C5C5] outline-none rounded-md bg-black p-[12px] h-[40px] placeholder-text-[#949494] text-[#949494] w-full"
            />
            <img
              src={
                signInShowPassword
                  ? "/usersAssets/userPasswordOpenEye.svg"
                  : "/usersAssets/userPasswordCloseEye.svg"
              }
              alt="userPasswordEye"
              className="absolute right-5 top-[50%] transform -translate-y-1/2 cursor-pointer"
              onClick={toggleSignInPasswordVisibility}
            />
          </div>
        </div>

        {/* reminder and forget button */}
        <div className="w-full mt-4">
          <div className="flex items-center justify-between w-10/12 md:w-3/4 lg:w-1/2">
            <div className="flex items-center gap-2">
              <label
                htmlFor="signinReminder"
                className="cursor-pointer flex items-center gap-2"
              >
                <input
                  type="checkbox"
                  name="reminder"
                  id="signinReminder"
                  className="cursor-pointer"
                />
                <span className="text-[#F6F6F6] text-[14px] font-normal cursor-pointer">
                  Remember me
                </span>
              </label>
            </div>

            <div className="flex items-center gap-2">
              <button className="text-[#D8A409] text-[14px] font-normal">
                Forgot password
              </button>
            </div>
          </div>
        </div>

        <div className="w-full mt-4">
          <button className="bg-[#F3E4B5] text-[16px] text-[#000000] rounded-full p-2 w-10/12 md:w-3/4 lg:w-1/2">
            Sign in
          </button>
        </div>
      </div>

      {/* Only show the image on larger screens */}
      <div className="hidden md:block w-1/2">
        <img
          src="/authAssets/leftSideImage.svg"
          alt="leftSideImage"
          className="w-full h-screen object-cover"
        />
      </div>
    </div>
  );
};

export default Sign_In;
