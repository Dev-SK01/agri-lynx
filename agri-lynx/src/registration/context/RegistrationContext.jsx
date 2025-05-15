import { createContext, useState } from "react";
import { toast } from "react-toastify";
import Toast from "../../utils/toast";
import { useNavigate } from "react-router-dom";
import Loader from "@/utils/Loader";

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
  const [shopName,setShopName] = useState(""); 
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
  const [isLoading, setIsLoading] = useState(false);
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
  // registration handlers backend api
  const handleRegisteredUser = async (email, userType) => {
    try {
      const req = await fetch(
        import.meta.env.VITE_API_BASE_URL + "/checkuser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            type: userType,
          }),
        }
      );
      const response = await req.json();
      // send true or false from backend if user presents
      return response.isRegistered;
    } catch (err) {
      Toast(toast.error, err.message);
    }
  };
  // registration handlers backend api
  const handleEmailVerification = async () => {
    try {
      // validating email
      setIsLoading(true);
      if (validateEmail(email)) {
        // checking user is registered
        const isRegistered = await handleRegisteredUser(email, userType);
        if (!isRegistered) {
          // email otp api implementation
          const req = await fetch(
            import.meta.env.VITE_API_BASE_URL + "/sendotp",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email }),
            }
          );
          const response = await req.json();
          setCodeSent(response.isCodeSent);
          // send true or false from backend if otp sent
          if (response.isCodeSent) {
            // otp sent message
            Toast(toast.success, "OTP sent Successfully");
          } else {
            Toast(toast.error, "OTP not sent");
          }
        } else {
          Toast(toast.error, "User Already Registered! LOGIN");
          clearForm();
          navigate("login");
        }
      } else {
        Toast(toast.error, "Enter Proper Email!");
      }
      // loading for user experience
      setIsLoading(false);
    } catch (err) {
      Toast(toast.error, err.message);
    }
  };
  const verifyOtp = async () => {
    try {
      if (!otp || otp.length !== 6) {
        Toast(toast.error, "Enter OTP!");
      } else {
        // otp verification api
        const req = await fetch(
          import.meta.env.VITE_API_BASE_URL + `/verifyotp?otp=${otp}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const response = await req.json();
        // send true or false from backend if otp verified
        if (!response.verified) {
          Toast(toast.error, "OTP Not Verified!");
          setOtpVerified(response.verified);
          setIsLoading(false);
        } else {
          // otp verified message
          Toast(toast.success, "OTP Verified");
          setOtpVerified(true);
          setIsLoading(true);
          // loading for user experience
          setTimeout(() => setIsLoading(false), 2000);
        }
      }
    } catch (err) {
      Toast(toast.error, err.message);
    }
  };
  const handleUserLogin = async () => {
    try {
      // validating email
      setIsLoading(true);
      if (validateEmail(email)) {
        // checking user is registered
        const isRegistered = await handleRegisteredUser(email, userType);
        if (isRegistered) {
          // email otp api implementation
          const req = await fetch(
            import.meta.env.VITE_API_BASE_URL + "/sendotp",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email }),
            }
          );
          const response = await req.json();
          // loading for user experience
          setCodeSent(response.isCodeSent);
          if (response.isCodeSent) {
            // otp sent message
            Toast(toast.success, "OTP sent Successfully");
          } else {
            Toast(toast.error, "OTP not sent");
          }
        } else {
          Toast(toast.error, "Email Not Registered !");
          clearForm();
          navigate("/");
        }
      } else {
        Toast(toast.error, "Enter Proper Email!");
      }
      setIsLoading(false);
    } catch (err) {
      Toast(toast.error, err.message);
    }
  };
  const loginOtpVerify = () => {
    if (!otp || otp.length !== 6) {
      Toast(toast.error, "Enter OTP!");
    } else {
      try {
        // otp verification api for login
        setOtpVerified(true);
        // setIsLoading(true);
        // loading for user experience
        // setTimeout(() => setIsLoading(false), 2500);
        Toast(toast.success, "Logging In....");
        // get userType and userId from api
        const response = { userId: "681af61b3fd120a3eccd5f6d", userType };
        setUserData(response);
        // localstorage for user data
        localStorage.setItem("userData", JSON.stringify(response));
        // navigatin user based on their type
        if (userType === "farmer") {
          navigate("farmerdashboard");
          setOtpVerified(false);
        } else if (userType === "market") {
          navigate("localmarketdashboard");
          setOtpVerified(false);
        } else {
          navigate("logisticdashboard");
          setOtpVerified(false);
        }
      } catch (err) {
        Toast(toast.error, err.message);
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
        shopName,
        setShopName,
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
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </RegistrationContext>
  );
};

export default RegistrationContext;
