import React, { useContext, useState } from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import avatar from "../../Assest/avatar.svg";
import analytics from '../../Assest/analytics.svg';
import logistic from '../../Assest/logistic.svg';
import ordericon from '../../Assest/ordericon.svg';
import product from '../../Assest/product.svg';
import LogisticContext from '../context/LogisticContext';
import { Button } from '@/components/ui/button';
import calendar from "../../Assest/calendar.svg";
import { Link } from "react-router-dom";
import Logistic from '../Logistic';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import VerificationOTP from './VerificationOTP'; // Import the OTP verification component

const OrderDetails = () => {
    const {
        LogisticOrders,
        LogisticData,
        orderStatus,
        setOrderStatus,
        setShowOtpPopup,
        showOtpPopup,
        updateOrderStatus
    } = useContext(LogisticContext);
    const [isStatusUpdated, setIsStatusUpdated] = useState(false);
    const { orderId } = useParams();
    const currentOrder = LogisticOrders.find(order => order.orderId === orderId);
    console.log(orderId);
    console.log(currentOrder)

    const handleStatusChange = (value) => {

        if (value === 'Delivered') {
            setShowOtpPopup(true);
        } else {
            updateOrderStatus(orderId, value);
            setOrderStatus(value);
        }
    };





    const navigate = useNavigate();
    const handleAvatarClick = () => {
        navigate('/DashBoard');
    };


    return (
        <>
            <div className="flex justify-center items-center flex-col ">
                {/* Header */}
                <header className='flex rounded-xl h-16 pt-2 bg-(--green) mt-5 w-100 text-xl'>
                    <Link to="/">
                        <h1 className='font-bold font-inknut pt-1 ms-10 items-center'>
                            {LogisticData?.name}!
                        </h1>
                    </Link>
                    <div className='ms-83 pb-1 fixed'>
                        <img src={avatar} onClick={handleAvatarClick} alt="avatar" />
                    </div>
                </header>
                <div className='overflow-scroll scrollbar-hide h-[75vh] mt-4 '>
                    <div className="w-80 mt-4 text-center bg-(--green) rounded-sm  ">
                        <h1 className="font-bold text-[1.2rem] font-inter">
                            #{currentOrder?.orderId?.toUpperCase()}
                        </h1>
                        <div className="text-center flex items-center justify-center">
                            <img
                                src={calendar}
                                alt="calander"
                                className="h-[25px] w-[25px]"
                            />
                            <span className="font-inter ml-2">{currentOrder?.orderDate}</span>
                        </div>
                    </div>

                    <div className="flex justify-center mt-5">
                        <Select
                            onValueChange={(value) => handleStatusChange(value)}
                            disabled={isStatusUpdated}
                        >
                            <SelectTrigger className="w-[200px] font-inter">
                                <SelectValue placeholder={currentOrder.orderStatus} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Ordered">Ordered</SelectItem>
                                <SelectItem value="In-Transit">In-Transit</SelectItem>
                                <SelectItem value="Delivered">Delivered</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>


                    {/* order details */}
                    <div className='items-start'>
                        <div className="justify-items-start pb-2 border-b-1  border-b-green-300 ">
                            <div className="flex ">
                                <img src={ordericon} alt="orderImg" />
                                <h1 className="font-extrabold text-[1.4rem] mt-2 font-inter">
                                    ORDER DETAILS
                                </h1>
                            </div>
                            <div className="ml-12  " >
                                <div className=''>
                                    <span className="font-[600] font-inter">COMMODITY : <span>{currentOrder?.commodity}</span></span>
                                </div>

                                <div><span className="font-[600] font-inter">QUANTITY : <span>{currentOrder?.quantity}.KG</span></span></div>

                                <div><span className="font-[600] font-inter">PRICE : &#8377; <span>{currentOrder?.price}</span></span></div>

                                <div> <span className="font-[600] font-inter">COMMODITY PRICE : &#8377;{" "}<span>{currentOrder?.commodityPrice}</span></span></div>

                            </div>
                        </div>
                        {/* customer details */}
                        <div className=" pb-2 border-b-1 border-b-green-300  ">
                            <div className="flex">
                                <img src={avatar} alt="avatar" />
                                <h1 className="font-extrabold text-[1.4rem] mt-2 font-inter">
                                    CUSTOMER
                                </h1>
                            </div>
                            <div className="ml-12">
                                <span className="font-[600] font-inter">
                                    NAME : <span>{currentOrder?.customer?.name}</span>
                                </span>
                                <br />
                                <span className="font-[600] font-inter">
                                    NUMBER :{" "}
                                    <a href={`tel:+91${currentOrder?.customer?.phoneNumber}`}>
                                        +91<span>{currentOrder?.customer?.phoneNumber}</span>
                                    </a>
                                </span>
                                <br />
                                <span className="font-[600] font-inter">
                                    EMAIL : <span>{currentOrder?.customer?.email}</span>
                                </span>
                                <br />
                            </div>
                        </div>
                        {/* logistics details */}
                        {currentOrder?.logistics && (
                            <div className=" pb-2 border-b-1 border-b-green-300 ">
                                <div className="flex     ">
                                    <img src={avatar} alt="avatar" />
                                    <h1 className="font-extrabold text-[1.4rem] mt-2 font-inter ml-2">
                                        PICKUP FROM
                                    </h1>
                                </div>
                                <div className="ml-12">

                                    <span className="font-[600] font-inter">
                                        NAME : <span>{currentOrder?.logistics?.name}</span>
                                    </span>
                                    <br />
                                    <span className="font-[600] font-inter">
                                        NUMBER :{" "}
                                        <a
                                            href={`tel:+91${currentOrder?.logistics?.phoneNumber}`}
                                        >
                                            +91<span>{currentOrder?.logistics?.phoneNumber}</span>
                                        </a>
                                    </span>
                                    <br />
                                    <span className="font-[600] font-inter">
                                        EMAIL : <span>{currentOrder?.logistics?.email}</span>
                                    </span>
                                    <br />
                                    <span className="font-[600] font-inter">
                                        ADDRESS : <span>{currentOrder?.logistics?.address}</span>
                                    </span>
                                    <br />
                                    <span className="font-[600] font-inter">
                                        DISTRICT : <span>{currentOrder?.logistics?.district}</span>
                                    </span>
                                    <br />
                                    <span className="font-[600] font-inter">
                                        PINCODE : <span>{currentOrder?.logistics?.pincode}</span>
                                    </span>
                                    <br />

                                </div>
                            </div>
                        )}
                        {/* address details */}
                        <div className=" pb-2 border-b-1 border-b-green-300 ">
                            <div className="flex     ">
                                <img src={logistic} alt="avatar" />
                                <h1 className="font-extrabold text-[1.4rem] mt-2 font-inter ml-2">
                                    DELIVER TO
                                </h1>
                            </div>
                            <div className="ml-12">
                                <span className="font-[600] font-inter">
                                    ADDRESS : <span>{currentOrder?.customer?.address}</span>
                                </span>
                                <br />
                                <span className="font-[600] font-inter">
                                    DISTRICT : <span>{currentOrder?.customer?.district}</span>
                                </span>
                                <br />
                                <span className="font-[600] font-inter">
                                    PINCODE : <span>{currentOrder?.customer?.pincode}</span>
                                </span>
                                <br />
                            </div>
                        </div>
                    </div>

                </div>

                {/* footer */}
                <footer className="bg-(--green) h-[8vh] rounded-[30px] mt-4 flex items-center justify-evenly py-4 fixed bottom-3">
                    <Link to="/">
                        <div className='ms-7 me-7 h-12 w-12 bg-white rounded-sm p-1'>
                            <img src={product} alt="product" />
                        </div>
                    </Link>
                    <Link to="/checkoutPage">
                        <div className="ms-7 me-7 h-12 w-12 bg-white rounded-sm p-1">
                            <img src={ordericon} alt="orderIcon" />
                        </div>
                    </Link>
                    <div className='ms-7 me-7 h-12 w-12 bg-white rounded-sm p-1 pt-1'>
                        <img src={logistic} alt="logistic" />
                    </div>
                    <div className='ms-7 me-7 h-12 w-12 bg-white rounded-sm p-1 pt-1'>
                        <img src={analytics} alt="analytics" />
                    </div>

                </footer>
                {showOtpPopup && (<VerificationOTP orderId={orderId} />)}


            </div>
        </>
    )
}

export default OrderDetails;