import React from "react";
import avatar from "../assets/avatar.svg";

import search from "../assets/search.svg";


import LogisticsDetails from "../components/LogisticsDetails";
import Footer from "../components/Footer";

const FarmerLogisticInformation = () => {
  return (
    <>
      <div className="flex-col border-(--secondary)   items-center p-2   bg-(--primary) justify-center justify-items-center  bottom-0 top-0 w-[100%] h-[100%]  m-0 me-0 fixed">
        <nav className="flex-col w-dvw justify-items-center h-[8dvh] pe-3">
          <header className="flex justify-center rounded-xl h-16 pt-2  bg-(--green) mt-5  w-[90dvw] text-xl   top-2">
            <h1 className=" flex font-bold font-inter pt-2  pb-2 ps-2 text-2xl    justify-center w-[80%]">
              Rishi
            </h1>
            <div className=" pb-1  ">
              <img src={avatar} alt="avatar" />
            </div>
          </header>
        </nav>

        <div className="flex-col w-[100%] mt-3 h-[15dvh] justify-items-center pe-3  ">
          <div className=" flex-col justify-items-center bg-(--green) mt-5 border-(--secondary) p-0.5 border-2 rounded-xl   w-40 ">
            <p className="font-inter font-bold text-2xl">Logistics</p>
          </div>
          <div className="flex justify-center  bg-gray-200 h-10 p-1 rounded-2xl w-90 mt-5 font-inter pe-3 ">
            <img
              className="flex ms-4  pb-2 size-10"
              src={search}
              alt="search"
            />
            <input
              className=" w-70 justify-items-center text-2xl  font-inter"
              type="text"
              placeholder="      Search Logistics "
            />
          </div>
        </div>
        <div className="flex-col justify-items-center h-[60dvh] overflow-y-scroll w-[95dvw] ">
          <LogisticsDetails />
        </div>
          <Footer />
      </div>
    </>
  );
};

export default FarmerLogisticInformation;
