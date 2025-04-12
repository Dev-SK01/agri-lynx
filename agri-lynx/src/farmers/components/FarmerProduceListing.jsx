import React, { useState } from "react";
import ApiCommodityList from "./ApiCommodityList";
import crops from "../../assets/crops.svg";
import Frame from "../../assets/Frame.svg";
import MinMaxPriceCalculation from "./MinMaxPriceCalculation";
import { format, subDays } from "date-fns";
import Footer from "./Footer";
import Header from "./Header";
import { toast } from "react-toastify";

const FarmerProduceListing = () => {
  let produceDetails;
  const [optionValue, setOptionValue] = useState("");
  const [marketPrice, setMarketPrice] = useState({
    minPrice: 0.0,
    maxPrice: 0.0,
  });
  const [inputPrice, setInputPrice] = useState("");
  const [inputQuantity, setInputQuantity] = useState("");
  const toDate = format(new Date(), "yyyy-MM-dd");
  const fromDate = format(subDays(toDate, 10), "yyyy-MM-dd");

  // console.log("Commodity Value :", optionValue);

  const handleChange = (e) => {
    const commodityName = e.target.value;
    setOptionValue(commodityName);
    if (commodityName) {
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
      // minMax price calculation
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
          minPrice: (minPrice / marketPrice.length / 100).toFixed(2),
          maxPrice: (maxPrice / marketPrice.length / 100).toFixed(2),
        };
      };
      setMarketPrice(() => priceCalculation(response.data));
    } catch (err) {
      console.error(err);
    }
  }
  const fetchImage = async (commodity) => {
    const SECRET_KEY = "tZgxfcaCQfk66V1uKAGMIOwwUMmK-IH2qEniGtwDfTc";
    try {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?&query=${commodity.toLowerCase()}&client_id=${SECRET_KEY}`
      );
      const data = await res.json();
      // console.log(data);
      return data.results[0].urls.small;
    } catch (err) {
      if (err) alert("Image not found!");
    }
  };
  // console.log(optionValue);
  
  async function handleAddProduce() {
    console.log(optionValue);
    
    if (!optionValue) {
      toast.error("Please Select the commodity Name", {
        toastId: "toast",
      });
    } else {
      if (
        inputPrice === null ||
        inputPrice === "" ||
        inputQuantity === null ||
        inputQuantity === ""
      ) {
        toast.error("Please Enter Correct Details..", {
          toastId: "toast",
        });
      } else {
        produceDetails = {
          commoditity: optionValue,
          minPrice: marketPrice.minPrice,
          maxPrice: marketPrice.maxPrice,
          price: inputPrice,
          quantity: inputQuantity,
          imageUrl: await fetchImage(optionValue),
          listingId: "h2hf6rhr8bdfu6hf073",
          farmerId: "u8hr63h8fe839fh384",
        };

        try {
          // backend api
          const res = await fetch("", {
            method: "POST",
            body: produceDetails,
          });
        } catch (err) {
          console.log(err.message);
        }
        toast.success("Produce Data Added Successfully ", {
          toastId: "toast",
        });
        console.log("ProduceData : ", produceDetails);
      }
    }
  }
  return (
    // <div className=' flex justify-center items-center h-dvh '>
    <div className="flex-col border-(--secondary)   items-center p-2   bg-(--primary) justify-center justify-items-center  bottom-0 top-0   m-0 me-0 ">
      <Header />
      <div className="flex-col justify-center justify-items-center gap-2 h-[13dvh] font-inknut mt-8 text-2xl">
        <div className="flex ">
          <h1>Add Your Produce </h1>
          <div>
            <img src={crops} alt="crops" />
          </div>
        </div>
        <ApiCommodityList handleChange={handleChange} />
      </div>
      <div className=""></div>
      <div className="h-[49dvh]">
        <MinMaxPriceCalculation marketPrice={marketPrice} />
        <div className="mt-5 ">
          <p className="font-bold font-inter text-lg">PRICE ₹</p>
          <input
            type="number"
            onChange={(e) => setInputPrice(e.target.value)}
            value={inputPrice}
            placeholder="Enter Price"
            className=" mt-2 h-10 p-2 bg-(--teritary) w-90 text-lg"
          />
        </div>
        <div className="mt-5 ">
          <p className="font-bold font-inter text-lg">QUANTITY (KG)</p>
          <input
            type="number"
            onChange={(e) => setInputQuantity(e.target.value)}
            value={inputQuantity}
            placeholder="Enter Quantity (KG)"
            className=" mt-2 h-10 p-2 bg-(--teritary) w-90 text-lg"
          />
        </div>

        <div
          onClick={handleAddProduce}
          className="font-bold font-inter text-2xl w-25 ms-70 mt-10 rounded-xl p-1 bg-(--green) justify-items-center"
        >
          <p className="flex gap-0.5">
            <img src={Frame} alt="frame" />
            Add
          </p>
        </div>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>

    // </div>
  );
};

export default FarmerProduceListing;
