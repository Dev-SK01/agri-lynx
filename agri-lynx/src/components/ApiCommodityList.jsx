import React, { useState } from "react";
import data from "./../farmers/data.json";
import axios from "axios";
const ApiCommodityList = () => {
  const commodityData = JSON.parse(JSON.stringify(data));
  const params = new URLSearchParams();
  params.append("language", "en");
  params.append("stateName", "TAMIL NADU");
  params.append("apmcName", "-- Select APMCs --");
  params.append("fromDate", "2025-02-28");
  params.append("toDate", "2025-02-28");
      
  async function apiCall() {
    const response = await axios.post(
      "https://cors-anywhere.herokuapp.com/https://enam.gov.in/web/Ajax_ctrl/commodity_list",
      params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded,charset=UTF-8",
        },
        crossdomain: true,
      }
    );
    const apiCommodityList = await response.data;
    console.log(apiCommodityList);
  }
  apiCall();
  const [commodityList, setCommodityList] = useState(new Option(length));
  return (
    <>
      <select
        name="commodity-list"
        id="commodity-list "
        className="bg-(--green) rounded-2xl p-1 text-1xl font-inter font-bold ps-3 mt-6 h-10 w-50 border-e-4 border-b-4 border-(--secondary)"
      >
        <option value={0}>Select Commodity</option>
        {commodityData.data.map((data) => (
          <>
            <option>{data.commodity}</option>
          </>
        ))}
      </select>
    </>
  );
};

export default ApiCommodityList;
