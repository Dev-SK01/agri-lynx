import React from "react";
import Registration from "./registration/Registration";
import { RegistrationContextProvider } from "./registration/context/RegistrationContext";
import { ToastContainer, Slide } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
function App() {
  return (
    <>
      <RegistrationContextProvider>
        <Routes>
          <Route path="/" element={<Registration />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
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
