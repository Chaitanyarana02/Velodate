import { useState } from "react";
import axios from "../../axios";
import PropTypes from "prop-types";
import Loading from "react-fullscreen-loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SendMailNotificationModel = ({
  isOpenSendNotification,
  closeModalSendNotification,
  isSendNotificationData,
  // resetForm,
}) => {
  const [screenLoading, setScreenLoading] = useState(false);

  const handleCloseModal = (event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    closeModalSendNotification();
  };

  const handleSendNotifi = async () => {
    handleCloseModal();
    // console.log(isSendNotificationData.to);
    try {
      setScreenLoading(true);

      const formData = new FormData();
      formData.append("to", isSendNotificationData.to);
      formData.append("title", isSendNotificationData.title);
      formData.append("message", isSendNotificationData.message);
      if (isSendNotificationData.image) {
        formData.append("file", isSendNotificationData.image);
      }

      //   console.log(formData);

      const response = await axios.post(
        "admin/users/send-email-notification",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setScreenLoading(false);

      if (response.data.status === true) {
        toast.success(response.data.message);

        // resetForm();
      }

      // console.log(response.data.status);
    } catch (error) {
      // console.error("Error while sending notification:", error);
      toast.error(error.message);
      setScreenLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />

      {/* Loading indicator */}
      {screenLoading && (
        <Loading loading background="#49504c85" loaderColor="#ffffff40" />
      )}

      {isOpenSendNotification && (
        <div className="fixed inset-0 flex items-center justify-center z-50 w-full">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={handleCloseModal}
          ></div>
          <div className="bg-[#3D3B35] p-12 rounded-lg shadow-lg relative z-50 md:w-1/2 lg:w-2/6">
            <div className="flex flex-col justify-center items-center">
              <img
                src="/sidTopNavAssets/sidNavNotifications.svg"
                alt="sidNavLogOut"
                className="w-[40px] h-[40px]"
              />
              <h3 className="text-[#FFFFFF] text-[32px] font-semibold my-4 text-center">
                Send Mail Notification
              </h3>
              <p className="text-center text-[#FFFFFF] text-[16px] font-normal mt-2 mb-16">
                Are you sure you want to Send this notification. This action is
                non-revisable.
              </p>
            </div>

            <div className="w-full flex gap-4">
              <button
                className="border-2 border-[#FFCF40] bg-[#D19D00] rounded-full text-[#000000] text-[16px] font-medium w-1/2 p-1"
                onClick={handleCloseModal}
              >
                Cancle
              </button>
              <button
                className="border-2 border-[#FFCF40] bg-[#FFFFFF33] text-[#FFFFFF] rounded-full text-[16px] font-medium w-1/2 p-1"
                onClick={handleSendNotifi}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

SendMailNotificationModel.propTypes = {
  isOpenSendNotification: PropTypes.bool.isRequired,
  closeModalSendNotification: PropTypes.func.isRequired,
  isSendNotificationData: PropTypes.object.isRequired,
  // resetForm: PropTypes.func.isRequired,
};

export default SendMailNotificationModel;