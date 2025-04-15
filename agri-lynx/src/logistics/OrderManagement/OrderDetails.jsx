import React, { useContext, useState } from 'react'
import avatar from "../../Assest/avatar.svg"
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
const OrderDetails = () => {
    const {
        LogisticOrders,
        LogisticData,
        orderStatus,
        setOrderStatus,
        setShowOtpPopup,
    } = useContext(LogisticContext);
    const [isStatusUpdated, setIsStatusUpdated] = useState(false);

    const handleStatusChange = (value) => {
        setOrderStatus(value);
        setIsStatusUpdated(true); // prevent further changes
        if (value === 'Delivered' || value === 'In-Transit') {
            setShowOtpPopup(true);
        }
    };
    const handleAvatarClick = () => {
        setShowDetails(true);
      };
    return (
        <>
            <div className="flex justify-center items-center flex-col ">
                {/* Header */}
                <header className='flex rounded-xl h-16 pt-2 bg-(--green) mt-5 w-100 text-xl'>
                          <Link to="/logistic">
                          <h1 className='font-bold font-inknut pt-1 ms-10 items-center'>
                             {LogisticData?.name}!
                          </h1>
                          </Link>
                          <div className='ms-83 pb-1 fixed'>
                            <img src={avatar} onClick={handleAvatarClick} alt="avatar" />
                          </div>
                
                        </header>
                <div className="w-80 mt-4 text-center bg-(--green) rounded-sm">
                    <h1 className="font-bold text-[1.2rem] font-inter">
                        #{LogisticOrders[0].orderId.toUpperCase()}
                    </h1>
                    <div className="text-center flex items-center justify-center">
                        <img
                            src={calendar}
                            alt="calander"
                            className="h-[25px] w-[25px]"
                        />
                        <span className="font-inter ml-2">{LogisticOrders[0]?.orderDate}</span>
                    </div>
                </div>



                <Select value={orderStatus}
                    onValueChange={handleStatusChange}
                    disabled={isStatusUpdated}>
                    <SelectTrigger className="flex justify-center items-center font-inter mt-2">Select Status</SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Ordered">Ordered</SelectItem>
                        <SelectItem value="In-Transit">In-Transit</SelectItem>
                        <SelectItem value="Deliverd">Delivered</SelectItem>
                    </SelectContent>
                </Select>
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
                                <span className="font-[600] font-inter">COMMODITY : <span>{LogisticOrders[0]?.commodity}</span></span>
                            </div>

                            <div><span className="font-[600] font-inter">QUANTITY : <span>{LogisticOrders[0]?.quantity}.KG</span></span></div>

                            <div><span className="font-[600] font-inter">PRICE : &#8377; <span>{LogisticOrders[0]?.price}</span></span></div>

                            <div> <span className="font-[600] font-inter">COMMODITY PRICE : &#8377;{" "}<span>{LogisticOrders[0]?.commodityPrice}</span></span></div>

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
                                NAME : <span>{LogisticOrders[0]?.customer?.name}</span>
                            </span>
                            <br />
                            <span className="font-[600] font-inter">
                                NUMBER :{" "}
                                <a href={`tel:+91${LogisticOrders[0]?.customer?.phoneNumber}`}>
                                    +91<span>{LogisticOrders[0]?.customer?.phoneNumber}</span>
                                </a>
                            </span>
                            <br />
                            <span className="font-[600] font-inter">
                                EMAIL : <span>{LogisticOrders[0]?.customer?.email}</span>
                            </span>
                            <br />
                        </div>
                    </div>
                    {/* logistics details */}
                    {LogisticOrders[0]?.logistics && (
                        <div className=" pb-2 border-b-1 border-b-green-300 ">
                            <div className="flex     ">
                                <img src={avatar} alt="avatar" />
                                <h1 className="font-extrabold text-[1.4rem] mt-2 font-inter ml-2">
                                    From
                                </h1>
                            </div>
                            <div className="ml-12">

                                <span className="font-[600] font-inter">
                                    NAME : <span>{LogisticOrders[0]?.logistics?.name}</span>
                                </span>
                                <br />
                                <span className="font-[600] font-inter">
                                    NUMBER :{" "}
                                    <a
                                        href={`tel:+91${LogisticOrders[0]?.logistics?.phoneNumber}`}
                                    >
                                        +91<span>{LogisticOrders[0]?.logistics?.phoneNumber}</span>
                                    </a>
                                </span>
                                <br />
                                <span className="font-[600] font-inter">
                                    EMAIL : <span>{LogisticOrders[0]?.logistics?.email}</span>
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
                                ADDRESS : <span>{LogisticOrders[0]?.customer?.address}</span>
                            </span>
                            <br />
                            <span className="font-[600] font-inter">
                                DISTRICT : <span>{LogisticOrders[0]?.customer?.district}</span>
                            </span>
                            <br />
                            <span className="font-[600] font-inter">
                                PINCODE : <span>{LogisticOrders[0]?.customer?.pincode}</span>
                            </span>
                            <br />
                        </div>
                    </div>
                </div>
                {/* footer */}
                <footer className="bg-(--green) h-[8vh] rounded-[30px] mt-4 flex items-center justify-evenly py-4 fixed bottom-3">
                    <div className='ms-7 me-7 h-12 w-12 bg-white rounded-xl p-1'>
                        <img src={product} alt="product" />
                    </div>
                    <Link to="/logistic">
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

        </>
    )
}

export default OrderDetails
