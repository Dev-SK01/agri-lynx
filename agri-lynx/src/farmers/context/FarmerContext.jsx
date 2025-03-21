import { createContext, useState } from "react";


const FarmerContext = createContext({});

export const FarmerContextProvider = ({ children }) => {

    const [email, setEmail] = useState("");
    const [isCodeSent , setCodeSent] = useState(true);
    const [isOtpVerified ,setOtpVerified] = useState(true);
    const [otp , setOtp] = useState("");
    const [userType ,setUserType] = useState("");
    // personal details states
    const[name,setName] = useState("");
    const[phoneNumber,setPhoneNumber] = useState("pn");
    const[alternatePhoneNumber,setAlternatePhoneNumber] = useState("an");
    const[personalDetailsError ,setPersonalDetailsError] = useState({
        nameError:false,
        numberError:false,
        alternateError:false
    })
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
                userType,setUserType,
                name,setName,
                phoneNumber,setPhoneNumber,
                alternatePhoneNumber,setAlternatePhoneNumber,
                personalDetailsError ,setPersonalDetailsError
            }}
        >
            {children}
        </FarmerContext.Provider>
    )
}

export default FarmerContext;