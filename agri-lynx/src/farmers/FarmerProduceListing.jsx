import React from 'react'
import ApiCommodityList from '../components/ApiCommodityList'
import avatar from "../assets/avatar.svg"
import crops from "../assets/crops.svg"
import Frame from "../assets/Frame.svg"
import dabba from "../assets/orders-icon.svg"
import car from "../assets/commute.svg"
import Analytics from "../assets/Analytics.svg"
import vector from "../assets/Vector.svg"

const FarmerProduceListing = () => {
    return (
        // <div className=' flex justify-center items-center h-dvh '>
        <div className='border-(--secondary)   items-center p-2   bg-(--primary) justify-items-center  absolute bottom-0 top-0 w-dvw  m-0 me-0'>
            <header className='flex  rounded-xl h-16 pt-2 bg-(--green) mt-5  w-100 text-xl'>
                <h1 className='  font-bold font-inter pt-1 ms-10 text-3xl '>Welcome ! Rishi! </h1>
                <div className='ms-5 pb-1 '> <img src={avatar} alt="avatar" /></div>
            </header>
            <div className='flex gap-2  font-inknut mt-8 text-2xl'>
                <h1>Add Your Produce </h1> <div><img src={crops} alt="crops" /></div>
            </div>
            <div className=''>
                <select className='bg-(--green) rounded-2xl p-1 text-1xl font-inter font-bold ps-3 mt-6 h-10 w-50 border-e-4 border-b-4 border-(--secondary)' name='user' > <img src={vector} alt="vector" />
                    <option value="commodity">Select Commidity</option>
                    <option value="commodity">Select Commidity</option>
                    <option value="commodity">Select Commidity</option>
                    <option value="commodity">Select Commidity</option>
                </select>
                {/* <div><ApiCommodityList /></div> */}
            </div>
            <div>
                <div className='mt-13  '>
                    <p className='font-bold font-inter text-lg'>MARKET PRICE RANGE ₹</p>
                    <input type="text " className=' mt-2 h-10 p-1 bg-(--teritary)  w-90' />
                </div>
                <div className='mt-5 '>
                    <p className='font-bold font-inter text-lg'>PRICE  ₹</p>
                    <input type="text " placeholder='Enter Price' className=' mt-2 h-10 p-2 bg-(--teritary) w-90 text-lg' />
                </div>
                <div className='mt-5 '>
                    <p className='font-bold font-inter text-lg'>QUANTITY</p>
                    <input type="text " placeholder='Enter Quantity' className=' mt-2 h-10 p-2 bg-(--teritary) w-90 text-lg' />
                </div>

                <div className='font-bold font-inter text-2xl w-25 ms-70 mt-10 rounded-xl p-1 bg-(--green) justify-items-center'>
                    <p className='flex gap-0.5'><img src={Frame} alt="frame" />Add</p>
                </div>
            </div>
            <footer className='flex  mt-25 h-16 rounded-3xl bg-(--green) w-100 py-2'>
                <div className='ms-7 me-7 h-12 w-12 bg-white rounded-xl p-1'><img src={crops} alt="crops" /></div>
                <div className='ms-7 me-7 h-12 w-12 bg-white rounded-xl p-0.5'><img src={dabba} alt="order-icon" /></div>
                <div className='ms-7 me-7 h-12 w-12 bg-white rounded-xl p-1 pt-1.5'><img src={car} alt="commute" /></div>
                <div className='ms-7 me-7 h-12 w-12 bg-white rounded-xl p-1 pt-2'><img src={Analytics} alt="analytics" /></div>
            </footer>
        </div>

        // </div>
    )
}

export default FarmerProduceListing
