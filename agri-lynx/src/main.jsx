import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { RegistrationContextProvider } from "./registration/context/RegistrationContext";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <RegistrationContextProvider>
        <App />
      </RegistrationContextProvider>
    </BrowserRouter>
  </StrictMode>
);
