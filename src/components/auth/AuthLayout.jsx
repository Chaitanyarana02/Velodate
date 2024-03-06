import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <section className="flex flex-1 justify-center items-center flex-col py-10 bg-black h-screen">
        <Outlet />
      </section>
    </>
  );
};

export default AuthLayout;
