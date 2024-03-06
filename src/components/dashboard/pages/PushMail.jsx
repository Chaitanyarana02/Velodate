import { useLocation } from "react-router-dom";

const PushMail = () => {
  const location = useLocation();
  const { notifyData } = location.state;

  return (
    <>
      <div className="px-4 mt-4 w-full flex flex-col mb-8">
        {/* Reset Password */}
        <div className="w-full">
          <div className="w-full flex justify-between items-center max-[464px]:flex-col">
            <h3 className="text-[#F6F6F6] text-[28px] font-semibold w-full">
              Sent Notifications
            </h3>

            {/* Delete and resend button */}
            <div className="flex justify-end gap-8 w-full">
              <button className="text-[#FFFFFF] hover:border hover:border-[#D19D00] text-[14px] p-2 rounded-full w-full md:w-[22%]">
                Delete
              </button>
              <button className="text-[#FFFFFF] hover:border hover:border-[#D19D00] text-[14px] p-2 rounded-full w-full md:w-[22%]">
                Resend
              </button>
            </div>
          </div>

          {/* confirm and re-enter password */}
          <div className="w-full flex flex-col gap-8 mt-4">
            {/* New password */}
            <div className="text-[#FFFFFF] flex items-start gap-16 max-[446px]:gap-2 max-[446px]:flex-col">
              <div className="flex flex-col gap-4 my-4">
                {/* Date */}
                <div className="flex items-start gap-16 max-[446px]:gap-2 max-[446px]:flex-col">
                  <label htmlFor="name" className="w-32 text-[14px]">
                    Date
                  </label>
                  <p className="font-normal text-[16px] w-1/2">
                    {notifyData.date}
                  </p>
                </div>

                {/* To */}
                <div className="flex items-start gap-16 max-[446px]:gap-2 max-[446px]:flex-col">
                  <label htmlFor="name" className="w-32 text-[14px]">
                    To
                  </label>
                  <p className="font-normal text-[16px] w-1/2">
                    {notifyData.name}
                  </p>
                </div>

                {/* Title */}
                <div className="flex items-start gap-16 max-[446px]:gap-2 max-[446px]:flex-col">
                  <label htmlFor="name" className="w-32 text-[14px]">
                    Title
                  </label>
                  <p className="font-normal text-[16px] w-1/2">
                    {notifyData.subject}
                  </p>
                </div>

                {/* message */}
                <div className="flex items-start gap-16 max-[446px]:gap-2 max-[446px]:flex-col">
                  <label htmlFor="name" className="w-32 text-[14px]">
                    Message
                  </label>
                  <p className="font-normal text-[16px] w-full md:w-1/3 lg:w-2/5">
                    {notifyData.message}
                  </p>
                </div>

                {/* File */}
                <div className="flex items-start gap-16 max-[446px]:gap-2 max-[446px]:flex-col">
                  <label htmlFor="name" className="w-32 text-[14px]">
                    File
                  </label>
                  <p className="font-normal text-[16px] w-1/2 flex gap-4">
                    <img src="/usersAssets/attachment.svg" alt="attachment" />
                    {notifyData.subject}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PushMail;
