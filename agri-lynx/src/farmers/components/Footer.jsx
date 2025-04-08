import React from 'react'
import crops from "../../assets/crops.svg";
import dabba from "../../assets/orders-icon.svg";
import car from "../../assets/commute.svg";
import Analytics from "../../assets/Analytics.svg";


const Footer = () => {
  return (
    <>
      <footer className="flex w-95 mt-4 mb-0.5 h-[8dvh] px-3">
          <div className=" flex flex-row justify-evenly  items-center rounded-3xl bg-(--green) w-100 ">
            <div className="h-12 w-12 bg-white rounded-xl p-1 ps-1.5 ">
              <img src={crops} alt="crops"className=''/>
            </div>
            <div className="  h-12 w-12 bg-white rounded-xl  p-0.5">
              <img src={dabba} alt="order-icon" />
            </div>
            <div className="  h-12 w-12 bg-white rounded-xl p-1 ps-1.5 pt-1.5">
              <img src={car} alt="commute" />
            </div>
            <div className=" h-12 w-12 bg-white rounded-xl p-1 ps-1.5 pt-2">
              <img src={Analytics} alt="analytics" />
            </div>
          </div>
        </footer>
    </>
  )
}

export default Footer
