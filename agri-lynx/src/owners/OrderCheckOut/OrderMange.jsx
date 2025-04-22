import React, { useState, useContext, useEffect } from 'react'
import Avatar from "../../Assests/Avatar.svg"
import delivery from "../../Assests/delivery.svg"
import farmer from "../../Assests/farmer.svg"
import Payment from "../../Assests/Payment.svg"
import Checkout from "../../Assests/Checkout.svg"
import location from "../../Assests/location.svg"
import logistic from "../../Assests/logistic.svg"
import ordericon from "../../Assests/ordericon.svg"
import product from "../../Assests/product.svg"
import analytics from "../../Assests/analytics.svg"
import Rectangle from "../../Assests/Rectangle.svg"
import { Button } from "@/components/ui/button"
import OwnerContext from '../context/OwnerContext'
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";




const OrderMange = () => {
  const { OwnerData, purchasedList, farmerData, updateOrderStatus, setMarketOrders, marketOrders, allOrders,updateProductQuantity } = useContext(OwnerContext);
  const { listingId } = useParams();
   console.log("listingId from URL:", listingId);
  const [selectedItem,setSelectedItem] = useState(null);

  // useEffect(() => {
  //   console.log("marketOrders has been updated:", marketOrders);
  // }, [marketOrders]);
  useEffect(() => {
    if (Array.isArray(purchasedList)) {
      const item = purchasedList.find(item => String(item.listingId) === String(listingId));
      setSelectedItem(item);
    }
  }, [purchasedList, listingId]
);



  const price = selectedItem?.price || 0;
  const availableQuantity = selectedItem?.quantity || 0;
  const [userQuantity, setUserQuantity] = useState("");

  const handleClick = () => {
    if (!userQuantity || Number(userQuantity) <= 0) {
      alert("Please enter a valid quantity.");
      return;
    }

    const newOrderId = `order_${Date.now()}`;
    const totalPrice = price * userQuantity;



    const OrderData = {
      orderId: newOrderId,
      listingId: selectedItem.listingId,
      commodity: selectedItem.commodity,
      commodityPrice: selectedItem.price,
      quantity: userQuantity,
      price: totalPrice,
      orderDate: new Date().toUTCString(),
      orderStatus: "ordered",
      bookingStatus: "pending",
      imageUrl: selectedItem.imageUrl,
      customer: {
        customerId: OwnerData.customerId,
        name: OwnerData.name,
        email: OwnerData.email,
        phoneNumber: OwnerData.phoneNumber,
        address: OwnerData.address,
        taluk: OwnerData.taluk,
        district: OwnerData.district,
        state: OwnerData.state,
        pincode: OwnerData.pincode,
      },
      farmer: {
        farmerId: farmerData.farmerId,
        name: farmerData.name,
        phoneNumber: farmerData.phoneNumber,
        address: farmerData.address,
        village: farmerData.village,
        postoffice: farmerData.postOffice,
        taluk: farmerData.taluk,
        district: farmerData.district,
        pincode: farmerData.pincode,
        upiId: farmerData.upiId,
      },
    };

    setMarketOrders((prevOrders) => [...prevOrders, OrderData])
    console.log("Order successfully added/updated:", OrderData);
    console.log("allOrders", allOrders);
    updateOrderStatus(newOrderId, "ordered");
    navigate("/myorder");

    updateOrderStatus(newOrderId, "ordered");

    //update the remaining quantity
    updateProductQuantity(selectedItem.listingId, Number(userQuantity));
    navigate("/myorder");
  };

  console.log("updated orders", marketOrders);






  const handleChange = (e) => {
    let value = e.target.value;

    if (value === "") {
      setUserQuantity("");
      return;
    }

    value = value.replace(/\D/g, "");
    value = value.replace(/^0+/, "");

    const numericValue = Number(value);

    if (numericValue <= availableQuantity) {
      setUserQuantity(value);
    } else {
      alert(`You can’t select more than ${availableQuantity} kg`);
    }
  };
  const totalPrice = price * userQuantity;
  //      console.log("Listing ID from URL:", listingId);
  // console.log("Available IDs:", purchasedList?.map(item => item.listingId));
  // console.log("purchasedList:", purchasedList); 
  const navigate = useNavigate();

  const handleAvatarClick = () => {
    navigate("/OwnerDashBoard");
  };

  return (
    <>

       <div className="flex flex-col items-center justify-between">
                {/* Header */}
        <header className='flex rounded-xl justify-between  h-[8vh] pt-2 bg-(--green) mt-2 w-[95q
        dvw] px-3 text-xl  '>
          <Link to="/">
            <div className='max-w-[80%]'>
              <h1 className='font-bold font-inknut mt-3 ms-10 text-1xl'> {OwnerData?.name}!</h1>
            </div>
          </Link>
          <div className='flex justify-end pr-4'>
          <img className="object-cover w-10 h-10" src={Avatar} onClick={handleAvatarClick} alt="Avatar" />
          </div>
        </header>

        <div className='overflow-scroll scrollbar-hide h-[84vh] mt-8 '>
          <nav className='flex items-center justify-center flex-col '>
            <div>
              <h1 className='text-2xl font-serif font-bold font-stretch-150% inline-block space-x-5'>Checkout Order</h1>
              <img className='inline-block ml-1.5' src={Checkout} alt='Assests' />
            </div>
          </nav>
          <nav className='flex items-center justify-center mt-4 px-4 w-full'>
          <div className='bg-(--green) p-5 w-full max-w-md rounded-xl'>

              <div className='flex items-start -ml-3'>
                <img className='object-cover h-40 w-40 -ml-2' src={Rectangle} alt="Assests" />
                <div>
                  <div className='inline-block'>
                    <input  className='ml-2 inline-block bg-white rounded-xl text-center font-bold text-2xl text-black p-2.5 w-full' value={selectedItem?.commodity} disabled={true} />
                  </div>
                  <div className='inline-block'>
                    <span className='ml-2 mt-5 bg-white inline-block rounded-xl w-23 p-1 text-center font-bold text-'>{selectedItem?.quantity} KG</span>
                  </div>
                  <div className='inline-block'>
                    <span  className='ml-5 bg-white inline-block rounded-xl w-23 p-1 text-center font-bold text-'>₹ {selectedItem?.price } </span>
                  </div>
                  <input type="number" inputMode='numeric' value={userQuantity} onChange={handleChange} onKeyDown={(e) => { if (["ArrowUp", "ArrowDown", "e", "-", "+"].includes(e.key)) { e.preventDefault(); } }} className='ml-2 mt-5 bg-white inline-block rounded-xl  text-black p-2' placeholder='Enter Quantity' />
                </div>
              </div>
            </div>
          </nav>
          <nav className='flex items-center justify-center mt-5 mb-24 px-4 w-full'>
          <div className='bg-(--green) p-5 w-full max-w-md rounded-xl'>
              <div>
                <h1 className=' inline-block font-bold font-inter mt-3 ms-2 text-1xl'>PAYMENT DETAILS</h1>
                <img className='ml-1 inline-block' src={Payment} alt="Assests" />
              </div>
              <div>
                <h2 className='ms-10 mt-1 text-black'>Commodity Price : ₹{selectedItem?.price || 0}</h2>
                <h2 className='ms-10 mt-1 text-black'>Total Quantity : {userQuantity || 0}Kg</h2>
                <h2 className='ms-10 mt-1'>Total Amount : ₹{totalPrice}</h2>
                <h2 className=' font-bold ms-10 mt-1'>UPI ID :</h2>
                <div className='inline-block ms-10 mt-2'>
                  <input className='bg-white inline-block rounded-xl w-70 p-2' value={farmerData?.upiId} disabled={true} />
                </div>
                <div>
                  <h1 className='inline-block font-bold font-inter mt-5 ms-2 text-1xl'>DELIVERY DETAILS</h1>
                  <img className='ml-1 inline-block' src={location} alt="Assests" />
                </div>
                <div>
                  <h2 className='ms-10 mt-1' >Address : {OwnerData?.address} </h2>
                  <h2 className='ms-10 mt-1'>Taluk : {OwnerData?.taluk}</h2>
                  <h2 className='ms-10 mt-1'>District : {OwnerData?.district}</h2>
                  <h2 className=' ms-10 mt-1'>PinCode : {OwnerData?.pincode}</h2>

                </div>
                <div>
                  <h1 className='inline-block font-bold font-inter mt-5 ms-2 text-1xl'>FARMER DETAILS</h1>
                  <img className='ml-1 inline-block' src={farmer} alt="Assests" />
                </div>
                <div>
                  <h2 className='ms-10 mt-1'>Name : {farmerData?.name}</h2>
                  <a className='ms-10 mt-1' href={`tel:+91${farmerData?.phoneNumber}`}>Number : +91 {farmerData?.phoneNumber}</a>
                  <h2 className='ms-10 mt-1'>Address : {farmerData?.address}</h2>
                  <h2 className=' ms-10 mt-1'>Taluk : {farmerData?.taluk}</h2>
                  <h2 className=' ms-10 mt-1'>District : {farmerData?.district}</h2>
                </div>
              </div>
              <div className='ml-24 mt-7'>
                <Button onClick={handleClick} className='bg-green-600 text-white font-bold' variant="outline">ORDER NOW<img className='mb-2' src={delivery} alt='Assests' /></Button>

              </div>
            </div>

          </nav>
        </div>

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
          <Link to="/OwnerAnalytics">

            <div className='ms-7 me-7 h-12 w-12 bg-white rounded-xl p-1 pt-1'>
              <img src={analytics} alt="analytics" />
            </div>
          </Link>
        </footer>
      </div>

    </>
  )
}

export default OrderMange

