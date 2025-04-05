
import React, { useContext } from 'react'
import avatar from "../../Assest/avatar.svg"
import analytics from '../../Assest/analytics.svg';
import logistic from '../../Assest/logistic.svg';
import ordericon from '../../Assest/ordericon.svg';
import product from '../../Assest/product.svg'; 
import LogisticContext from '../context/LogisticContext';
import { Button } from '@/components/ui/button';

const OrderCheckOutPage = () => {
    const {LogisticOrders,LogisticData,}=useContext(LogisticContext)
    return (
        <>
            <div className="flex items-center justify-center flex-col ">
                {/* Header */}
                <header className='flex rounded-xl h-16 pt-2 bg-(--green) mt-5 w-100 text-xl '>
                    <h1 className='font-bold font-inter pt-1 ms-10 text-1xl'>
                        Welcome {LogisticData.name} !
                    </h1>
                    <div className='ms-83 pb-1 fixed'>
                        <img src={avatar} alt="avatar" />
                    </div>

                </header>
                {/* footer */}
                <footer className="bg-(--green) h-[8vh] rounded-[30px] mt-4 flex items-center justify-evenly py-4 fixed bottom-3">
                    <div className='ms-7 me-7 h-12 w-12 bg-white rounded-xl p-1'>
                        <img src={product} alt="product" />
                    </div>
                    <div className='ms-7 me-7 h-12 w-12 bg-white rounded-xl p-0.5'>
                        <img src={ordericon} alt="ordericon" />
                    </div>
                    <div className='ms-7 me-7 h-12 w-12 bg-white rounded-xl p-1 pt-1.5'>
                        <img src={logistic} alt="logistic" />
                    </div>
                    <div className='ms-7 me-7 h-12 w-12 bg-white rounded-xl p-1 pt-2'>
                        <img src={analytics} alt="analytics" />
                    </div>
                </footer>
            </div>
        </>
    )
}

export default OrderCheckOutPage
