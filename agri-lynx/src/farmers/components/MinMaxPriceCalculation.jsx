import React from "react";

const MinMaxPriceCalculation = ({ marketPrice }) => {  
  return (
    <>
      <div className="mt-13  ">
        <p className="font-bold font-inter text-lg">MARKET PRICE RANGE ₹</p>
        <input
          type="text"
          className=" mt-2 h-10 p-1 bg-(--teritary) font-inter font-bold text-xl text-(--secondary) w-90"
          value={"  ₹" + marketPrice.minPrice + " - " +" ₹"+ marketPrice.maxPrice}
          disabled = {true}
        />
      </div>
    </>
  );
};

export default MinMaxPriceCalculation;
