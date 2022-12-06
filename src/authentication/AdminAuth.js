import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AdminAuth = () => {
  const location = useLocation();
  const admin = true;

  if (!admin) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default AdminAuth;
