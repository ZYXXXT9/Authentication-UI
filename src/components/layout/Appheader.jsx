import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Appheader = () => {
  const [displayusername, displayusernameupdate] = useState("");
  const [showmenu, showmenuupdateupdate] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login") {
      showmenuupdateupdate(false);
    } else {
      showmenuupdateupdate(true);
      let username = sessionStorage.getItem("username");
      if (username === "" || username === null) {
        navigate("/login");
      } else {
        displayusernameupdate(username);
      }
    }
  }, [location]);
  return (
    <div>
      {showmenu && (
        <div className="header">
          <h1>{displayusername}</h1>
          <Link to={"/"}>Home</Link>
          <Link to={"/settings"}>Settings</Link>
          <Link to={"/login"}>Logout</Link>
        </div>
      )}
    </div>
  );
};

export default Appheader;
