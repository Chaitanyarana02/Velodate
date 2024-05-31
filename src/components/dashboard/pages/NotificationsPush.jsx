import { useState } from "react";
import { useLocation } from "react-router-dom";
import ResendNotificationModel from "../../models/ResendNotificationModel";
import DeleteNotificationModel from "../../models/DeleteNotificationModel";

const NotificationPush = () => {
  const location = useLocation();
  const { notifyData } = location.state;

  const [isModalOpenResend, setIsModalOpenResend] = useState(false);
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);

  const openModalResend = () => {
    setIsModalOpenResend(true);
  };

  const closeModalResend = () => {
    setIsModalOpenResend(false);
  };

  const openModalDelete = () => {
    setIsModalOpenDelete(true);
  };

  const closeModalDelete = () => {
    setIsModalOpenDelete(false);
  };

  const formatDate = (date) => {
    const parsedDate = new Date(date);
    return parsedDate instanceof Date && !isNaN(parsedDate)
      ? parsedDate.toISOString().split("T")[0]
      : "Invalid Date";
  };

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
              <button
                className="text-[#FFFFFF] hover:border hover:border-[#D19D00] text-[14px] p-2 rounded-full w-full md:w-[22%]"
                onClick={openModalDelete}
              >
                Delete
              </button>
              <button
                className="text-[#FFFFFF] hover:border hover:border-[#D19D00] text-[14px] p-2 rounded-full w-full md:w-[22%]"
                onClick={openModalResend}
              >
                Resend
              </button>
            </div>

            <ResendNotificationModel
              isOpenReSendNotification={isModalOpenResend}
              closeModalReSendNotification={closeModalResend}
              isReSendNotificationData={notifyData}
            />

            <DeleteNotificationModel
              isOpenDeleteNotification={isModalOpenDelete}
              closeModalDeleteNotification={closeModalDelete}
              isDeleteNotification={notifyData}
            />
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
                    {formatDate(notifyData.createdAt)}
                  </p>
                </div>

                {/* To */}
                <div className="flex items-start gap-16 max-[446px]:gap-2 max-[446px]:flex-col">
                  <label htmlFor="name" className="w-32 text-[14px]">
                    To
                  </label>
                  <p className="font-normal text-[16px] w-1/2">
                    {notifyData.sentTo}
                  </p>
                </div>

                {/* Title */}
                <div className="flex items-start gap-16 max-[446px]:gap-2 max-[446px]:flex-col">
                  <label htmlFor="name" className="w-32 text-[14px]">
                    Title
                  </label>
                  <p className="font-normal text-[16px] w-1/2">
                    {notifyData.title}
                  </p>
                </div>

                {/* message */}
                <div className="flex items-start gap-16 max-[446px]:gap-2 max-[446px]:flex-col">
                  <label htmlFor="name" className="w-32 text-[14px]">
                    Message
                  </label>
                  <p className="font-normal text-[16px] w-1/2">
                    {notifyData.body}
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

export default NotificationPush;
