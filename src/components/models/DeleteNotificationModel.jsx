import PropTypes from "prop-types";
import axios from "../../axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "react-fullscreen-loading";
import { useNavigate } from "react-router-dom";

const DeleteNotificationModel = ({
  isOpenDeleteNotification,
  closeModalDeleteNotification,
  isDeleteNotification,
}) => {
  const [screenLoading, setScreenLoading] = useState(false);
  const navigate = useNavigate();

  const handleCloseModal = (event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    // event.preventDefault();
    // event.stopPropagation();
    closeModalDeleteNotification();
  };

  const handleDelete = async () => {
    try {
      handleCloseModal();
      setScreenLoading(true);

      // console.log(isDeleteNotification);

      const response = await axios.delete(
        `admin/users/push-notification/${isDeleteNotification.id}`
      );

      // console.log(response.data.status);
      // setScreenLoading(false);

      if (response.data.status === true) {
        navigate("/notifications");
      }
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

      {isOpenDeleteNotification && (
        <div className="fixed inset-0 flex items-center justify-center z-50 w-full">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={handleCloseModal}
          ></div>
          <div className="bg-[#3D3B35] p-12 rounded-lg shadow-lg relative z-50 md:w-1/2 lg:w-2/6">
            <div className="flex flex-col justify-center items-center">
              <img
                src="/usersAssets/delete.svg"
                alt="sidNavLogOut"
                className="w-[40px] h-[40px]"
              />
              <h3 className="text-[#FFFFFF] text-[32px] font-semibold my-4">
                Delete
              </h3>
              <p className="text-center text-[#FFFFFF] text-[16px] font-normal mt-2 mb-16">
                Are you sure you want to delete this notification.This action is
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
                onClick={handleDelete}
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

DeleteNotificationModel.propTypes = {
  isOpenDeleteNotification: PropTypes.bool.isRequired,
  closeModalDeleteNotification: PropTypes.func.isRequired,
  isDeleteNotification: PropTypes.object.isRequired,
};

export default DeleteNotificationModel;
