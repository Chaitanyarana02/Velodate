import { useEffect, useState } from "react";
import ActiveUserChart from "./ActiveUserChart";
import Visitors from "./Visitors";

const AdminDashboard = () => {
  const [newUserCount, setNewUserCount] = useState(0);
  const [activeUserCount, setActiveUserCount] = useState(0);
  const [sessionCount, setSessionCount] = useState(0);
  const [matchRatio, setMatchRatio] = useState(0);

  // useEffect(() => {
  //   const animateNumbers = () => {
  //     const finalValues = {
  //       newUserCount: 400.00,
  //       activeUserCount: 800.00,
  //       sessionCount: 800.00,
  //       matchRatio: 60.00,
  //     };

  //     const animationDuration = 800;
  //     const animationStep = 20;

  //     const animateValue = (currentValue, finalValue, setter) => {
  //       const difference = finalValue - currentValue;
  //       const step = difference / (animationDuration / animationStep);
  //       let current = currentValue;
  //       const interval = setInterval(() => {
  //         current += step;
  //         if (
  //           (step > 0 && current >= finalValue) ||
  //           (step < 0 && current <= finalValue)
  //         ) {
  //           clearInterval(interval);
  //           current = finalValue;
  //         }
  //         // Limit the number of decimal places to 2
  //         const roundedValue = parseFloat(current.toFixed(2));
  //         setter(roundedValue);
  //       }, animationStep);
  //     };

  //     animateValue(0, finalValues.newUserCount, setNewUserCount);
  //     animateValue(0, finalValues.activeUserCount, setActiveUserCount);
  //     animateValue(0, finalValues.sessionCount, setSessionCount);
  //     animateValue(0, finalValues.matchRatio, setMatchRatio);
  //   };

  //   animateNumbers();
  // }, []);

  useEffect(() => {
    const intervals = [];

    const animateValue = (currentValue, finalValue, setter) => {
      const animationDuration = 800; // Total duration of animation
      const animationStep = 20; // Time between updates in ms
      const difference = finalValue - currentValue;
      const step = difference / (animationDuration / animationStep);

      let current = currentValue;

      const interval = setInterval(() => {
        current += step;

        if (
          (step > 0 && current >= finalValue) ||
          (step < 0 && current <= finalValue)
        ) {
          clearInterval(interval);
          current = finalValue;
        }

        const roundedValue = parseFloat(current.toFixed(2));
        setter(roundedValue);
      }, animationStep);

      intervals.push(interval);
    };

    const finalValues = {
      newUserCount: 400.0,
      activeUserCount: 800.0,
      sessionCount: 800.0,
      matchRatio: 60.0,
    };

    animateValue(0, finalValues.newUserCount, setNewUserCount);
    animateValue(0, finalValues.activeUserCount, setActiveUserCount);
    animateValue(0, finalValues.sessionCount, setSessionCount);
    animateValue(0, finalValues.matchRatio, setMatchRatio);

    // Cleanup function to clear intervals when the component unmounts or updates
    return () => {
      intervals.forEach(clearInterval);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-9 my-5 px-12 justify-evenly items-center text-[#F6F6F6] w-full max-[363px]:px-8">
        {/* new user and active user */}
        <div className="flex flex-col md:flex-row w-full gap-9">
          <div className="flex gap-[16px] items-center p-4 w-full md:w-1/2 h-[88px] bg-[#3D3B35] rounded-md">
            {/* <img src={dashUser} alt="dashUser" className="w-[64px] h-[64px]" /> */}
            <img src="/dashboardAssets/dashUser.svg" alt="dashIemage" />

            <div className="flex flex-col">
              <h4 className="text-[#FFFFFF] text-[32px] leading-[32px] font-semibold">
                {newUserCount}
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
                {activeUserCount}
              </h4>
              <p className="my-2 text-[#C5C5C5] text-[14px] leading-[14px] font-normal">
                Active Users
              </p>
            </div>
          </div>
        </div>

        {/* number of session and match ratio */}
        <div className="flex flex-col md:flex-row w-full gap-9">
          <div className="flex gap-[16px] items-center p-4 w-full md:w-1/2 h-[88px] bg-[#3D3B35] rounded-md">
            {/* <img src={dashUser} alt="dashUser" className="w-[64px] h-[64px]" /> */}
            <img src="/dashboardAssets/dashSession.svg" alt="dashIemage" />

            <div className="flex flex-col">
              <h4 className="text-[#FFFFFF] text-[32px] leading-[32px] font-semibold">
                {sessionCount}
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
                {matchRatio}%
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

        <div className="my-5 w-full">
          <Visitors />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
