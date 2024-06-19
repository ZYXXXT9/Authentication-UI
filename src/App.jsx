import React, { Suspense, lazy, useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Loading from "./components/Loading/Loading";

//pages
const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Router>
        <Suspense fallback={<Loading />}>
          {loading ? (
            <Loading />
          ) : (
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/" element={<Login />} />
            </Routes>
          )}
        </Suspense>
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      ></ToastContainer>
    </>
  );
}

export default App;
