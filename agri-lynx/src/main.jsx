import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { RegistrationContextProvider } from "./registration/context/RegistrationContext";
import { FarmerContextProvider } from "./farmers/context/FarmerContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <FarmerContextProvider>
        <RegistrationContextProvider>
          <App className="scroll-smooth" />
        </RegistrationContextProvider>
      </FarmerContextProvider>
    </BrowserRouter>
  </StrictMode>
);
