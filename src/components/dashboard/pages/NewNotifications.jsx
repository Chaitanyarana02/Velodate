import { useState } from "react";
import SendNotificationsModel from "../../models/SendNotificationsModel";

const NewNotifications = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [sendNotiData, setSendNotiData] = useState({
    to: "",
    title: "New Function",
    message:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint quae, cum et placeat asperiores vero consequuntur debitis nobis assumenda praesentium!",
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to handle changes in form fields and update state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSendNotiData({
      ...sendNotiData,
      [name]: value,
    });
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

            {/* Send notification to all user and new user */}
            <div className="flex justify-end gap-8 w-full">
              <button
                className="text-[#D8A409] hover:border hover:border-[#D19D00] text-[14px] p-2 rounded-full w-full md:w-[22%]"
                onClick={openModal}
              >
                Send Notification
              </button>
            </div>
          </div>

          <SendNotificationsModel
            isOpenSendNotification={isModalOpen}
            closeModalSendNotification={closeModal}
            isSendNotificationData={sendNotiData}
          />

          {/* add notifications */}
          <div className="w-full flex flex-col gap-8 mt-4">
            {/* New password */}
            <div className="text-[#FFFFFF] flex items-start gap-16 max-[446px]:gap-2 max-[446px]:flex-col">
              <div className="flex flex-col gap-4 my-4 w-full">
                {/* To */}
                <div className="flex items-start gap-16 max-[446px]:gap-2 max-[446px]:flex-col">
                  <label htmlFor="name" className="w-32">
                    To
                  </label>

                  <select
                    name="to"
                    className="border border-[#C5C5C5] outline-none rounded-md bg-black p-[12px] w-full md:w-2/5 lg:w-[25%]"
                    value={sendNotiData.to}
                    onChange={handleInputChange}
                  >
                    <option value="userType" className="text-[16px]">
                      Select the users
                    </option>
                    <option value="NEW USERS" className="text-[16px]">
                      NEW USERS
                    </option>
                    <option value="ALL USERS" className="text-[16px]">
                      ALL USERS
                    </option>
                  </select>
                </div>

                {/* Title */}
                <div className="flex items-start gap-16 max-[446px]:gap-2 max-[446px]:flex-col w-full">
                  <label htmlFor="name" className="w-32">
                    Title
                  </label>

                  <input
                    name="title"
                    type="text"
                    id="userName"
                    className="border border-[#C5C5C5] outline-none rounded-md bg-black p-[12px] h-[40px] w-full md:w-2/5 lg:w-[25%]"
                    value={sendNotiData.title}
                    onChange={handleInputChange}
                  />
                </div>

                {/* message */}
                <div className="flex items-start gap-16 max-[446px]:gap-2 max-[446px]:flex-col">
                  <label htmlFor="name" className="w-32">
                    Message
                  </label>

                  <textarea
                    name="message"
                    id="notifyMessage"
                    cols="30"
                    rows="5"
                    className="border border-[#C5C5C5] outline-none rounded-md bg-black p-[12px] w-full md:w-2/5 lg:w-[25%]"
                    value={sendNotiData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewNotifications;
