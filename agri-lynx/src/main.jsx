import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { RegistrationContextProvider } from "./registration/context/RegistrationContext";
import { FarmerContextProvider } from "./farmers/context/FarmerContext";
import { FarmerLogisticsContextProvider } from "./farmers/context/FarmerLogisticsContext";

const dWidth = window.innerWidth;

// screen orientation lock
if (screen.orientation) {
  screen.orientation.lock("portrait").catch((error) => {
    console.error("Error locking orientation:", error);
  });
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <RegistrationContextProvider>
        <FarmerContextProvider>
          <FarmerLogisticsContextProvider>
            {dWidth >= 640 ? (
              <div className="flex justify-center items-center w-full h-dvh">
                <h1 className="text-2xl font-bold text-gray-800">
                  Please use a mobile device to access this application.
                </h1>
              </div>
            ) : (
              <App className="scroll-smooth" />
            )}
          </FarmerLogisticsContextProvider>
        </FarmerContextProvider>
      </RegistrationContextProvider>
    </BrowserRouter>
  </StrictMode>
);
