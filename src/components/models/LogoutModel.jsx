import PropTypes from "prop-types";

const LogoutModel = ({ isOpenLogout, closeLogoutModal }) => {
  // console.log(isOpenLogout, closeLogoutModal);

  const handleCloseModal = (event) => {
    event.preventDefault();
    event.stopPropagation();
    closeLogoutModal();
  };

  return (
    <>
      {isOpenLogout && (
        <div className="fixed inset-0 flex items-center justify-center z-50 w-full">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={handleCloseModal}
          ></div>
          <div className="bg-[#3D3B35] p-12 rounded-lg shadow-lg relative z-50 md:w-1/2 lg:w-2/6">
            <div className="flex flex-col justify-center items-center">
              <img
                src="/sidTopNavAssets/sidNavLogOut.svg"
                alt="sidNavLogOut"
                className="w-[40px] h-[40px]"
              />
              <h3 className="text-[#FFFFFF] text-[32px] font-semibold my-4">
                Logout
              </h3>
              <p className="text-[#FFFFFF] text-[16px] font-normal mt-2 mb-16">
                Are you sure you want to Log out.
              </p>
            </div>
            <div className="w-full flex gap-4">
              <button
                className="border-2 border-[#FFCF40] bg-[#D19D00] rounded-full text-[#000000] text-[16px] font-medium hover:bg-[#FFFFFF33] hover:text-[#FFFFFF] w-1/2 p-1"
                onClick={handleCloseModal}
              >
                Cancle
              </button>
              <button
                className="border-2 border-[#FFCF40] bg-[#D19D00] rounded-full text-[#000000] text-[16px] font-medium hover:bg-[#FFFFFF33] hover:text-[#FFFFFF] w-1/2 p-1"
                onClick={handleCloseModal}
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

LogoutModel.propTypes = {
  isOpenLogout: PropTypes.bool.isRequired,
  closeLogoutModal: PropTypes.func.isRequired,
};

export default LogoutModel;
