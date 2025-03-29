import React, { useState } from "react";
import ApiCommodityList from "../components/ApiCommodityList";
import avatar from "../assets/avatar.svg";
import crops from "../assets/crops.svg";
import Frame from "../assets/Frame.svg";
import dabba from "../assets/orders-icon.svg";
import car from "../assets/commute.svg";
import Analytics from "../assets/Analytics.svg";
import MinMaxPriceCalculation from "../components/MinMaxPriceCalculation";
import { format, subDays } from "date-fns";

const FarmerProduceListing = () => {
  const [optionValue, setOptionValue] = useState("");
  const [marketPrice, setMarketPrice] = useState([]);
  const toDate = format(new Date(), "yyyy-MM-dd");
  const fromDate = format(subDays(toDate, 10), "yyyy-MM-dd");

  console.log("Commodity Value :", optionValue);

  const handleChange = (e) => {
    const commodityName = e.target.value;
    if (commodityName) {
      setOptionValue(commodityName);
      // for market commodity price data
      marketPriceData(commodityName);
    }
  };
  async function marketPriceData(value) {
    try {
      const PriceDataUrl = await fetch(
        "https://cors-proxy-vauu.onrender.com/https://enam.gov.in/web/Ajax_ctrl/trade_data_list",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            language: "en",
            stateName: "TAMIL NADU",
            apmcName: "-- Select APMCs --",
            commodityName: value,
            fromDate,
            toDate,
          }),
          redirect: "follow",
        }
      );
      const response = await PriceDataUrl.json();
      console.log(response);
      setMarketPrice(response.data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    // <div className=' flex justify-center items-center h-dvh '>
    <div className="flex-col border-(--secondary)   items-center p-2   bg-(--primary) justify-center justify-items-center  bottom-0 top-0 w-[100%]  m-0 me-0 fixed">
      <header className="flex rounded-xl h-[8vh] pt-2  bg-(--green) mt-5  w-90 text-xl  ">
        <h1 className=" flex font-bold font-inter pt-2  pb-2 ps-2 text-xl    justify-center w-[80%]">
          Rishi
        </h1>
        <div className=" pb-1 pe ">
          {" "}
          <img src={avatar} alt="avatar" />
        </div>
      </header>
      <div className="flex-col justify-center justify-items-center gap-2  font-inknut mt-8 text-2xl">
        <div className="flex ">
          <h1>Add Your Produce </h1>
          <div>
            <img src={crops} alt="crops" />
          </div>
        </div>
        <ApiCommodityList handleChange={handleChange} />
      </div>
      <div className=""></div>
      <div>
        <MinMaxPriceCalculation marketPrice={marketPrice} />
        <div className="mt-5 ">
          <p className="font-bold font-inter text-lg">PRICE ₹</p>
          <input
            type="text "
            placeholder="Enter Price"
            className=" mt-2 h-10 p-2 bg-(--teritary) w-90 text-lg"
          />
        </div>
        <div className="mt-5 ">
          <p className="font-bold font-inter text-lg">QUANTITY</p>
          <input
            type="text "
            placeholder="Enter Quantity"
            className=" mt-2 h-10 p-2 bg-(--teritary) w-90 text-lg"
          />
        </div>

        <div className="font-bold font-inter text-2xl w-25 ms-70 mt-10 rounded-xl p-1 bg-(--green) justify-items-center">
          <p className="flex gap-0.5">
            <img src={Frame} alt="frame" />
            Add
          </p>
        </div>
      </div>
      <footer className="flex w-dvw justify-center ">
        <div className=" flex h-16 rounded-3xl bg-(--green) w-100 py-2 absolute bottom-4 justify-center">
          <div className="ms-7 me-7 h-12 w-12 bg-white rounded-xl p-1">
            <img src={crops} alt="crops" />
          </div>
          <div className="ms-7 me-7 h-12 w-12 bg-white rounded-xl p-0.5">
            <img src={dabba} alt="order-icon" />
          </div>
          <div className="ms-7 me-7 h-12 w-12 bg-white rounded-xl p-1 pt-1.5">
            <img src={car} alt="commute" />
          </div>
          <div className="ms-7 me-7 h-12 w-12 bg-white rounded-xl p-1 pt-2">
            <img src={Analytics} alt="analytics" />
          </div>
        </div>
      </footer>
    </div>

    // </div>
  );
};

export default FarmerProduceListing;
