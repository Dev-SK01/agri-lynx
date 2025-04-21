import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format, subDays } from "date-fns";
import { toast } from "react-toastify";
import Toast from "@/utils/toast";

const ApiCommodityList = ({ handleChange }) => {

  const toDate = format(new Date(), "yyyy-MM-dd");
  const fromDate = format(subDays(toDate, 15), "yyyy-MM-dd");

  async function getCommodityList() {
    try {
      const response = await fetch(
        "https://cors-proxy-vauu.onrender.com/https://enam.gov.in/web/Ajax_ctrl/commodity_list",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            language: "en",
            stateName: "-- All --",
            apmcName: "-- Select APMCs --",
            fromDate,
            toDate
          }),
        }
      );
      const apiCommodityList = await response.json();
      // console.log(apiCommodityList);
      setCommodityList(apiCommodityList.data);
    } catch (err) {
      Toast(toast.error,err.message);
    }
  }
  
  const [commodityList, setCommodityList] = useState([]);
  // console.log(commodityList);

  useEffect(() => {
    getCommodityList();
  }, []);
  // console.log(optionValue);

  return (
    <>
      {/* select dropdown for user selection disabled={isOtpVerified?true:false} */}
      <Select onValueChange={(value) => handleChange(value)}>
        <SelectTrigger className="w-[80%] pb-3 pt-3 mt-5 bg-(--green) font-inter font-bold text-black shadow-[3px_3px_0px_0px_var(--secondary)] ">
          <SelectValue placeholder="Select Commodity" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup className="font-inter font-bold">
            <SelectLabel>Commodity</SelectLabel>
            {commodityList.map((data, index) => (
            <SelectItem value={data.commodity} key={index}>
              {data.commodity}
            </SelectItem>
        ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

export default ApiCommodityList;
