import React from "react";
import Registration from "./registration/Registration";
import { RegistrationContextProvider } from "./registration/context/RegistrationContext";
import { ToastContainer, Slide } from "react-toastify";

function App() {
  return (
    <>
      <RegistrationContextProvider>
        <Registration />
      </RegistrationContextProvider>
      {/* toast container */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </>
  );
}

export default App;
