import { Routes, Route } from "react-router-dom";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import Dashboard from "../pages/dashboard/Dashboard";
import MOPTroDashboard from "../pages/dashboard/MOPTroDashboard";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<MOPTroDashboard />} />
      <Route path="/dashboard/old" element={<Dashboard />} />
    </Routes>
  );
}