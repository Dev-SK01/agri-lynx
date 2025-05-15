import React, { useContext, useState } from "react";
import ApiCommodityList from "./ApiCommodityList";
import crops from "../../assets/crops.svg";
import Frame from "../../assets/Frame.svg";
import MinMaxPriceCalculation from "./MinMaxPriceCalculation";
import { format, subDays } from "date-fns";
import { toast } from "react-toastify";
import Navigation from "./Navigation";
import BottomNavigation from "./BottomNavigation";
import useUid from "@/hook/useUid";
import Toast from "@/utils/toast";
import FarmerContext from "../context/FarmerContext";
import { useNavigate } from "react-router-dom";

const FarmerProduceListing = () => {
  const {
    farmerData,
    produceList,
    setProduceList,
    setProduceDetails,
    setFarmerData,
  } = useContext(FarmerContext);
  const navigate = useNavigate();
  const [optionValue, setOptionValue] = useState("");
  const [marketPrice, setMarketPrice] = useState({
    minPrice: 0.0,
    maxPrice: 0.0,
  });
  const [inputPrice, setInputPrice] = useState("");
  const [inputQuantity, setInputQuantity] = useState("");
  const toDate = format(new Date(), "yyyy-MM-dd");
  const fromDate = format(subDays(toDate, 15), "yyyy-MM-dd");
  // console.log("Commodity Value :", optionValue);

  const handleChange = (value) => {
    const commodityName = value;
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
        marketPrice?.forEach((commodity) => {
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
      if (err) Toast(toast.error, "Image not found!");
    }
  };

  async function handleAddProduce() {
    // console.log(optionValue);
    // console.log(produceDetails);
    // resetting state
    setProduceDetails();
    if (!optionValue) {
      toast.error("Please Select the commodity Name", {
        toastId: "toast",
      });
    } else {
      if (!inputPrice || !inputQuantity) {
        toast.error("Please Enter Correct Details..", {
          toastId: "toast",
        });
      } else {
        let __newProduceData = {
          commodity: optionValue,
          minPrice: marketPrice.minPrice,
          maxPrice: marketPrice.maxPrice,
          price: inputPrice,
          quantity: inputQuantity,
          imageUrl: await fetchImage(optionValue) || optionValue,
          listingId: useUid(),
          farmer: {
            farmerId: farmerData._id,
            name: farmerData.name,
            phoneNumber: farmerData.phoneNumber,
            address: farmerData.address,
            taluk: farmerData.taluk,
            district: farmerData.district,
            pincode: farmerData.pincode,
            upiId: farmerData.upiId,
            postOffice: "post",
            village: "village",
          },
        };
        console.log(__newProduceData);
        try {
          // backend api
          const req = await fetch(
            import.meta.env.VITE_API_BASE_URL + "/farmer/createproduce",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(__newProduceData),
            }
          );
          const res = await req.json();
          if (res.isCreated) {
            toast.success("Produce Added successFully", {
              toastId: "toast",
            });
            // copying the farmer data
            const __FarmerData = farmerData;
            __FarmerData.produceList.push(__newProduceData);
            setFarmerData(__FarmerData);
            // new update state
            setProduceList(produceList);
            setTimeout(() => navigate("/"), 2000);
            // console.log([...produceList,produceDetails]);
          } else {
            toast.error("Cannot Add Produce", {
              toastId: "toast",
            });
          }
        } catch (err) {
          toast.error(err.message, {
            toastId: "toast",
          });
          console.log(err.message);
        }
        // console.log("ProduceData : ", produceDetails);
      }
    }
  }

  return (
    <>
      <div className=" flex justify-center items-center flex-col">
        <div className="flex-col border-(--secondary)   items-center p-2   bg-(--primary) justify-center justify-items-center mt-2 ">
          <Navigation />
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
          <div className="h-[55dvh]">
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
        </div>
        <BottomNavigation />
      </div>
    </>
  );
};

export default FarmerProduceListing;
