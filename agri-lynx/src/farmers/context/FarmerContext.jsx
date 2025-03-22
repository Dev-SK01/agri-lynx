import { createContext, useState } from "react";

const FarmerContext = createContext({});

export const FarmerContextProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [isCodeSent, setCodeSent] = useState(true);
  const [isOtpVerified, setOtpVerified] = useState(true);
  const [otp, setOtp] = useState("");
  const [userType, setUserType] = useState("");
  // personal details states
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("pn");
  const [alternatePhoneNumber, setAlternatePhoneNumber] = useState("an");
  const [personalDetailsError, setPersonalDetailsError] = useState({
    nameError: false,
    numberError: false,
    alternateError: false,
  });
  // address details states
  const [address, setAddress] = useState("test-test-test");
  const [taluk, setTaluk] = useState("tl");
  const [district, setDistrict] = useState("dt");
  const [state, setState] = useState("st");
  const [pincode, SetPincode] = useState("630555");
  // bank details states
  const[ifscCode ,setIfscCode] = useState("IOBA0001872");
  const[accountNumber,setAccountNumber] = useState("1234567");
  const[accountHolderName,setAccountHolderName] = useState("ahn")
  const[bankName,setBankName] = useState("");
  const[bankBranch,setBankBranch] = useState("");
  const[upiId,setUpiId] = useState("@");
  // email validation function
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  return (
    <FarmerContext
      value={{
        email,
        setEmail,
        isCodeSent,
        setCodeSent,
        isOtpVerified,
        setOtpVerified,
        validateEmail,
        otp,
        setOtp,
        userType,
        setUserType,
        name,
        setName,
        phoneNumber,
        setPhoneNumber,
        alternatePhoneNumber,
        setAlternatePhoneNumber,
        personalDetailsError,
        setPersonalDetailsError,
        address, setAddress,
        taluk, setTaluk,
        district, setDistrict,
        state, setState,
        pincode, SetPincode,
        ifscCode ,setIfscCode,
        accountNumber,setAccountNumber,
        accountHolderName,setAccountHolderName,
        bankName,setBankName,
        bankBranch,setBankBranch,
        upiId,setUpiId,
      }}
    >
      {children}
    </FarmerContext>
  );
};

export default FarmerContext;
