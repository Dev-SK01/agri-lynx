import React, { useState, useEffect, useContext } from 'react';
import Avatar from '../../Assests/Avatar.svg'
import product from '../../Assests/product.svg'
import ordericon from '../../Assests/ordericon.svg'
import logistic from '../../Assests/logistic.svg'
import analytics from '../../Assests/analytics.svg'
import Vector1 from '../../Assests/Vector1.svg'
import { Link, useNavigate } from "react-router-dom";
import OwnerContext from '../context/OwnerContext'
const LocalMarketOwnerAnalytics = () => {
  const navigate = useNavigate();
  const { OwnerData } = useContext(OwnerContext);
  const handleAvatarClick = () => {
    navigate("/OwnerDashBoard");
  };
  return (
    <>
      <div className="flex items-center justify-between flex-col ">
        {/* Header */}
        <header className='flex rounded-xl h-16 pt-2 bg-(--green) mt-5 w-100 text-xl'>
          <Link to="/">
            <h1 className='font-bold font-inknut pt-1 ms-10 items-center'>
              {OwnerData?.name}!
            </h1>
          </Link>
          <div className='ms-83 pb-1 fixed'>
            <img src={Avatar} onClick={handleAvatarClick} alt="avatar" />
          </div>
        </header>
        {/* Footer */}
        <footer className="bg-(--green) h-[8vh] rounded-[30px] mt-4 flex items-center justify-evenly py-4 fixed bottom-3">
          <Link to="/localmarketdashboard">
            <div className='ms-7 me-7 h-12 w-12 bg-white rounded-xl p-1'>
              <img src={product} alt="product" />
            </div>
          </Link>
          <Link to="/myorder">
            <div className="ms-7 me-7 h-12 w-12 bg-white rounded-xl p-1">
              <img src={ordericon} alt="orderIcon" />
            </div>
          </Link>
          <div className='ms-7 me-7 h-12 w-12 bg-white rounded-xl p-1 pt-1'>
            <img src={logistic} alt="logistic" />
          </div>


          <div className='ms-7 me-7 h-12 w-12 bg-white rounded-xl p-1 pt-1'>
            <img src={analytics} alt="analytics" />
          </div>

        </footer>
      </div>
      <nav className='flex items-center justify-center flex-col mt-30'>
        <div>
          <h1 className='text-2xl font-serif font-bold font-stretch-150% inline-block space-x-5'>Your Analytics</h1>
          <img className='inline-block -mt-2 ml-1.5' src={analytics} alt='Assests' />
        </div>
      </nav>
      <nav className='flex items-center justify-center me-60'>
        <div className=' bg-(--green)  w-40 text-xl mt-5 ml-5  border-2 border-black p-1 px- py-1 rounded-lg'>
          <h1 className='font-black'>MARKET PRICE</h1>
        </div>
      </nav>

      <div className='flex items-center justify-center'>
        <div className=" flex items-center w-100 h-[350px] mt-4">
          <embed src="https://www.agmarknet.gov.in" height="100%" width="100%" className="rounded-md bg-(--green)" />
        </div>
      </div>




    </>


  )
}

export default LocalMarketOwnerAnalytics
