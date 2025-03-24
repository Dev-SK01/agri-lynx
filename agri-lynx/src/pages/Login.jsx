import React, { useContext } from "react";
import Container from "@/registration/components/Container";
import Header from "@/registration/components/Header";
import RegistrationContext from "@/registration/context/RegistrationContext";
import bottomBg from "../assets/login-bottom-bg.svg"
const Login = () => {
  const {handleUserLogin,loginOtpVerify} = useContext(RegistrationContext);
  return (
    <Container>
      <Header
        verificationHandler={handleUserLogin}
        headerType={"LOGIN"}
        otpHandler={loginOtpVerify}
      />
      <img src={bottomBg} alt="login-bottom-bg" className="mt-10"/>
    </Container>
  );
};

export default Login;
