import { Route, Routes } from "react-router-dom";

// Private route
import AuthLayout from "../components/auth/AuthLayout";
import { Sign_In, Sign_Up } from "../components/auth/pages";

// publick route
import DashboardLayout from "../components/dashboard/DashboardLayout";
import {
  AdminDashboard,
  ContactQuery,
  Mail,
  Notifications,
  Reports,
  Users,
} from "../components/dashboard/pages";

const routes = () => {
  return (
    <Routes>
      {/* public routes */}
      <Route path="/sign-in" element={<AuthLayout />}>
        <Route index element={<Sign_In />} />
      </Route>
      <Route path="/sign-up" element={<AuthLayout />}>
        <Route index element={<Sign_Up />} />
      </Route>

      {/* private routes */}
      <Route path="/" element={<DashboardLayout />}>
        <Route path="/" index element={<AdminDashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/contact-query" element={<ContactQuery />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/mail" element={<Mail />} />
      </Route>
    </Routes>
  );
};

export default routes;
