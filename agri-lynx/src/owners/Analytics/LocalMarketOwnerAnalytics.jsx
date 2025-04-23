import React, { useState, useEffect, useContext } from 'react';
import Avatar from '../../Assests/Avatar.svg'
import product from '../../Assests/product.svg'
import ordericon from '../../Assests/ordericon.svg'
import logistic from '../../Assests/logistic.svg'
import analytics from '../../Assests/analytics.svg'
import Vector1 from '../../Assests/Vector1.svg'
import { Link, useNavigate } from "react-router-dom";
import OwnerContext from '../context/OwnerContext'
import Footer from '../ProductList/Footer';
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
         
      </div>
      <nav className='flex items-center justify-center flex-col mt-7'>
        <div>
          <h1 className='text-2xl font-serif font-bold font-stretch-150% inline-block space-x-5'>Your Analytics</h1>
          <img className='inline-block -mt-2 ml-1.5' src={analytics} alt='Assests' />
        </div>
      </nav>
      <nav className='flex items-center justify-center  me-60'>
        <div className=' flex-shrink-0 bg-(--green)  w-[160px] text-xl mt-5 ml-5  border-2 border-black p-1 px- py-1 rounded-lg'>
          <h1 className='font-black text-center'>MARKET PRICE</h1>
        </div>
      </nav>

      <div className='flex items-center justify-center h-[66dvh]'>
        <div className=" flex items-center w-100 h-[350px] mt-4">
          <embed src="https://www.agmarknet.gov.in" href='https://www.agmarknet.gov.in' height="100%" width="100%" className="rounded-md bg-(--green)" />
        </div>
      </div>
       

       <div className='ms-6' ><Footer /></div>




    </>


  )
}

export default LocalMarketOwnerAnalytics
