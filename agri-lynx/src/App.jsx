import React from "react";
import FarmerRegistration from "./farmers/FarmerRegistration";
import { FarmerContextProvider } from "./farmers/context/FarmerContext";

function App() {
  return (
    <FarmerContextProvider>
      <FarmerRegistration />
    </FarmerContextProvider>
  );
}

export default App;
