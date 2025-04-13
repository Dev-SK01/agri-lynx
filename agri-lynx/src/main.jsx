import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { RegistrationContextProvider } from "./registration/context/RegistrationContext";
import { FarmerContextProvider } from "./farmers/context/FarmerContext";
import { FarmerLogisticsContextProvider } from "./farmers/context/FarmerLogisticsContext";
import { LogisticContextProvider } from './logistics/context/LogisticContext'
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <RegistrationContextProvider>
        <FarmerContextProvider>
          <FarmerLogisticsContextProvider>
            <App className="scroll-smooth" />
          </FarmerLogisticsContextProvider>
        </FarmerContextProvider>
      </RegistrationContextProvider>
    </BrowserRouter>
  </StrictMode>
);
