import React, { useContext } from "react";
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
import { Key } from "lucide-react";

const AnalyticsHistory = () => {
  const { farmerProduces } = useContext(FarmerContext);

  const handleOrderHistory = (value) => {
    console.log(value);
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
          onValueChange={(value) => handleOrderHistory(value)}
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
              {farmerProduces?.map((produce,index) => (
                <SelectItem value={produce.commodity.toLowerCase()} key={index}>
                  {produce.commodity}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <HistoryLineChart />
      </div>
    </>
  );
};

export default AnalyticsHistory;
