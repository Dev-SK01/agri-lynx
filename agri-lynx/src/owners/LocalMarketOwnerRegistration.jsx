import React from 'react'
import Selection from './contents/Selection';
import Email from './contents/Email';
import Personal  from './contents/Personal';
import OtpInputField from './contents/Otp';
import Address from './contents/Address';

const LocalMarketOwnerRegistration = () => {


  return (
    <div className="place-content-center ">

      <h1 className="--font-inknut font-bold text-2xl mt-5  text-center">Registration</h1>

     
      <Selection />
      <Email />
      <OtpInputField/>
      <Personal/>
      <Address />

    </div>

  )
}

export default LocalMarketOwnerRegistration
