import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <div className="flex justify-center justify-items-center">
      {!isLoginPage && <Sidebar />}
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Layout;
