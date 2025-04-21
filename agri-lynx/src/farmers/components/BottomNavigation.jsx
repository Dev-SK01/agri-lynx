import React from "react";
import cropIcon from "../../assets/crop.svg";
import analyticsIcon from "../../assets/analytics.svg";
import logisticIcon from "../../assets/logistic.svg";
import orderIcon from "../../assets/order.svg";
import { Link } from "react-router-dom";

const BottomNavigation = () => {
  return (
    <footer className="bg-(--green) h-[8vh] w-[95%] rounded-[30px] mt-4 flex items-center justify-evenly py-4">
      <Link to="/">
        <div className="h-[50px] w-[50px] bg-(--primary) rounded-sm flex items-center justify-center">
          <img src={cropIcon} alt="cropIcon" className="h-[40px] w-[40px] " />
        </div>
      </Link>
      <Link to="/farmerorders">
        <div className="h-[50px] w-[50px] bg-(--primary) rounded-sm">
          <img src={orderIcon} alt="orderIcon" className="h-[50px] w-[50px]" />
        </div>
      </Link>
      <Link to="/farmerlogistics">
        <div className="h-[50px] w-[50px] bg-(--primary) rounded-sm flex items-center justify-center">
          <img
            src={logisticIcon}
            alt="logisticIcon"
            className="h-[40px] w-[40px]"
          />
        </div>
      </Link>
      <Link to="/farmeranalytics">
        <div className="h-[50px] w-[50px] bg-(--primary) rounded-sm flex items-center justify-center">
          <img
            src={analyticsIcon}
            alt="analyticsIcon"
            className="h-[40px] w-[40px]"
          />
        </div>
      </Link>
    </footer>
  );
};

export default BottomNavigation;
