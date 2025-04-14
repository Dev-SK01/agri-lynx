import React from 'react'
import Avatar from '../../Assests/Avatar.svg'
import product from '../../Assests/product.svg'
import ordericon from '../../Assests/ordericon.svg'
import logistic from '../../Assests/logistic.svg'
import analytics from '../../Assests/analytics.svg'
import Vector1 from '../../Assests/Vector1.svg'
const LocalMarketOwnerAnalytics = () => {
  return (
    <>
     <div className="flex items-center justify-between flex-col ">
                {/* Header */}
                           <header className='flex rounded-xl justify-between h-16 pt-2 bg-(--green) mt-5 w-100 text-xl fixed top-2 z-auto  '>
                            <div className='max-w-[80%]'>
                               <h1 className='font-bold font-inter  mt-3 ms-10 text-1xl'>luffy</h1>
                               </div>
                               <div className='fixed ml-80 '>
                                   <img className="object-cover" src={Avatar} alt="Assests" />
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
                                <h1 className='text-2xl font-serif font-bold font-stretch-150% inline-block space-x-5'>Your Analytics</h1>
                                <img className='inline-block -mt-2 ml-1.5'src={analytics} alt='Assests'/>
                                </div>
                               </nav>
                               <nav className='flex items-center justify-center me-60'>
                               <div className=' bg-(--green)  w-40 text-xl mt-5 ml-5  border-2 border-black p-1 px- py-1 rounded-lg'>
                                <h1 className='font-black'>MARKET PRICE</h1>
                               </div>
                               </nav>
                             {  /*<div className=" flex items-center justify-center mt-4">
                            
                               <div className="relative group w-64">
                               
                               <div className=" flex items-center justify-center mt-4">
                                
                               <input type='text' className='bg-(--green) p-0.5 rounded-lg font-bold ' placeholder="Select Options" readOnly/>                              
                               <div className="-ml-7 text-gray-500 cursor-pointer"><img src={Vector1} alt='Assests'/></div> 
                               </div>
                               <ul className="absolute hidden group-hover:block bg-white border border-gray-300 mt-1 w-full rounded shadow">
                               <li className="px-4 py-2 hover:bg-black cursor-pointer">Option 1</li>
                               <li className="px-4 py-2 hover:bg-black cursor-pointer">Option 2</li>
                               <li className="px-4 py-2 hover:bg-black cursor-pointer">Option 3</li>
                               </ul>                                                           
                              </div>
                              </div>*/
}
                              <div className='flex items-center justify-center'>
                              <div className=" flex items-center w-100 h-[350px] mt-4">
                              <embed src="https://www.agmarknet.gov.in" height="100%" width="100%"className="rounded-md bg-(--green)"/>
                              </div>
                              </div>



    
    </>
      
    
  )
}

export default LocalMarketOwnerAnalytics
