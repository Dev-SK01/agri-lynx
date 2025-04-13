import React, { useContext, useEffect, useState } from "react";
import { format, subDays } from "date-fns";

const ApiCommodityList = ({ handleChange }) => {

  const toDate = format(new Date(), "yyyy-MM-dd");
  const fromDate = format(subDays(toDate, 10), "yyyy-MM-dd");

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
      console.log(err.message);
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
      <select
        onChange={handleChange}
        name="commodity-list"
        id="commodity-list "
        className="bg-(--green) rounded-2xl p-1 text-xl font-inter font-bold ps-3 mt-6 h-[5.5dvh] w-60 border-e-4 border-b-4 border-(--secondary)"
      >
        <option value="">Select Commodity</option>
        {commodityList.map((data, index) => (
          <>
            <option value={data.commodity} key={index}>
              {data.commodity}
            </option>
          </>
        ))}
      </select>
    </>
  );
};

export default ApiCommodityList;
