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
import { BadgeCheck, CircleAlert } from "lucide-react";
import Loader from "./utils/Loader";
import { FarmerContextProvider } from "./farmers/context/FarmerContext";
function App() {
  const { userData, isOtpVerified, isLoading } =
    useContext(RegistrationContext);
  return (
    <>
      <FarmerContextProvider>
        <Routes>
          <Route
            index
            // element={userData ? <Dashboard /> : <Registration />}
            element={<FarmerDashboard />}
          ></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          {/* procted Route */}
          <Route element={<ProctedRoute />}>
            <Route 
              path="farmerdashboard" 
              element={<FarmerDashboard />}
            ></Route>
            <Route
              path="localmarketdashboard"
              element={<FarmerDashboard />}
            ></Route>
            <Route
              path="logisticdashboard"
              element={<FarmerDashboard />}
            ></Route>
          </Route>
        </Routes>
      </FarmerContextProvider>
      {isLoading && <Loader />}
      {/* toast container */}
      <ToastContainer
        position={isOtpVerified ? "bottom-center" : "top-center"}
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        limit={1}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable={true}
        theme="light"
        transition={Slide}
        icon={({ type }) => {
          switch (type) {
            case "error":
              return <CircleAlert className="stroke-red-500" />;
            case "success":
              return <BadgeCheck className="stroke-green-500" />;
            default:
              return null;
          }
        }}
      />
    </>
  );
}

export default App;
