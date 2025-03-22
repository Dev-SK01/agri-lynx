import { createContext, useState } from "react";

const RegistrationContext = createContext({});

export const RegistrationContextProvider = ({ children }) => {
  const[isRegistered , setIsRegistered] = useState(false)
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
  // vehicle details states
  const [vehicleType,setVehicleType] =useState("vt");
  // TN-90-AZ-8491
  const [vehicleNumber,setVehicleNumber] = useState("");
  // D6101-40706-60905
  const [licenseNumber,setLicenseNumber] = useState("")
  // email validation function
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  // vehicle number validation
  const validateVehicleNumber = (str) => {
    const regEx = new RegExp("^[A-Z]{2}[-][0-9]{1,2}[-][A-Z]{1,2}[-][0-9]{3,4}$")
    return regEx.test(str);
  }
  // license number validation
  const validateLicenseNumber = (str) => {
    const regExp = new RegExp("^[A-Z](?:\\d[- ]*){14}$");
    return regExp.test(str);
  }
  return (
    <RegistrationContext
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
        vehicleType,setVehicleType,
        vehicleNumber,setVehicleNumber,
        licenseNumber,setLicenseNumber,
        validateVehicleNumber,validateLicenseNumber,
        isRegistered , setIsRegistered,
      }}
    >
      {children}
    </RegistrationContext>
  );
};

export default RegistrationContext;
