import { Route, Routes } from "react-router-dom";

// Private route
import AuthLayout from "../components/auth/AuthLayout";
import { Sign_In, Sign_Up } from "../components/auth/pages";

// publick route
import DashboardLayout from "../components/dashboard/DashboardLayout";
import {
  AdminDashboard,
  ContactQuery,
  ContactQueryDetailed,
  Mail,
  NewMail,
  NewNotifications,
  Notifications,
  NotificationsPush,
  PushMail,
  Reports,
  ResetPassword,
  SelfProfile,
  UserProfile,
  Users,
  FeedBack
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
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/contact-query" element={<ContactQuery />} />
        <Route
          path="/contact-query-detailed"
          element={<ContactQueryDetailed />}
        />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/push-notifications" element={<NotificationsPush />} />
        <Route path="/mail" element={<Mail />} />
        <Route path="/push-mail" element={<PushMail />} />
        <Route path="/self-profile" element={<SelfProfile />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/new-notifications" element={<NewNotifications />} />
        <Route path="/new-mail" element={<NewMail />} />
        <Route path="/feedback" element={<FeedBack />} />
       
      </Route>
    </Routes>
  );
};

export default routes;
