import React, { useContext, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FarmerContext from "../context/FarmerContext";
import HistoryLineChart from "./HistoryLineChart";
import Toast from "@/utils/toast";
import { toast } from "react-toastify";


const AnalyticsHistory = () => {
  
  const { farmerProduces,farmerData , produceList} = useContext(FarmerContext);
  const [analyticsData,setAnalyticsData] = useState([]);
  
  const dummyData = [
    {
      month: "Jan",
      orders: 30,
      cancelled: 7,
      delivered: 20,
    },
    {
      month: "Feb",
      orders: 13,
      cancelled: 24,
      delivered: 34,
    },
    {
      month: "Mar",
      orders: 98,
      cancelled: 24,
      delivered: 34,
    },
    {
      month: "Apr",
      orders: 39,
      cancelled: 24,
      delivered: 34,
    },
    {
      month: "May",
      orders: 32,
      cancelled:12,
      delivered: 20,
    },
    {
      month: "June",
      orders: 26,
      cancelled: 6,
      delivered: 20,
    },
    {
      month: "July",
      orders: 98,
      cancelled: 8,
      delivered: 90,
    },
    {
      month: "Aug",
      orders: 64,
      cancelled: 10,
      delivered: 54,
    },
    {
      month: "Sep",
      orders: 65,
      cancelled: 5,
      delivered: 60,
    },
    {
      month: "Oct",
      orders: 70,
      cancelled: 0,
      delivered: 34,
    },
    {
      month: "Nov",
      orders: 22,
      cancelled: 12,
      delivered: 20,
    },
    {
      month: "Dec",
      orders: 34,
      cancelled: 0,
      delivered: 10,
    },
  ];

  const handleOrderHistory = (commodity) => {
    const commodityName = commodity.toLowerCase().replace(/\s/g, "");
    const farmerId = farmerData?.farmerId;
    try{
    const req = `${farmerId}/${commodityName}`;
    const res = dummyData;
    if(res){
      setAnalyticsData(res);
      Toast(toast.success,"fetched Successfully");
    }else{
      Toast(toast.error,"Error In fetching Data!");
    }
    }catch(err){
      Toast(toast.error,err.message);
    }
  };

  return (
    <>
      <div className="mt-4 ">
        <span className="font-bold font-inter bg-(--green) text-2xl px-4 py-[.2rem] border-1 border-black rounded-md">
          YOUR HISTORY
        </span>
      </div>
      <div className="w-full flex items-center justify-center flex-col mt-4">
        <Select
          className="text-black text-center"
          onValueChange={(commodity) => handleOrderHistory(commodity)}
        >
          <SelectTrigger className="w-[180px] pb-3 pt-3 mt-5 bg-(--green) font-inter font-bold text-black">
            <SelectValue
              placeholder="Select Commodity"
              className="text-black text-center"
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="font-inter font-bold">
              <SelectLabel>Your Commodity's</SelectLabel>
              {produceList?.map((produce,index) => (
                <SelectItem value={produce?.commodity.toLowerCase()} key={index}>
                  {produce?.commodity}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <HistoryLineChart analyticsData={analyticsData}/>
      </div>
    </>
  );
};

export default AnalyticsHistory;
