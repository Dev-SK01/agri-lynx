import React, { useContext } from 'react';
import LogisticContext from './context/LogisticContext';
import LogisticHome from './OrderManagement/LogisticHome';
import OrderCheckOutPage from './OrderManagement/OrderCheckOutPage';
import VerificationOTP from './OrderManagement/VerificationOTP';
import OrderDetails from './OrderManagement/OrderDetails';
const Logistic = () => {
  const { currentPage, showOtpPopup } = useContext(LogisticContext);
  console.log(currentPage);
  
  return (
    <>
      {currentPage === "home" && <LogisticHome />}
      {currentPage === "checkout" && <OrderCheckOutPage />}
      {showOtpPopup && <VerificationOTP />} 
      
       {/* <OrderDetails/> */}
    </>
  );
};

export default Logistic;
