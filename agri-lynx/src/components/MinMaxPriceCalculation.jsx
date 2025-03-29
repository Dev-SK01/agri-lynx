import React, { useState } from "react";

const MinMaxPriceCalculation = ({ marketPrice }) => {
  console.log(marketPrice);
  
  const priceCalculation = (marketPrice) => {
    let minPrice = 0;
    let maxPrice = 0;
    marketPrice.forEach((commodity) => {
      minPrice += Number(commodity.min_price);
      maxPrice += Number(commodity.max_price);
      // console.log("Min:", commodity?.min_price);
      // console.log("Max:", commodity?.max_price);
    });    
    return {
        minPrice:Math.floor(minPrice / marketPrice.length),
        maxPrice :Math.floor(maxPrice / marketPrice.length)
    }
  };
  const priceData = priceCalculation(marketPrice);  
  console.log(priceData);
  
  return (
    <>
      <div className="mt-13  ">
        <p className="font-bold font-inter text-lg">MARKET PRICE RANGE ₹</p>
        <input
          type="text"
          className=" mt-2 h-10 p-1 bg-(--teritary) font-bold text-(--secondary) w-90"
          value={priceData.minPrice + " - " + priceData.maxPrice}
          disabled = {true}
        />
      </div>
    </>
  );
};

export default MinMaxPriceCalculation;
