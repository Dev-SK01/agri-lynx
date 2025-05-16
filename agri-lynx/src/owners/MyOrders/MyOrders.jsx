import React, { useState, useEffect, useContext } from 'react';
import OwnerContext from '../context/OwnerContext'
import avatar from "../../Assest/avatar.svg"
import analytics from '../../Assest/analytics.svg';
import logistic from '../../Assest/logistic.svg';
import ordericon from '../../Assest/ordericon.svg';
import product from '../../Assest/product.svg';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from "react-router-dom";
import Footer from '../ProductList/Footer';
import Toast from "@/utils/toast";
import { toast } from "react-toastify";

const accessKey = "ngZx_O2HxOkiG9ML_VctB1Z2ImTU5OsYXNK_Jivcq2E";

const MyOrders = () => {
    const { OwnerData, setIsContentLoading, allOrders, selectedStatus, setSelectedStatus, cancelOrder, setDeliveredOrders ,setCancelOrders,setMarketOrders} = useContext(OwnerContext);

    // const [images, setImages] = useState({});

    // useEffect(() => {
    //     if (!allOrders) return; // Prevent API call if allOrders is undefined
    //     const fetchImages = async () => {
    //         const updatedImages = {};
    //         await Promise.all(
    //             allOrders.map(async (item) => {
    //                 const response = await fetch(
    //                     `https://api.unsplash.com/search/photos?page=1&query=${item.commodity}&client_id=${accessKey}`
    //                 );
    //                 const data = await response.json();
    //                 updatedImages[item.commodity] = data.results[0]?.urls.small || '';
    //             })
    //         );
    //         setImages(updatedImages);
    //     };
    //     fetchImages();
    // }, [allOrders]);
console.log(OwnerData);

    const handleOrderedOrders = async (ownerId ) => {
        setIsContentLoading(true);
        setSelectedStatus("ordered")
        
        try {
            // backend api
            const req = await fetch(import.meta.env.VITE_API_BASE_URL + `/owner/ordered`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ownerId }),
            });
            const res = await req.json();
            setMarketOrders(res.reverse());
            setTimeout(() => setIsContentLoading(false), 2000);
        } catch (err) {
            Toast(toast.error, err.message)
        }
        
    }

    const handleDeliveredOrders = async (ownerId) => {
        setIsContentLoading(true);
        setSelectedStatus("delivered")
        
        try {
            // backend api
            const req = await fetch(import.meta.env.VITE_API_BASE_URL + `/owner/delivered`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ownerId }),
            });
            const res = await req.json();
            setDeliveredOrders(res.reverse());
            setTimeout(() => setIsContentLoading(false), 2000);
        } catch (err) {
            Toast(toast.error, err.message)
        }
    }

    const cancelOrderAPI = async (orderId) => {
        try {
          const res = await fetch(import.meta.env.VITE_API_BASE_URL + `/owner/cancelorder`,  {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ orderId }),
          });
      
          const data = await res.json();handleCancelOrders
          if (res.ok) {
            alert("Order cancelled successfully");
           // window.location.reload(); // OR re-fetch allOrders from backend
          } else {
            alert(data.message || "Failed to cancel order.");
          }
        } catch (error) {
          alert("Error cancelling order: " + error.message);
        }
      };

    const handleCancelOrders = async (ownerId) => {
        setIsContentLoading(true);
        setSelectedStatus("cancelled")
        try {
            // backend api
            const req = await fetch(import.meta.env.VITE_API_BASE_URL + `/owner/cancelled`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ownerId }),
            });
            const res = await req.json();
            setCancelOrders(res.reverse());
            setTimeout(() => setIsContentLoading(false), 2000);
        } catch (err) {
            Toast(toast.error, err.message)
        }
    }
    

    const navigate = useNavigate();

    const handleAvatarClick = () => {
        navigate("/OwnerDashBoard");
    };

useEffect(() => {
    handleOrderedOrders(OwnerData._id);
},[]);
    return (
        <>
            <div className="flex items-center justify-center flex-col overflow-hidden">
                {/* Header */}
                <header className='flex rounded-xl h-16 pt-2 bg-(--green) mt-5 w-100 text-xl'>
                    <Link to="/">
                        <h1 className='font-bold font-inknut pt-1 ms-10 items-center'>
                            {OwnerData?.name}
                        </h1>
                    </Link>
                    <div className='ms-83 pb-1 fixed'>
                        <img src={avatar} onClick={handleAvatarClick} alt="avatar" />
                    </div>
                </header>
                <div className='flex rounded-sm  py-2 bg-(--green) mt-5 w-98 text-xl px-0 items-center justify-evenly'>
                    {/* {["ordered", "delivered", "canceled"].map((status) => (
                            <button key={status} onClick={() => setSelectedStatus(status)}
                                className={`rounded-sm font-bold font-inter ml-2 px-4 py-1${selectedStatus === status ? " bg-(--primary) border-1 border-green-600" : ""}`}>
                                {status.charAt(0).toUpperCase() + status.slice(1)}
                            </button>
                        ))} */}
                    <button
                        onClick={()=> handleOrderedOrders(OwnerData._id)}
                        className={`rounded-sm font-bold font-inter ml-2 px-2 py-1 ${selectedStatus == "ordered" &&
                            "bg-(--primary) border-1 border-green-600"
                            }`}
                    >
                        Ordered
                    </button>
                    <button
                        onClick={() => handleDeliveredOrders(OwnerData._id)}
                        className={`rounded-sm font-bold font-inter ml-2 px-2 py-1 ${selectedStatus == "delivered" &&
                            "bg-(--primary) border-1 border-green-600"
                            }`}
                    >
                        Delivered
                    </button>
                    <button
                        onClick={() => handleCancelOrders(OwnerData._id)}
                        className={`rounded-sm font-bold font-inter ml-2 px-2 py-1 ${selectedStatus == "cancelled" &&
                            "bg-(--primary) border-1 border-green-600"
                            }`}
                    >
                        Cancelled
                    </button>
                </div>

                <div className=' mt-3 w-dvh  h-[69vh]  overflow-y-auto px-4 flex items-center  flex-col overflow-x-hidden'>
                    {allOrders.filter((item) => item.orderStatus === selectedStatus).map((item, index) => (

                        <div key={index} className='bg-(--green) flex mt-4 rounded-2xl w-100 py-2 '>
                            <div className='ml-1'>
                                <h1 className='flex justify-center rounded-xl h-9 pt-2 bg-[var(--primary)] mt-1.5 ms-2 w-60 items-center text-center font-bold font-inter'>
                                    {item.commodity}
                                </h1>
                                <h1 className='flex justify-center rounded-xl h-9 pt-2 bg-[var(--primary)] mt-2 ms-2 w-60 items-center font-bold font-inter'>
                                    {item.farmer.name}
                                </h1>
                                <h1 className='flex justify-center rounded-xl h-9 pt-2 bg-[var(--primary)] mt-2 ms-2 w-60 items-center font-bold font-inter pb-1'>

                                    <a href={`tel:+91${item?.farmer?.phoneNumber}`}>
                                        +91 <span>{item?.farmer?.phoneNumber}</span>
                                    </a>
                                </h1>
                            </div>
                            <div className='ml-4'>
                                <p className='flex justify-center rounded-xl h-9 pt-2 bg-[var(--primary)] mt-2 ms-2 w-28 items-center font-bold font-inter'>
                                    {item.quantity} KG
                                </p>
                                {/* <img
                                    src={images[item.commodity] || ''}
                                    alt={item.commodity}
                                    className='h-20 w-20 mt-2 ms-6 pt-1 rounded-2xl'
                                /> */}
                                <p className='flex justify-center rounded-xl h-9 pt-2 bg-[var(--primary)] mt-2 ms-2 w-28 items-center font-bold font-inter'>
                                    &#8377; {item.price}
                                </p>
                                {item.orderStatus !== "delivered" && item.orderStatus !== "cancelled" && (
                                    <Button
                                        onClick={() => {
                                            const confirmCancel = window.confirm("Are you sure you want to cancel this order?");
                                            if (confirmCancel) {
                                                cancelOrderAPI(item.orderId);
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
                <Footer />
            </div>
        </>

    )
}

export default MyOrders;