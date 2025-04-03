import React from 'react'
import crops from "../assets/crops.svg";
import dabba from "../assets/orders-icon.svg";
import car from "../assets/commute.svg";
import Analytics from "../assets/Analytics.svg";


const Footer = () => {
  return (
    <>
      <footer className="flex w-dvw justify-center h-[15dvh]">
          <div className=" flex h-16 rounded-3xl bg-(--green) w-100 py-2 absolute bottom-4 justify-center">
            <div className="ms-7 me-7 h-12 w-12 bg-white rounded-xl p-1">
              <img src={crops} alt="crops" />
            </div>
            <div className="ms-7 me-7 h-12 w-12 bg-white rounded-xl p-0.5">
              <img src={dabba} alt="order-icon" />
            </div>
            <div className="ms-7 me-7 h-12 w-12 bg-white rounded-xl p-1 pt-1.5">
              <img src={car} alt="commute" />
            </div>
            <div className="ms-7 me-7 h-12 w-12 bg-white rounded-xl p-1 pt-2">
              <img src={Analytics} alt="analytics" />
            </div>
          </div>
        </footer>
    </>
  )
}

export default Footer
