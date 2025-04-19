import React, { useState, useContext } from 'react'
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




const OrderMange = () => {
  const { OwnerData } = useContext(OwnerContext);
  const { farmerData } = useContext(OwnerContext);
  const { purchasedList } = useContext(OwnerContext);


  const price = purchasedList.price;
  const availableQuantity = purchasedList.quantity;
  const [userQuantity, setUserQuantity] = useState("");
  const handleClick = () => {
  const OrderData = {
        listingId:purchasedList[0].listingId,
        commodity: purchasedList.commodity,
        commodityPrice: purchasedList[0].price,
        quantity:userQuantity,
        price:totalPrice,
        
        imageUrl:purchasedList.imageUrl,
    
    customer:{
    ownerId: OwnerData.ownerId,
    name: OwnerData.name,
    email: OwnerData.email,
    phoneNumber: OwnerData.phoneNumber,
    address: OwnerData.adress,
    taluk: OwnerData.taluk,
    district: OwnerData.district,
    state: OwnerData.state,
    pincode: OwnerData.pincode,
    },
    farmer:{
      name: farmerData.name,
      number: farmerData.number,
      address: farmerData.address,
      village: farmerData.village,
      taluk: farmerData.taluk,
      district: farmerData.district,
      pincode: farmerData.pincode,
      upiId: farmerData.upiId,
    },
    
  }
  console.log("OrderData",OrderData);
};

  
  
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
  return (
    <>

      <div className="flex items-center justify-between flex-col ">
        {/* Header */}
        <header className='flex rounded-xl justify-between  h-[8vh] pt-2 bg-(--green) mt-2 w-100 text-xl  '>
          <div className='max-w-[80%]'>
            <h1 className='font-bold font-inter  mt-3 ms-10 text-1xl'>luffy</h1>
          </div>
          <div className='fixed ml-80'>
            <img className="object-cover" src={Avatar} alt="Assests" />
          </div>
        </header>

        <div className='overflow-scroll scrollbar-hide h-[84vh] mt-8 '>
          <nav className='flex items-center justify-center flex-col '>
            <div>
              <h1 className='text-2xl font-serif font-bold font-stretch-150% inline-block space-x-5'>Checkout Order</h1>
              <img className='inline-block ml-1.5' src={Checkout} alt='Assests' />
            </div>
          </nav>
          <nav className=' flex items-center justify-center mt-4'>
            <div className='bg-(--green)  p-5 w-96 rounded-xl'>
              <div className='flex items-start -ml-3'>
                <img className='object-cover h-40 w-40 -ml-2' src={Rectangle} alt="Assests" />
                <div>
                  <div className='inline-block'>
                    <input type='text' className='ml-2 inline-block bg-white rounded-xl text-center font-bold text-2xl text-black p-2.5 w-full' value={purchasedList[0].commodity} disabled={true} />
                  </div>
                  <div className='inline-block'>
                    <input className='ml-2 mt-5 bg-white inline-block rounded-xl w-23 p-1 text-center font-bold text-' value={purchasedList.quantity} disabled={true} />
                    <span className=" mt-3 -ml-6 translate-y-1/2 font-bold text-black pointer-events-none">
                      kg
                    </span>
                  </div>
                  <div className='inline-block'>

                    <input className='ml-5 bg-white inline-block rounded-xl w-23 p-1 text-center font-bold text-' value={purchasedList.price} disabled={true} />
                    <span className="  mt-1 -ml-5 translate-y-1/2 font-bold text-black pointer-events-none">
                      ₹
                    </span>
                  </div>
                  <input type="number" inputMode='numeric' value={userQuantity} onChange={handleChange} onKeyDown={(e) => { if (["ArrowUp", "ArrowDown", "e", "-", "+"].includes(e.key)) { e.preventDefault(); } }} className='ml-2 mt-5 bg-white inline-block rounded-xl  text-black p-2' placeholder='Enter Quantity' />
                </div>
              </div>
            </div>
          </nav>
          <nav className=' flex items-center justify-center mt-5 mb-18 '>
            <div className='bg-(--green)  p-5 w-96 rounded-xl'>
              <div>
                <h1 className=' inline-block font-bold font-inter mt-3 ms-2 text-1xl'>PAYMENT DETAILS</h1>
                <img className='ml-1 inline-block' src={Payment} alt="Assests" />
              </div>
              <div>
                <h2 className='ms-10 mt-1 text-black'>Commodity Price : ₹{purchasedList.price}</h2>
                <h2 className='ms-10 mt-1 text-black'>Total Quantity : {userQuantity || 0}Kg</h2>
                <h2 className='ms-10 mt-1'>Total Amount : ₹{totalPrice}</h2> 
                <h2 className=' font-bold ms-10 mt-1'>UPI ID :</h2>
                <div className='inline-block ms-10 mt-2'>
                  <input className='bg-white inline-block rounded-xl w-70 p-2' value={farmerData.upiId} disabled={true} />
                </div>
                <div>
                  <h1 className='inline-block font-bold font-inter mt-5 ms-2 text-1xl'>DELIVERY DETAILS</h1>
                  <img className='ml-1 inline-block' src={location} alt="Assests" />
                </div>
                <div>
                  <h2 className='ms-10 mt-1' >Address : {OwnerData.address} </h2>
                  <h2 className='ms-10 mt-1'>Taluk : {OwnerData.taluk}</h2>
                  <h2 className='ms-10 mt-1'>District : {OwnerData.district}</h2>
                  <h2 className=' ms-10 mt-1'>PinCode : { OwnerData.pincode}</h2>

                </div>
                <div>
                  <h1 className='inline-block font-bold font-inter mt-5 ms-2 text-1xl'>FARMER DETAILS</h1>
                  <img className='ml-1 inline-block' src={farmer} alt="Assests" />
                </div>
                <div>
                  <h2 className='ms-10 mt-1'>FarmerId : {farmerData.name}</h2>
                  <h2 className='ms-10 mt-1'>Number : {farmerData.number}</h2>
                  <h2 className='ms-10 mt-1'>Address : {farmerData.address}</h2>
                  <h2 className=' ms-10 mt-1'>Taluk : {farmerData.taluk}</h2>
                  <h2 className=' ms-10 mt-1'>District : {farmerData.district}</h2>
                </div>
              </div>
              <div className='ml-24 mt-7'>
                <Button onClick={handleClick} className='bg-green-600 text-white font-bold' variant="outline">ORDER NOW<img className='mb-2' src={delivery} alt='Assests' /></Button>

              </div>
            </div>

          </nav>
        </div>

        {/* Footer */}
        <footer className='bg-(--green) h-[8vh] w-100 rounded-[30px] mt-4 flex items-center justify-evenly py-4 fixed bottom-3 '>
          <div className='ms-6 me-5 h-12 w-11 bg-white rounded-lg p-1'>
            <img className='inline' src={product} alt="Assests" />
          </div>
          <div className='ms-6 me-6 h-12 w-12 bg-white rounded-lg p-1 '>
            <img src={ordericon} alt='Assests' />
          </div>
          <div className='ms-6 me-6 h-12 w-12 bg-white rounded-lg p-1 pt-1.5'>
            <img src={logistic} alt='Assests' />
          </div>
          <div className='ms-6 me-6 h-12 w-12 bg-white rounded-lg p-1 pt-2'>
            <img src={analytics} alt='Assests' />
          </div>
        </footer>
      </div>

    </>
  )
}

export default OrderMange

