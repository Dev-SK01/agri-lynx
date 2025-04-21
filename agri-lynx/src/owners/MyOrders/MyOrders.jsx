import React, { useState, useEffect, useContext } from 'react';
import OwnerContext from '../context/OwnerContext'
import avatar from "../../Assest/avatar.svg"
import analytics from '../../Assest/analytics.svg';
import logistic from '../../Assest/logistic.svg';
import ordericon from '../../Assest/ordericon.svg';
import product from '../../Assest/product.svg';
import { Button } from '@/components/ui/button';

import { Link } from "react-router-dom";

const accessKey = "ngZx_O2HxOkiG9ML_VctB1Z2ImTU5OsYXNK_Jivcq2E";

const MyOrders = () => {
    const { marketOwnerData, allOrders, selectedStatus, setSelectedStatus, cancelOrder } = useContext(OwnerContext);

    const [images, setImages] = useState({});

    useEffect(() => {
        if (!allOrders) return; // Prevent API call if allOrders is undefined
        const fetchImages = async () => {
            const updatedImages = {};
            await Promise.all(
                allOrders.map(async (item) => {
                    const response = await fetch(
                        `https://api.unsplash.com/search/photos?page=1&query=${item.commodity}&client_id=${accessKey}`
                    );
                    const data = await response.json();
                    updatedImages[item.commodity] = data.results[0]?.urls.small || '';
                })
            );
            setImages(updatedImages);
        };
        fetchImages();
    }, [allOrders]);



    return (
        <>
            <div className="flex items-center justify-center flex-col">
                {/* Header */}
                <header className='flex rounded-xl h-16 pt-2 bg-(--green) mt-5 w-100 text-xl'>
                    <h1 className='font-bold font-inter pt-1 ms-10 text-1xl'>
                        Welcome {marketOwnerData?.name}!
                    </h1>
                    <div className='ms-83 pb-1 fixed'>
                        <img src={avatar} alt="avatar" />
                    </div>

                </header>
                <div className='flex rounded-xl h-10 pt-2 bg-(--green) mt-5 w-100 text-xl'>
                    <div className="flex rounded-xl h-10 bg-[--green] mt-0 w-full overflow-x-scroll px-0 space-x-2 py-0  justify-center">
                        {["ordered", "delivered", "canceled"].map((status) => (
                            <button key={status} onClick={() => setSelectedStatus(status)}
                                className={`rounded-xl h-6 px-4 font-medium font-inter ${selectedStatus === status ? " text-black bg-(primary) border-1 border-green-500" : "bg-[var(--primary)]"}`}>
                                {status.charAt(0).toUpperCase() + status.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                <div className=' mt-3 w-full max-w-1xl h-[75vh]  overflow-y-auto px-4 flex items-center  flex-col'>
                    {allOrders.filter((item) => item.orderStatus === selectedStatus).map((item, index) => (

                        <div key={index} className='bg-[var(--green)] flex mt-4 h-35 rounded-2xl w-100 py-1'>
                            <div>
                                <h1 className='flex justify-center rounded-xl h-9 pt-2 bg-[var(--primary)] mt-2 ms-2 w-60 items-center text-center font-bold font-inter'>
                                    {item.commodity}
                                </h1>
                                <h1 className='flex justify-center rounded-xl h-9 pt-2 bg-[var(--primary)] mt-2 ms-2 w-60 items-center font-bold font-inter'>
                                    {item.farmer.name}
                                </h1>
                                <h1 className='flex justify-center rounded-xl h-9 pt-2 bg-[var(--primary)] mt-2 ms-2 w-60 items-center font-bold font-inter'>
                                    {item.farmer.phoneNumber}
                                </h1>
                            </div>
                            <div>
                                <p className='flex justify-center rounded-xl h-9 pt-2 bg-[var(--primary)] mt-2 ms-2 w-28 items-center font-bold font-inter'>
                                    {item.quantity}.KG
                                </p>
                                {/* <img
                                    src={images[item.commodity] || ''}
                                    alt={item.commodity}
                                    className='h-20 w-20 mt-2 ms-6 pt-1 rounded-2xl'
                                /> */}
                                <p className='flex justify-center rounded-xl h-9 pt-2 bg-[var(--primary)] mt-2 ms-2 w-28 items-center font-bold font-inter'>
                                    $ {item.price}
                                </p>
                                {item.orderStatus !== "delivered" && item.orderStatus !== "canceled" && (
                                    <Button
                                        onClick={() => {
                                            const confirmCancel = window.confirm("Are you sure you want to cancel this order?");
                                            if (confirmCancel) {
                                                cancelOrder(item.orderId);
                                                alert("Your order has been cancelled successfully.");
                                            }
                                        }}
                                        className='flex justify-center rounded-xl h-9 pt-2 bg-[var(--secondary)] mt-2 ms-2 w-28 items-center font-bold font-inter text-black'
                                    >
                                        Cancel
                                    </Button>
                                )}


                            </div>
                        </div>

                    ))}
                </div>




                {/* Footer*/}
                <footer className="bg-(--green) h-[8vh] rounded-[30px] mt-4 flex items-center justify-evenly py-4 fixed bottom-3">
                    <Link to="/">
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
        </>

    )
}

export default MyOrders;