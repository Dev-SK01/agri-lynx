import React, { useContext, useEffect, useState } from "react";
import Registration from "./pages/Registration";
import RegistrationContext from "./registration/context/RegistrationContext";
import { ToastContainer, Slide, toast } from "react-toastify";
import Toast from "./utils/toast";
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
import FarmerContext from "./farmers/context/FarmerContext";
import FarmerProfile from "./farmers/components/FarmerProfile";
import UpdateProduce from "./farmers/components/UpdateProduce";
import FarmerOrders from "./farmers/FarmerOrders";
import FarmerOrderDetails from "./farmers/components/FarmerOrderDetails";
import FarmerAnalytics from "./farmers/FarmerAnalytics";
import FarmerProduceListing from "./farmers/components/FarmerProduceListing";
import FarmerLogisticInformation from "./farmers/FarmerLogisticInformation";
import LogisticsBooking from "./farmers/components/LogisticsBooking";
import LocalMarketOwnerRegistration from "./owners/LocalMarketOwnerRegistration";
import DashBoard from "./logistics/DashBoard/DashBoard";
import LocalMarketOwnerProductList from "./owners/LocalMarketOwnerProductList";
import LocalMarketOwnerMyOrder from "./owners/LocalMarketOwnerMyOrder";
import Logistic from "./logistics/Logistic";
import { LogisticContextProvider } from "./logistics/context/LogisticContext";
import ProductHeader from "./owners/ProductList/ProductHeader";
import OrderCheckOutPage from "./logistics/OrderManagement/OrderCheckOutPage";
import LogisticHome from "./logistics/OrderManagement/LogisticHome";
import OrderDetails from "./logistics/OrderManagement/OrderDetails";
import LocalMarketOwnerDashboard from "./owners/DashBoard/LocalMarketOwnerDashboard";
import OwnerDashBoard from "./owners/OwnerDashBoard";
import LocalMarketOwnerAnalytics from "./owners/Analytics/LocalMarketOwnerAnalytics";
import Analytics from "./owners/Analytics";
import OrderMange from "./owners/OrderCheckOut/OrderMange";
import OrderCheckOut from "./owners/OrderCheckOut";
import { OwnerContextProvider } from "./owners/context/OwnerContext";

function App() {
  // context
  const { userData, isOtpVerified, isLoading, setUserData } =
    useContext(RegistrationContext);
  const { setFarmerData, setIsContentLoading } = useContext(FarmerContext);

  const localUserData = JSON.parse(localStorage.getItem("userData"));

  const fetchFarmerDataById = async (farmerId) => {
    try {
      setIsContentLoading(true);
      console.log("FarmerID:", farmerId);
      const response = {
        farmerId: "s63hdb38dyb9ae4",
        name: "Prasanth Muthusamy",
        email: "prasanthfarmer@gmail.com",
        farmerId: "s63hdb38dyb9ae4",
        name: "Prasanth Muthusamy",
        email: "prasanthfarmer@gmail.com",
        phoneNumber: "8760254168",
        alternateNumber: "7094295944",
        address: "123,ucer shop,ucer street",
        village: "MettuPatti",
        postOffice: "Pullangudi",
        taluk: "kalaiyarkovil",
        district: "Ramanathapuram",
        pincode: "630661",
        state: "TAMIL NADU",
        ifscCode: "IOBA0000876",
        accountNumber: "187200023992",
        accountHolderName: "Prasanth",
        bankName: "Indian Overseas Bank",
        bankBranch: "Ramanathapuram",
        upiId: "prasanth@okaxis",
        produceList:[]
      };
      if (response) {
        Toast(toast.success, "Data Fetched Successfully");
        setFarmerData(response);
      } else {
        Toast(toast.error, "Failed to Fetch Data");
      }
    } catch (err) {
      Toast(toast.error, err.message);
    } finally {
      setTimeout(() => setIsContentLoading(false), 2000);
    }
  };

  useEffect(() => {
    setUserData(localUserData);
    console.log(localUserData && "Oned.");
    if (localUserData?.userType === "farmer") {
      fetchFarmerDataById(localUserData?.userId);
    }
  }, []);

  return (
    <>
      <LogisticContextProvider>
        <OwnerContextProvider>
          <Routes>
            <Route
              index
              element={userData ? <Dashboard /> : <Registration />}
            />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />

            <Route element={<ProctedRoute />}>
              {/* farmer routes */}
              <Route path="farmerdashboard" element={<FarmerDashboard />} />
              <Route path="farmerprofile" element={<FarmerProfile />} />
              <Route path="updateproduce">
                <Route path=":listingId" element={<UpdateProduce />} />
              </Route>
              <Route path="addproduce" element={<FarmerProduceListing />} />
              <Route path="farmerorders" element={<FarmerOrders />} />
              <Route path="farmerorderdetails">
                <Route path=":orderId" element={<FarmerOrderDetails />} />
              </Route>
              <Route
                path="farmerlogistics"
                element={<FarmerLogisticInformation />}
              />
              <Route path="farmerlogisticsbooking">
                <Route path=":partnerId" element={<LogisticsBooking />} />
              </Route>
              <Route path="farmeranalytics" element={<FarmerAnalytics />} />

              {/* local market routes */}
              <Route
                path="localmarketdashboard"
                element={<LocalMarketOwnerProductList />}
              />
              <Route path="myorder" element={<LocalMarketOwnerMyOrder />} />
              <Route path="OwnerDashBoard" element={<OwnerDashBoard />}></Route>
              <Route path="OwnerAnalytics" element={<Analytics />}></Route>
              <Route path="/" element={<ProductHeader />} />
              <Route path="/order/:listingId" element={<OrderCheckOut />} />

              {/* logistics routes */}
              <Route path="logisticdashboard" element={<LogisticHome />} />
              <Route path="DashBoard" element={<DashBoard />} />
              <Route path="checkoutPage" element={<OrderCheckOutPage />} />
              <Route
                path="/checkoutPage/:orderId"
                element={<OrderCheckOutPage />}
              />
              <Route path="orderdetails">
                <Route path=":orderId" element={<OrderDetails />} />
              </Route>
            </Route>
          </Routes>
        </OwnerContextProvider>
      </LogisticContextProvider>

      {isLoading && <Loader />}

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
