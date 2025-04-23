import React from 'react'
import analytics from '../../Assest/analytics.svg';
import logistic from '../../Assest/logistic.svg';
import ordericon from '../../Assest/ordericon.svg';
import product from '../../Assest/product.svg';
import { Link, useNavigate } from "react-router-dom";
const Footer = () => {
  return (
    <>
     <footer className="bg-(--green) h-[8vh] w-[95%] rounded-[30px] mt-4 flex items-center justify-evenly py-4">
            <Link to="/">
              <div className="h-[50px] w-[50px] bg-(--primary) rounded-sm flex items-center justify-center">
                <img src={product} alt="cropIcon" className="h-[40px] w-[40px] " />
              </div>
            </Link>
            <Link to="/myorder">
              <div className="h-[50px] w-[50px] bg-(--primary) rounded-sm">
                <img src={ordericon} alt="orderIcon" className="h-[50px] w-[50px]" />
              </div>
            </Link>
            
              <div className="h-[50px] w-[50px] bg-(--primary) rounded-sm flex items-center justify-center">
                <img
                  src={logistic}
                  alt="logisticIcon"
                  className="h-[40px] w-[40px]"
                />
              </div>
          
            <Link to="/OwnerAnalytics">
              <div className="h-[50px] w-[50px] bg-(--primary) rounded-sm flex items-center justify-center">
                <img
                  src={analytics}
                  alt="analyticsIcon"
                  className="h-[40px] w-[40px]"
                />
              </div>
            </Link>
          </footer>
    </>
  )
}

export default Footer
