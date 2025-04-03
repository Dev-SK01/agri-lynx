import React, { useContext, useEffect } from "react";
import Registration from "./pages/Registration";
import RegistrationContext from "./registration/context/RegistrationContext";
import { ToastContainer, Slide } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import FarmerDashboard from "./farmers/FarmerDashboard";
import ProctedRoute from "./ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import {
  BadgeCheck,
  CircleAlert,
  MessageCircleWarningIcon,
} from "lucide-react";
import Loader from "./utils/Loader";
import { FarmerContextProvider } from "./farmers/context/FarmerContext";
import FarmerProfile from "./farmers/components/FarmerProfile";
import UpdateProduce from "./farmers/components/UpdateProduce";
import FarmerOrders from "./farmers/FarmerOrders";
import FarmerOrderDetails from "./farmers/components/FarmerOrderDetails";
import FarmerAnalytics from "./farmers/FarmerAnalytics";

function App() {
  const { userData, isOtpVerified, isLoading, setUserData } =
    useContext(RegistrationContext);

  useEffect(() => {
    // localStorage userData for
    const localUserData = JSON.parse(localStorage.getItem("userData"));
    setUserData(localUserData);
    console.log("Done.");
  }, []);

  return (
    <>
      <FarmerContextProvider>
        <Routes>
          <Route
            index
            element={userData ? <Dashboard /> : <Registration />}
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          {/* procted Route */}
          <Route element={<ProctedRoute />}>
            {/* farmer Routes */}
            <Route path="farmerdashboard" element={<FarmerDashboard />} />
            <Route path="farmerprofile" element={<FarmerProfile />} />
            <Route path="updateproduce">
              <Route path=":listingId" element={<UpdateProduce />} />
            </Route>
            <Route path="farmerorders" element={<FarmerOrders />} />
            <Route path="farmerorderdetails">
              <Route path=":orderId" element={<FarmerOrderDetails />}/>
            </Route>
            <Route path="farmeranalytics" element={<FarmerAnalytics />} />
            {/* local market Routes */}
            <Route path="localmarketdashboard" element={<FarmerDashboard />} />
            {/* Loginstics Routes */}
            <Route path="logisticdashboard" element={<FarmerDashboard />} />
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
            case "warning":
              return <MessageCircleWarningIcon className="stroke-yellow-500" />;
            default:
              return null;
          }
        }}
      />
    </>
  );
}

export default App;
