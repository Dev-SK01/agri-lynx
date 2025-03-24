import React from 'react'
import Selection from './contents/Selection';
import Email from './contents/Email';
import Personal  from './contents/Personal';
import OtpInputField from './contents/Otp';

import { Button } from '@/components/ui/button';

const LocalMarketOwnerRegistration = () => {


  return (
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
