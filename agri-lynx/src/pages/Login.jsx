import React, { useContext } from "react";
import Container from "@/registration/components/Container";
import Header from "@/registration/components/Header";
import RegistrationContext from "@/registration/context/RegistrationContext";

const Login = () => {
  const {handleUserLogin,loginOtpVerify} = useContext(RegistrationContext);
  return (
    <Container>
      <Header
        verificationHandler={handleUserLogin}
        headerType={"LOGIN"}
        otpHandler={loginOtpVerify}
      />
    </Container>
  );
};

export default Login;
