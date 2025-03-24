import React from "react";
import { HashLoader } from "react-spinners";

const Loader = () => {  
  return (
    <div 
    className="h-[100vh] w-[100vw] flex items-center justify-center absolute z-10 top-0 backdrop-blur-[5px]">
      <HashLoader
        color="#4CA14D"
        loading={true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
