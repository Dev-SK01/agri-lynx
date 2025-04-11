import React, { useEffect, useState } from "react";

const ApiCommodityList = ({ handleChange }) => {
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
            stateName: "TAMIL NADU",
            apmcName: "-- Select APMCs --",
            fromDate: "2025-02-28",
            toDate: "2025-02-28",
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
  }, [commodityList]);
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
