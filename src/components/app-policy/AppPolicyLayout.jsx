import { Outlet } from "react-router-dom";
import  Footer from "../footer/Footer" 
const AppPolicyLayout = () => {
  return (
    <>
      <section className="flex min-h-screen flex-1 bg-black">
        <Outlet />

      </section>
      <section className="bg-[black]">
      <Footer />

      </section>
    </>
  );
};

export default AppPolicyLayout;
