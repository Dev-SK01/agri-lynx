import React, { useContext } from "react";
import Registration from "./pages/Registration";
import RegistrationContext from "./registration/context/RegistrationContext";
import { ToastContainer, Slide } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import FarmerDashboard from "./farmers/FarmerDashboard";
import ProctedRoute from "./ProtectedRoute";
import Dashboard from "./pages/Dashboard";

function App() {
  const { userData } = useContext(RegistrationContext);
  return (
    <>
      <Routes>
        <Route
          index
          element={userData ? <Dashboard /> : <Registration />}
        ></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        {/* procted Route */}
        <Route element={<ProctedRoute />}>
          <Route path="farmerdashboard" element={<FarmerDashboard />}></Route>
          <Route
            path="localmarketdashboard"
            element={<FarmerDashboard />}
          ></Route>
          <Route path="logisticdashboard" element={<FarmerDashboard />}></Route>
        </Route>
      </Routes>

      {/* toast container */}
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </>
  );
}

export default App;
