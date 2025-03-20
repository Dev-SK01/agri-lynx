import { createContext, useState } from "react";


const FarmerContext = createContext({});

export const FarmerContextProvider = ({ children }) => {

    const [email, setEmail] = useState("");
    const [isCodeSent , setCodeSent] = useState(false);
    const [isOtpVerified ,setOtpVerified] = useState(false);
    const [otp , setOtp] = useState("");
    const [userType ,setUserType] = useState("");
    // email validation function
    const validateEmail = (email) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };

    return (
        <FarmerContext.Provider
            value={{
                email, setEmail ,
                isCodeSent,setCodeSent,
                isOtpVerified,setOtpVerified,
                validateEmail,
                otp,setOtp,
                userType,setUserType
            }}
        >
            {children}
        </FarmerContext.Provider>
    )
}

export default FarmerContext;