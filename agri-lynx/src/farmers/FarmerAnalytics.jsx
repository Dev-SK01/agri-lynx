import React from 'react'
import Navigation from './components/Navigation'
import analyticsImg from "../assets/analytics.svg"
const FarmerAnalytics = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="w-[95%] h-[17vh] mt-4">
        <Navigation />
        <div className='flex items-center justify-center mt-4'>
        <h1 className='font-inknut text-2xl'>Your Analytics</h1>
         <img src={analyticsImg} alt="analytics" className='h-[30px] w-[30px] ml-2'/>
        </div>
      </div>
    </div>
  )
}

export default FarmerAnalytics