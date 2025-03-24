import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
const OtpInputField = ({ email }) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  // const [pasteOtp,setNewOtp] = useState([])
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Replace with your actual api
      const response = await fetch("API", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("OTP verified successfully!");
      } else {
        setMessage("Invalid OTP, please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      setMessage("Something went wrong. Try again.");
    }

    setLoading(false);
  };
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
    <form onSubmit={handleSubmit}>
    <div  className=" otp-area " >
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
      <div className="" >
      <Button type="submit" className="text-white bg-(--secondary) font-bold text-[1.2rem] mt-5">Continue</Button>
      {loading ? "Verifying..." : ""}
      {message && <p className="mt-2">{message}</p>}
      </div>
      <br></br>
    </form>
     
    </>
  )
}

export default OtpInputField;