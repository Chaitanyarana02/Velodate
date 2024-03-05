import ActiveUserChart from "./ActiveUserChart";
import Visitors from "./Visitors";

const AdminDashboard = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-9 my-5 px-12 justify-evenly items-center text-[#F6F6F6] w-full max-[363px]:px-8">
        <div className="flex flex-col md:flex-row w-full gap-9">
          <div className="flex gap-[16px] items-center p-4 w-full md:w-1/2 h-[88px] bg-[#3D3B35] rounded-md">
            {/* <img src={dashUser} alt="dashUser" className="w-[64px] h-[64px]" /> */}
            <img src="/dashboardAssets/dashUser.svg" alt="dashIemage" />

            <div className="flex flex-col">
              <h4 className="text-[#FFFFFF] text-[32px] leading-[32px] font-semibold">
                400
              </h4>
              <p className="my-2 text-[#C5C5C5] text-[14px] leading-[14px] font-normal">
                New User
              </p>
            </div>
          </div>

          <div className="flex gap-[16px] items-center p-4 w-full md:w-1/2 h-[88px] bg-[#3D3B35] rounded-md">
            {/* <img src={dashUser} alt="dashUser" className="w-[64px] h-[64px]" /> */}
            <img src="/dashboardAssets/dashActiveUser.svg" alt="dashIemage" />

            <div className="flex flex-col">
              <h4 className="text-[#FFFFFF] text-[32px] leading-[32px] font-semibold">
                800
              </h4>
              <p className="my-2 text-[#C5C5C5] text-[14px] leading-[14px] font-normal">
                Active Users
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full gap-9">
          <div className="flex gap-[16px] items-center p-4 w-full md:w-1/2 h-[88px] bg-[#3D3B35] rounded-md">
            {/* <img src={dashUser} alt="dashUser" className="w-[64px] h-[64px]" /> */}
            <img src="/dashboardAssets/dashSession.svg" alt="dashIemage" />

            <div className="flex flex-col">
              <h4 className="text-[#FFFFFF] text-[32px] leading-[32px] font-semibold">
                800
              </h4>
              <p className="my-2 text-[#C5C5C5] text-[14px] leading-[14px] font-normal">
                Number of sessions
              </p>
            </div>
          </div>

          <div className="flex gap-[16px] items-center p-4 w-full md:w-1/2 h-[88px] bg-[#3D3B35] rounded-md">
            {/* <img src={dashUser} alt="dashUser" className="w-[64px] h-[64px]" /> */}
            <img src="/dashboardAssets/dashMatchRatio.svg" alt="dashIemage" />

            <div className="flex flex-col">
              <h4 className="text-[#FFFFFF] text-[32px] leading-[32px] font-semibold">
                60%
              </h4>
              <p className="my-2 text-[#C5C5C5] text-[14px] leading-[14px] font-normal">
                Match Ratio
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-8 flex-col md:flex-row px-12 w-full max-[589px]:px-4">
        <div className="mt-5 w-full">
          <ActiveUserChart />
        </div>

        <div className="mt-5 w-full">
          <Visitors />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
