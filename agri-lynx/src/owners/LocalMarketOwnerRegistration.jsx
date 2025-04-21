import React from 'react'
import Selection from './Registration/Selection';
import Email from './Registration/Email';
import Personal  from './Registration/Personal';
import OtpInputField from './Registration/Otp';



const LocalMarketOwnerRegistration = () => {


  return (

    <div>
      

    <div className="place-content-center flex flex-col items-center justify-center ">
     <h1 className="font-inknut text-2xl mt-5  text-center">Registration</h1>
      <Selection />
      <Email />
      <OtpInputField/>
      <Personal/>

    </div>

  )
}

export default LocalMarketOwnerRegistration
