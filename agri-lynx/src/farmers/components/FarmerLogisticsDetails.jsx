import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import FarmerLogisticsContext from "../context/FarmerLogisticsContext";
import Toast from "@/utils/toast";
import { toast } from "react-toastify";
import avatar1 from "../../assets/avatar1.svg";
import phone from "../../assets/phone.svg";
import delivery from "../../assets/delivery.svg";
import location from "../../assets/location.svg";
import logistics from "../../assets/logistic.svg";
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import FarmerContext from "../context/FarmerContext";

const FarmerLogisticsDetails = () => {
  const { LogisticsDetails, setLogisticsDetails} = useContext(FarmerLogisticsContext);
  const {farmerData} = useContext(FarmerContext);
  const [searchItem, setSearchItem] = useState("");
  LogisticsDetails.filter((logis) =>
    logis.name.toLowerCase().includes(searchItem)
  );

  // console.log(searchItem);
  // console.log(LogisticsDetails);

  async function handleLogisticDetails() {
    try {
      const req = await fetch(import.meta.env.VITE_API_BASE_URL + `/farmer/getlogistics?location=${farmerData.district}`,{
        method:"GET",
        headers:{
          "Content-Type": "application/json",
        }
      });
      const res = await req.json();
      if (res) {
        Toast(toast.success, "Partner's Fetched Successfully");
        setLogisticsDetails(res);
      }
    } catch (err) {
      Toast(toast.error, err.message);
    }
  }

  useEffect(() => {
    handleLogisticDetails();
  }, []);

  return (
    <>
      <>
        <div className="flex-col w-[100%] mt-3 h-[13.6dvh] justify-items-center pe-3  ">
          <div className=" flex-col justify-items-center bg-(--green) mt-2 border-none p-0.5 border-2 rounded-md py-2 px-4">
            <p className="font-inter font-bold text-2xl">Logistics Partner's</p>
          </div>
          <div className="flex w-[95%] items-center justify-center mt-4 ml-2">
            <SearchIcon className="absolute left-8" />
            <Input
              type="text"
              placeholder="Search Logistics partners"
              className="bg-(--green) p-5.5 font-inknut rounded-[25px] w-[100%] text-center"
              onChange={(e) => setSearchItem(e.target.value)}
            />
          </div>
        </div>
        <div
          className={
            LogisticsDetails.length
              ? "flex-col h-[62.5dvh] overflow-auto w-[95dvw] scrollbar justify-items-center mt-4"
              : "flex-col flex items-center justify-center h-[62dvh] overflow-auto w-[95dvw] scrollbar mt-4"
          }
        >
          {LogisticsDetails.filter((Logistics) => {
            return searchItem.toLowerCase() === ""
              ? Logistics
              : Logistics.name
                  .toLowerCase()
                  .includes(searchItem.toLowerCase()) ||
                  Logistics.phoneNumber.toLowerCase().includes(searchItem.toLowerCase()) ||
                  Logistics.address.toLowerCase().includes(searchItem.toLowerCase()) ||
                  Logistics.pincode
                    .toString()
                    .toLowerCase()
                    .includes(searchItem.toLowerCase()) ||
                  Logistics.village.toLowerCase().includes(searchItem.toLowerCase()) ||
                  Logistics.district.toLowerCase().includes(searchItem.toLowerCase());
          }).map((Logistics) => (
            <div
              key={Logistics.logisticsPartnerId}
              className="flex-col font-inter font-bold text-lg  border-s-8 border-(--secondary)  bg-(--green) rounded-xl w-[90dvw] p-2  mb-2"
            >
              <p className=" flex me-20 p-1.5 m-2 bg-(--primary) rounded gap-3 pt-1.5  ">
                {" "}
                <img src={avatar1} className="size-8" alt="avatar" />
                {Logistics.name}
              </p>
              <a 
              className="flex  me-20 p-1.5 m-2 bg-(--primary) rounded  gap-3" 
              href={`tel:+91${Logistics.phoneNumber}`}
              >
                {" "}
                <img src={phone} alt="phone" />
                +91 {Logistics.phoneNumber}
              </a>
              <p className="flex p-1.5  m-2 bg-(--primary) rounded  gap-3   ">
                {" "}
                <img
                  src={location}
                  alt="location"
                  className="h-[25px] w-[25px]"
                />
                {Logistics.address +
                  Logistics.village +
                  "\n" +
                  Logistics.district +
                  "-" +
                  Logistics.pincode}
              </p>
              <div className="flex-col justify-items-center w-[95%] ">
                <Link
                  to={`/farmerlogisticsbooking/${Logistics?._id}`}
                  className="flex gap-2   p-1 text-(--primary)  bg-(--secondary) rounded  "
                >
                  Book Now <img src={delivery} alt="delivery" />
                </Link>
              </div>
            </div>
          ))}
          {!LogisticsDetails.length && (
            <div className="flex flex-col items-center justify-center">
              <img src={logistics} alt="delivery" className="h-50 w-55 mb-4" />
              <p className="text-2xl font-bold">No Partner's Found...!</p>
            </div>
          )}
        </div>
      </>
    </>
  );
};

export default FarmerLogisticsDetails;
