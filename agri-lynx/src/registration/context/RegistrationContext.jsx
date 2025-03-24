import { createContext, useState } from "react";
import { toast } from "react-toastify";
import Toast from "../../utils/toast";
import { useNavigate } from "react-router-dom";

const RegistrationContext = createContext({});

export const RegistrationContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isCodeSent, setCodeSent] = useState(false);
  const [isOtpVerified, setOtpVerified] = useState(false);
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
  const [ifscCode, setIfscCode] = useState("IOBA0001872");
  const [accountNumber, setAccountNumber] = useState("1234567");
  const [accountHolderName, setAccountHolderName] = useState("ahn");
  const [bankName, setBankName] = useState("");
  const [bankBranch, setBankBranch] = useState("");
  const [upiId, setUpiId] = useState("@");
  // vehicle details states
  const [vehicleType, setVehicleType] = useState("vt");
  // TN-90-AZ-8491
  const [vehicleNumber, setVehicleNumber] = useState("");
  // D6101-40706-60905
  const [licenseNumber, setLicenseNumber] = useState("");
  // user data states
  const [userData, setUserData] = useState();
  // email validation function
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  // vehicle number validation
  const validateVehicleNumber = (str) => {
    const regEx = new RegExp(
      "^[A-Z]{2}[-][0-9]{1,2}[-][A-Z]{1,2}[-][0-9]{3,4}$"
    );
    return regEx.test(str);
  };
  // license number validation
  const validateLicenseNumber = (str) => {
    const regExp = new RegExp("^[A-Z](?:\\d[- ]*){14}$");
    return regExp.test(str);
  };
  // clear form function after register / login
  const clearForm = () => {
    setEmail("");
    setCodeSent(false);
    setOtp();
    setOtpVerified(false);
    setUserType("");
    setName("");
    setPhoneNumber("");
    setAlternatePhoneNumber("");
    setAddress("");
    setTaluk("");
    setDistrict("");
    setState("");
    SetPincode("");
    setIfscCode("");
    setAccountNumber("");
    setAccountHolderName("");
    setBankName("");
    setBankBranch("");
    setVehicleType("");
    setVehicleNumber("");
    setLicenseNumber("");
  };
  // registration handlers backend api for isRegistered
  const handleRegisteredUser = (email) => {
    const response = false;
    // send true or false from backend if user presents
    if (response) {
      return true;
    } else {
      return false;
    }
  };
  const handleEmailVerification = () => {
    // validating email
    if (validateEmail(email)) {
      // checking user is registered
      const isRegistered = handleRegisteredUser(email);
      if (!isRegistered) {
        // email otp api implementation
        setCodeSent(true);
        // otp sent message
        Toast(toast.success, "OTP sent Successfully");
      } else {
        Toast(toast.error, "User Already Registered! LOGIN");
        clearForm();
        navigate("login");
      }
    } else {
      Toast(toast.error, "Enter Proper Email!");
    }
  };
  const verifyOtp = () => {
    if (!otp || otp.length !== 6) {
      Toast(toast.error, "Enter OTP!");
    } else {
      // otp verification api
      setOtpVerified(true);
      Toast(toast.success, "OTP Verified");
    }
  };
  const handleUserLogin = () => {
    // validating email
    if (validateEmail(email)) {
      // checking user is registered
      const isRegistered = handleRegisteredUser(email);
      if (isRegistered) {
        // email otp api implementation
        setCodeSent(true);
        // otp sent message
        Toast(toast.success, "OTP sent Successfully");
      } else {
        Toast(toast.error, "User Not Registered!");
        clearForm();
        navigate("/");
      }
    } else {
      Toast(toast.error, "Enter Proper Email!");
    }
  };
  const loginOtpVerify = () => {
    if (!otp || otp.length !== 6) {
      Toast(toast.error, "Enter OTP!");
    } else {
      // otp verification api for login 
      setOtpVerified(true);
      const response = {userId:"123456789",userType};
      setUserData(response);
      Toast(toast.success, "Logging In...");
      if (userType === "farmer") {
        navigate("farmerdashboard");
      } else if (userType === "market") {
        navigate("localmarketdashboard");
      } else {
        navigate("logisticdashboard");
      }
    }
  };
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
        address,
        setAddress,
        taluk,
        setTaluk,
        district,
        setDistrict,
        state,
        setState,
        pincode,
        SetPincode,
        ifscCode,
        setIfscCode,
        accountNumber,
        setAccountNumber,
        accountHolderName,
        setAccountHolderName,
        bankName,
        setBankName,
        bankBranch,
        setBankBranch,
        upiId,
        setUpiId,
        vehicleType,
        setVehicleType,
        vehicleNumber,
        setVehicleNumber,
        licenseNumber,
        setLicenseNumber,
        validateVehicleNumber,
        validateLicenseNumber,
        clearForm,
        handleEmailVerification,
        verifyOtp,
        handleUserLogin,
        loginOtpVerify,
        userData,
        setUserData,
      }}
    >
      {children}
    </RegistrationContext>
  );
};

export default RegistrationContext;
