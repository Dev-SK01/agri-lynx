import React, { useContext, useState } from "react";
import avatar1 from "../../assets/avatar1.svg";
import phone from "../../assets/phone.svg";
import delivery from "../../assets/delivery.svg";
import location from "../../assets/location.svg";
import { Link } from "react-router-dom";
import search from "../../assets/search.svg";
import { useEffect } from "react";
import FarmerLogisticsContext from "../context/FarmerLogisticsContext";

const FarmerLogisticsDetails = () => {
  const { LogisticsDetails, setLogisticsDetails } = useContext(
    FarmerLogisticsContext
  );
  const [searchItem, setSearchItem] = useState("");
  LogisticsDetails.filter((logis) =>
    logis.name.toLowerCase().includes(searchItem)
  );

  console.log(searchItem);
  //
  useEffect(() => {
    setSearchItem;
  }, [searchItem]);

  // console.log(LogisticsDetails);

  async function handleLogisticDetails() {
    try {
      const req = "";
      const res = LogisticsDetails;
      setLogisticsDetails(res);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    handleLogisticDetails();
  }, []);

  return (
    <>
      <>
        <div className="flex-col w-[100%] mt-3 h-[13.6dvh] justify-items-center pe-3  ">
          <div className=" flex-col justify-items-center bg-(--green) mt-2 border-(--secondary) p-0.5 border-2 rounded-xl   w-40 ">
            <p className="font-inter font-bold text-2xl">Logistics</p>
          </div>
          <div className="flex justify-center h-10 bg-gray-200 p-1 rounded-2xl w-[80dvw] mt-3 font-inter pe-3 ">
            <img
              className="flex ms-4  pb-2 size-10"
              src={search}
              alt="search"
            />
            <input
              className=" w-70  justify-items-center text-xl  font-inknut"
              type="text"
              onChange={(e) => setSearchItem(e.target.value)}
              value={searchItem}
              placeholder="      search logistics "
            />
          </div>
        </div>
        <div className="flex-col justify-items-center h-[64dvh] overflow-y-scroll w-[95dvw] ">
          {LogisticsDetails.filter((Logistics) => {
            return searchItem.toLowerCase() === ""
              ? Logistics
              :   Logistics.name.toLowerCase().includes(searchItem.toLowerCase()) ||
                  Logistics.phoneNumber.toLowerCase().includes(searchItem) ||
                  Logistics.address.toLowerCase().includes(searchItem) ||
                  Logistics.pincode
                    .toString()
                    .toLowerCase()
                    .includes(searchItem) ||
                  Logistics.village.toLowerCase().includes(searchItem) ||
                  Logistics.district.toLowerCase().includes(searchItem);
          }).map((Logistics) => (
            <div
              key={Logistics.logisticsPartnerId}
              className="flex-col font-inter font-bold text-lg  border-s-10 border-(--secondary)  bg-(--green) rounded-xl w-[90dvw] p-2  mb-2"
            >
              <p className=" flex me-20 p-1.5 m-2 bg-(--primary) rounded gap-3 pt-1.5  shadow-[0px_11px_9px_-1px_rgba(0,_0,_0,_0.1)]">
                {" "}
                <img src={avatar1} className="size-8" alt="avatar" />
                {Logistics.name}
              </p>
              <p className="flex  me-20 p-1.5 m-2 bg-(--primary) rounded  gap-3  shadow-[0px_11px_9px_-1px_rgba(0,_0,_0,_0.1)]">
                {" "}
                <img src={phone} alt="phone" />
                {Logistics.phoneNumber}
              </p>
              <p className="flex p-1.5  m-2 bg-(--primary) rounded  gap-3 shadow-[0px_11px_9px_-1px_rgba(0,_0,_0,_0.1)]  ">
                {" "}
                <img src={location} alt="location" />
                {Logistics.address +
                  Logistics.village +
                  "\n" +
                  Logistics.district +
                  "-" +
                  Logistics.pincode}
              </p>
              <div className="flex-col justify-items-center w-[95%] ">
                <Link
                  to={`/farmerlogisticsbooking/${Logistics.logisticsPartnerId}`}
                  className="flex gap-2   p-1 text-(--primary)  bg-(--secondary) rounded  "
                >
                  Book Now <img src={delivery} alt="delivery" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </>
    </>
  );
};

export default FarmerLogisticsDetails;
