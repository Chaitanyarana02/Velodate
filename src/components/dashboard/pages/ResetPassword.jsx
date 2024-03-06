import { useState } from "react";

const ResetPassword = () => {
  const [conShowPassword, setConShowPassword] = useState(false);
  const [reEnterShowPassword, setReEnterShowPassword] = useState(false);
  const [conInputType, setConInputType] = useState("password");
  const [reEnterInputType, setReEnterInputType] = useState("password");

  const toggleConPasswordVisibility = () => {
    setConShowPassword(!conShowPassword);
    setConInputType(conShowPassword ? "password" : "text");
  };

  const toggleReEnterPasswordVisibility = () => {
    setReEnterShowPassword(!reEnterShowPassword);
    setReEnterInputType(reEnterShowPassword ? "password" : "text");
  };

  return (
    <>
      <div className="px-4 mt-4 w-full flex flex-col mb-8">
        {/* Reset Password */}
        <div className="w-full">
          <div className="w-full flex justify-between items-center max-[464px]:flex-col">
            <h3 className="text-[#F6F6F6] text-[28px] font-semibold w-full">
              Reset Password
            </h3>

            {/* Reset button */}
            <div className="flex justify-end gap-8 w-full">
              <button className="text-[#FFFFFF] hover:border hover:border-[#D19D00] text-[14px] p-2 rounded-md">
                Reset Password
              </button>
            </div>
          </div>

          {/* confirm and re-enter password */}
          <div className="w-full flex flex-col gap-8 mt-4">
            {/* New password */}
            <div className="text-[#C5C5C5] flex items-start gap-16 max-[446px]:gap-2 max-[446px]:flex-col relative">
              <label htmlFor="userNewPassword" className="w-36 text-[14px]">
                New password
              </label>
              <div className="relative w-full md:w-1/3 lg:w-1/4">
                <input
                  type={conInputType}
                  name="newPassword"
                  id="userNewPassword"
                  placeholder="Enter password"
                  className="border border-[#C5C5C5] outline-none rounded-md bg-black p-[12px] h-[40px] placeholder:text-[#949494] w-full"
                />
                <img
                  src={
                    conShowPassword
                      ? "/usersAssets/userPasswordOpenEye.svg"
                      : "/usersAssets/userPasswordCloseEye.svg"
                  }
                  alt="userPasswordEye"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer max-[446px]:top-[50%]"
                  onClick={toggleConPasswordVisibility}
                />
              </div>
            </div>

            {/* Re-enter password */}
            <div className="text-[#C5C5C5] flex items-start gap-16 max-[446px]:gap-2 max-[446px]:flex-col relative">
              <label htmlFor="userReEnterPassword" className="w-36 text-[14px]">
                Re-enter password
              </label>
              <div className="relative w-full md:w-1/3 lg:w-1/4">
                <input
                  type={reEnterInputType}
                  name="reEnterpassword"
                  id="userReEnterPassword"
                  placeholder="Re-enter password"
                  className="border border-[#C5C5C5] outline-none rounded-md bg-black p-[12px] h-[40px] w-full placeholder:text-[#949494]"
                />
                <img
                  src={
                    reEnterShowPassword
                      ? "/usersAssets/userPasswordOpenEye.svg"
                      : "/usersAssets/userPasswordCloseEye.svg"
                  }
                  alt="userPasswordEye"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer max-[446px]:top-[50%]"
                  onClick={toggleReEnterPasswordVisibility}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
