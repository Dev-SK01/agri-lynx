import React from 'react'
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
  return (
   <>
   
           <div className="flex items-center justify-center flex-col ">
            {/* Header */}
                       <header className='flex rounded-xl h-16 pt-2 bg-(--green) mt-5 w-100 text-xl fixed top-2 z-auto  '>
                           <h1 className='font-bold font-inter mt-3 ms-10 text-1xl'>Welcome Luffy</h1>
                           <div className='ml-40'>
                               <img className="fixed" src={Avatar} alt="Assests" />
                           </div>
                           </header>
            {/* Footer */}
                        <footer className='bg-(--green) h-[8vh] rounded-[30px] mt-4 flex items-center justify-evenly py-4 fixed bottom-3 '>
                          <div className='ms-7 me-7 h-12 w-12 bg-white rounded-xl p-1'>
                            <img className='inline' src={product} alt="Assests"/>
                            </div>
                            <div className='ms-7 me-7 h-12 w-12 bg-white rounded-xl p-1 '>
                            <img src={ordericon} alt='Assests'/>
                            </div>
                            <div className='ms-7 me-7 h-12 w-12 bg-white rounded-xl p-1 pt-1.5'>
                            <img src={logistic} alt='Assests'/>
                            </div>
                            <div className='ms-7 me-7 h-12 w-12 bg-white rounded-xl p-1 pt-2'>
                            <img src={analytics} alt='Assests'/>
                          </div>
                        </footer>
                           </div>
                           <nav className='flex items-center justify-center flex-col mt-30'>
                           <div>
                            <h1 className='text-2xl font-serif font-bold font-stretch-150% inline-block space-x-5'>Checkout Order</h1>
                            <img className='inline-block'src={Checkout} alt='Assests'/>
                           </div>
                           </nav>
                          <nav className=' flex items-center justify-center mt-4'>
                            <div className='bg-(--green)  p-5 w-96 rounded-xl'>
                              <div className='flex items-start -ml-3'>
                               <img className='object-cover h-40 w-40 -ml-2' src={Rectangle} alt="Assests"/>
                               <div>
                                 <input type='text' className='ml-2 inline-block bg-white rounded-xl  text-black p-2.5 w-full'/>
                                 <input className='ml-2 mt-5 bg-white inline-block rounded-xl w-23 p-1 '/>
                                 <input className='ml-5 bg-white inline-block rounded-xl w-23 p-1'/>
                                 <input className='ml-2 mt-5 bg-white inline-block rounded-xl  text-black p-2'placeholder='Enter Quantity'/>
                               </div>
                             
                              </div>
                            </div>
                          </nav>
                            <nav className='pb-40 flex items-center justify-center mt-5 '>
                              <div className='bg-(--green)  p-5 w-96 rounded-xl'>
                                <div>
                                 <h1 className=' inline-block font-bold font-inter mt-3 ms-2 text-1xl'>PAYMENT DETAILS</h1>
                                 <img className='ml-1 inline-block'src={Payment} alt="Assests"/>
                                 </div>
                                 <div>
                                 <h2 className='ms-10 mt-1'>Commodity Price :</h2>
                                 <h2 className='ms-10 mt-1'>Total Quantity :</h2>
                                 <h2 className='ms-10 mt-1'>Total Amount :</h2>
                                 <h2 className=' font-bold ms-10 mt-1'>UPI ID :</h2>
                                 <div className='inline-block ms-10 mt-2'>
                               <input className='bg-white inline-block rounded-xl w-70 p-2'/>
                              </div>
                              <div>
                                 <h1 className='inline-block font-bold font-inter mt-5 ms-2 text-1xl'>DELIVERY DETAILS</h1>
                                 <img className='ml-1 inline-block'src={location} alt="Assests"/>
                                 </div>
                                 <div>
                                 <h2 className='ms-10 mt-1' >Address : </h2>
                                 <h2 className='ms-10 mt-1'>Taluk :</h2>
                                 <h2 className='ms-10 mt-1'>District :</h2>
                                 <h2 className=' ms-10 mt-1'>PinCode :</h2>
                                 
                              </div>
                              <div>
                                 <h1 className='inline-block font-bold font-inter mt-5 ms-2 text-1xl'>FARMER DETAILS</h1>
                                 <img className='ml-1 inline-block'src={farmer} alt="Assests"/>
                                 </div>
                                 <div>
                                 <h2 className='ms-10 mt-1'>Name :</h2>
                                 <h2 className='ms-10 mt-1'>Number :</h2>
                                 <h2 className='ms-10 mt-1'>Address :</h2>
                                 <h2 className=' ms-10 mt-1'>Taluk :</h2>
                                 <h2 className=' ms-10 mt-1'>District :</h2>
                               </div>
                               </div>
                               <div className='ml-24 mt-7'>
                               <Button className='bg-green-600 text-white font-bold' variant="outline">ORDER NOW<img className='mb-2' src={delivery} alt='Assests'/></Button>

                               </div>

                              </div>

                            </nav>

   
   </>
  )
}

export default OrderMange

