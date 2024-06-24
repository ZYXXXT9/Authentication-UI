import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  // const location = useLocation();

  const navigate = useNavigate();
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  useEffect(() => {
    if (location.pathname !== "/login") {
      let username = sessionStorage.getItem("username");
      if (username === "" || username === null) {
        navigate("/login");
      }
    }
  }, [location]);

  return (
    <div className="flex justify-center justify-items-center">
      {!isLoginPage && <Sidebar />}
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Layout;
