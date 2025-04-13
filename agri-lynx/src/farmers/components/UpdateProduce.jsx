import React, { useContext, useEffect, useState } from "react";
import { format, subDays } from "date-fns";
import { useNavigate, useParams } from "react-router-dom";
import Toast from "@/utils/toast";
import { toast } from "react-toastify";
import crops from "../../assets/crop.svg";
import updateIcon from "../../assets/update.svg";
import BottomNavigation from "./BottomNavigation";
import Navigation from "./Navigation";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import FarmerContext from "../context/FarmerContext";

const UpdateProduce = () => {
  const { farmerData, produceList, setProduceList } = useContext(FarmerContext);
  const { listingId } = useParams();
  const navigate = useNavigate();
  
  const produceData = produceList.filter(Boolean).filter((produce) => {
    if (listingId.toLowerCase() === produce.listingId.toLowerCase()) {
      return produce;
    }
  });

  const [updatedPrice, setUpdatedPrice] = useState(produceData[0]?.price);
  const [updatedMarketPrice, setUpdatedMarketPrice] = useState({
    minPrice: "0.00",
    maxPrice: "0.00",
  });
  const [updatedQuantity, setUpdatedQuantity] = useState(produceData[0]?.quantity);
  const toDate = format(new Date(), "yyyy-MM-dd");
  const fromDate = format(subDays(toDate, 10), "yyyy-MM-dd");
  // console.log({updatedPrice,updatedQuantity,updatedMarketPrice,});

  async function minMaxPriceCalculation(value) {
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
            stateName: "-- All --",
            apmcName: "-- Select APMCs --",
            commodityName: value,
            fromDate,
            toDate,
          }),
          redirect: "follow",
        }
      );
      const response = await PriceDataUrl.json();
      // console.log(response);
      // minMax price calculation
      const priceCalculation = (marketPrice) => {
        let minPrice = 0;
        let maxPrice = 0;
        marketPrice.forEach((commodity) => {
          minPrice += Number(commodity.min_price);
          maxPrice += Number(commodity.max_price);
        });
        return {
          minPrice: (minPrice / marketPrice.length / 100).toFixed(2),
          maxPrice: (maxPrice / marketPrice.length / 100).toFixed(2),
        };
      };
      setUpdatedMarketPrice(() => priceCalculation(response.data));
    } catch (err) {
     Toast(toast.error,err.message);
    }
  }

  const updateFarmerProduce = () => {
    // updating price
   produceData[0].price = updatedPrice;
   produceData[0].quantity = updatedQuantity;
   produceData[0].minPrice = updatedMarketPrice.minPrice;
   produceData[0].maxPrice = updatedMarketPrice.maxPrice;

   const remainingProduceData = produceList?.filter((produce) => {
    if (listingId.toLowerCase() !== produce.listingId.toLowerCase()) {
      return produce;
    }
  });
    // console.log(produceData[0]);
    try {
      // update backend api
      const res = listingId;
      if (res) {
        Toast(toast.success, "Updated Successfully.");
        // navigating to home after updation and reversing  array 
        setProduceList([...remainingProduceData,produceData[0]].reverse())
        setTimeout(() => navigate("/"), 2000);
      }
    } catch (err) {
      Toast(toast.error, err.messsage);
    }
  };

  useEffect(() => {
    minMaxPriceCalculation(produceData[0].commodity);
  }, []);

  return (
    <div className="flex items-center justify-center flex-col mt-4">
      <div className="w-[95%] h-[22vh] mt-2 flex items-center justify-center flex-col">
        <Navigation />
        <div className="justify-center items-center gap-2  font-inknut mt-8 text-2xl flex">
          <h1>Update Your Produce</h1>
          <img src={crops} alt="crops" />
        </div>
        <Select className="text-black text-center" disabled={true}>
          <SelectTrigger className="w-[150px] pb-3 pt-3 mt-5 bg-(--green) font-inter font-bold text-black  ">
            <SelectValue
              placeholder={produceData[0]?.commodity}
              className="text-black text-center"
            />
          </SelectTrigger>
        </Select>
      </div>
      <div className="w-[95%] overflow-auto h-[64vh] rounded-md scrollbar flex-col flex items-center">
        {/* market price range */}
        <div className="mt-13">
          <p className="font-bold font-inter text-lg">MARKET PRICE RANGE ₹</p>
          <input
            type="text"
            className=" mt-2 h-10 p-1 bg-(--teritary) font-inter font-bold text-xl text-(--secondary) w-90"
            value={
              "  ₹" +
              updatedMarketPrice.minPrice +
              " - " +
              " ₹" +
              updatedMarketPrice.maxPrice
            }
            disabled={true}
          />
        </div>
        {/* commodity price */}
        <div className="mt-5 ">
          <p className="font-bold font-inter text-lg">PRICE ₹</p>
          <input
            type="number"
            value={updatedPrice}
            onChange={(e) => setUpdatedPrice(e.target.value)}
            placeholder="Enter Price"
            className=" mt-2 h-10 p-2 bg-(--teritary) w-90 text-lg"
          />
          {/* commodity quantity */}
        </div>
        {/* commodity quantity */}
        <div className="mt-5">
          <p className="font-bold font-inter text-lg">QUANTITY (KG)</p>
          <input
            type="number"
            onChange={(e) => setUpdatedQuantity(e.target.value)}
            value={updatedQuantity}
            placeholder="Enter Quantity (KG)"
            className=" mt-2 h-10 p-2 bg-(--teritary) w-90 text-lg"
          />
        </div>

        <div
          className="font-bold font-inter text-2xl w-35 ms-60 mt-10 rounded-xl p-1 bg-(--green) justify-items-center"
          onClick={updateFarmerProduce}
        >
          <p className="flex gap-1">
            <img src={updateIcon} alt="frame" />
            Update
          </p>
        </div>
      </div>
      {/* bottom navigation menu */}
      <BottomNavigation />
    </div>
  );
};

export default UpdateProduce;
