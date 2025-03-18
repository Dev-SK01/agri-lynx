import React from 'react'

const FarmerLogin = () => {
  return (
    <div className=' flex flex-row items-center border-2 ' >

        <form action=""> 
                  <h1 className="font-inter">Login</h1> 
                   <div className=''>  
                         Email <br/>
                                <input  className='bg-gray-300 rounded-sm' type="email" placeholder='Enter your mail here'/>
                                <button type='submit' className='click-btn'>Verify</button>
                   </div>
                   <div className='flex-col'>
                         <input className="otp" type="number" name="otp" id="otp" />
                         <input className="otp" type="number" name="otp" id="otp" />
                         <input className="otp" type="number" name="otp" id="otp" />
                         <input className="otp" type="number" name="otp" id="otp" />
                         <input className="otp" type="number" name="otp" id="otp" />
                         <input className="otp" type="number" name="otp" id="otp" />
                   </div>

                        <div>
                         <button className='click-btn'>Login</button>
                        </div>

        </form>
              
         
    </div>
  )
}

export default FarmerLogin
