import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
const OtpInputField = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  // const [pasteOtp,setNewOtp] = useState([])

  function handleChange(e, index) {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
    if (e.target.value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  }

  function handleDelete(e, index) {
    if (e.key == "Backspace") {
      e.target.previousSibling.focus();
    }
  }

  function handlePaste(e) {
    const copiedText = e.clipboardData.getData("text");
    if(isNaN(copiedText)) return null;
    if(copiedText.length == otp.length) {
      setOtp(copiedText.toString().split("").splice(0,otp.length));  
    }else{
      return "";
    }
  }
  console.log(otp);
  
  return (
    <>
      <div  className=" otp-area flex justify-center items-center" >
        {otp.map((otp, index) => ((
          <input type="text"
            className='otp'
            value={otp}
            key={index}
            maxLength={1}
            onChange={(e) => handleChange(e, index)}
            onKeyUpCapture={(e) => handleDelete(e, index)}
            onPaste={(e) => handlePaste(e)
            }
          />)))
        }
      </div>
      <div className="flex justify-center items-center" >
      <Button type="submit" className="text-white bg-(--secondary) font-bold text-[1.2rem] mt-5">Continue</Button>
      </div>
    </>
  )
}

export default OtpInputField;