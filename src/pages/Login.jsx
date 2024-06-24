import React, { useEffect, useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { tokenAPI, userAccAPI } from "../redux/api/api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (username === "" || username === null) {
        toast.warning("Please Enter Username");
      } else if (password === "" || password === null) {
        toast.warning("Please Enter Password");
      } else {
        const response = await userAccAPI().login(username, password);
        if (response.data.code === 0) {
          toast.error(`${response.data.message}!`);
        } else {
          const response = await tokenAPI().getToken();
          if (response.status === 200) {
            toast.success("Success");
            sessionStorage.setItem(
              "token",
              JSON.stringify(response.data.data.authToken)
            );
            sessionStorage.setItem(
              "expiry",
              JSON.stringify(response.data.data.tokenExpiry)
            );
            sessionStorage.setItem("username", username);
            navigate("/");
          }
        }
      }
    } catch (err) {
      sessionStorage.clear();
      toast.error("Oops! Error Occurred In Getting Token.");
      sessionStorage.setItem(
        "errGetToken",
        JSON.stringify(`${Date().toLocaleString()} ${err}`)
      );
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center tracking-wider">
      <div className="w-11/12 sm:w-5/12 md:w-3/12 text-sm glass">
        <div className="w-full text-center my-3">
          <h2 className="text-2xl text-black font-medium">Login</h2>
        </div>

        <form className="my-2" onSubmit={handleLogin}>
          <div className="flex border-b-2 mx-5 my-7 py-1">
            <input
              type="text"
              className="w-11/12 bg-transparent outline-none text-center"
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
              // required
            />
            <div className="w-2/12 flex items-center justify-center">
              <FaUser className="text-xl" />
            </div>
          </div>

          <div className="flex border-b-2 mx-5 my-7 py-1">
            <input
              type="password"
              className="w-11/12 bg-transparent outline-none text-center"
              placeholder="Enter your Password"
              onChange={(e) => setPassword(e.target.value)}
              // required
            />
            <div className="w-2/12 flex items-center justify-center">
              <FaLock className="text-xl" />
            </div>
          </div>

          <div className="mx-5 my-7 py-2">
            <button className="bg-black w-full h-[35px] rounded-sm text-white">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
