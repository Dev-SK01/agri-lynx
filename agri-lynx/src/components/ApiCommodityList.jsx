import React, { useState } from 'react'
import data from './../farmers/data.json'
import axios from 'axios';
const ApiCommodityList = () => {
    const commodityData = JSON.parse(JSON.stringify(data));
    const params = new URLSearchParams();
    params.append('language', 'en');
    params.append('stateName', 'TAMIL NADU');
    params.append('apmcName', '-- Select APMCs --');
    params.append('fromDate', '2025-02-28');
    params.append('toDate', '2025-02-28');

    async function apiCall() {
        // const response = await axios.post(
        //     "https://enam.gov.in/web/Ajax_ctrl/commodity_list",
        //     params,
        //     { headers: { 'content-type': 'application/x-www-form-urlencoded' } })
        // const apiCommodityList = await response.json();
        // console.log(apiCommodityList);
        try {
            fetch("https://enam.gov.in/web/Ajax_ctrl/commodity_list", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                // Automatically converted to "username=example&password=password"
                body: params,
            }).then((response) => console.log(response.json()));
        } catch (err) {
            console.log(err.message);
        }
    }
    apiCall();
    const [commodityList, setCommodityList] = useState(new Option(length));
    return (
        <>

            <select name="commodity-list" id="commodity-list">
                {commodityData.data.map((data) => (
                    <option>{data.commodity}</option>
                ))}
            </select>


        </>
    )
}

export default ApiCommodityList
