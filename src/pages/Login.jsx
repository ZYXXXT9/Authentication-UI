import React, { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

//utilities

function Login(props) {
  // const userAccountId = JSON.parse(localStorage.getItem("userAccountId"));

  const [userName, setUserAccountId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here (e.g., authentication)
    navigate("/dashboard");
  };

  // const saveToLocalStorage = (props) => {
  //   const { userAccountId } = props;

  //   localStorage.setItem("userAccountId", JSON.stringify(userAccountId));
  // };

  // const handleLogin = async (e) => {
  //   try {
  //     const response = await PI.post(
  //       `api/useraccount/validatelogin?userName=${userName}&password=${password}`
  //     );
  //     if (response.status === 200) {
  //       if (response.data.code === 0)
  //         toast.error(<ErrMsg msg={`${response.data.message}!`} />);
  //     } else {
  //       saveToLocalStorage(response.data.document);
  //       window.location.reload(true);
  //     }
  //   } catch (err) {
  //     if (String(err).includes("401")) {
  //       window.location.reload();
  //     } else {
  //       localStorage.setItem(
  //         "errLogIn",
  //         JSON.stringify(`${Date().toLocaleString()} ${err}`)
  //       );
  //       toast.error(
  //         <ErrMsg msg="Oops! Error Occurred in Logging In" err={String(err)} />
  //       );
  //     }
  //   }
  // };

  // if (userAccountId) {
  //   return <Navigate to={redirectTo ? redirectTo : "/dashboard"} />;
  // }

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
              placeholder="Enter your Username"
              onChange={(e) => setUserAccountId(e.target.value)}
              required
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
              required
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
}

export default Login;
