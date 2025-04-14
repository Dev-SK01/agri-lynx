import React, { useContext, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import location from "../../assets/location.svg";
import phone from "../../assets/phone.svg";
import human from "../../assets/Human.svg";
import message from "../../assets/message.svg";
import delivery from "../../assets/delivery.svg";
import FarmerLogisticsContext from "../context/FarmerLogisticsContext";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import BottomNavigation from "./BottomNavigation";
import Navigation from "./Navigation";
import FarmerContext from "../context/FarmerContext";
import Toast from "@/utils/toast";

const LogisticsBooking = () => {
  const [selectedName, setSelectedName] = useState("");
  const navigate = useNavigate();

  const { LogisticsDetails, setLogisticsDetails } = useContext(
    FarmerLogisticsContext
  );
  const { farmerOrders, setFarmerOrders } = useContext(FarmerContext);

  const { partnerId } = useParams();

  const logisticsData = LogisticsDetails.filter((logistics) => {
    if (
      logistics.logisticsPartnerId.toLowerCase() === partnerId.toLowerCase()
    ) {
      return logistics;
    }
  });

  function handleBookLogisticsPartner(e) {
    const userSelectedOrder = farmerOrders.filter((farmerOrders) => {
      if (selectedName === farmerOrders.customer.name) {
        return farmerOrders;
      }
    });

    // farmer remainin orders
    const logisticsUpdatedOrders = farmerOrders.filter((farmerOrders) => {
      if (selectedName !== farmerOrders.customer.name) {
        return farmerOrders;
      }
    });
    const logistics = logisticsData[0];
    // appending logistics data to order datai
    if (
      selectedName === null ||
      selectedName === "" ||
      selectedName === "Select Orders"
    ) {
      toast.error("Please Select Customer!", {
        toastId: "toast",
      });
    } else {
      try {
        // backend api
        const res = true;
        if (res) {
          // changing booking status
          userSelectedOrder[0].bookingStatus = "booked";
          const logisticsAddedData = { ...userSelectedOrder[0], logistics };
          console.log(logisticsAddedData, logisticsUpdatedOrders);
          // adding the logistics added data to state.
          logisticsUpdatedOrders.push(logisticsAddedData);
          // console.log(logisticsUpdatedOrders);
          // updating farmer orders state
          setFarmerOrders(logisticsUpdatedOrders);
          Toast(toast.success, "booked Successfully");
          navigate("/farmerOrders");
        }
      } catch (err) {
        Toast(toast.error, err.message);
      }
    }
  }

  return (
    <>
      <div className=" flex-col border-(--secondary)   items-center p-2   bg-(--primary) justify-center justify-items-center  bottom-0 top-0  m-0 me-0 ">
        <div className="mt-3 w-[95dvw]">
          <Navigation />
        </div>
        {/* select dropdown for user selection disabled={isOtpVerified?true:false} */}
        <Select onValueChange={(value) => setSelectedName(value)}>
          <SelectTrigger className="w-[200px] pb-3 pt-3 mt-5 bg-(--green) font-inter font-bold text-black  ">
            <SelectValue placeholder="Select Customer" />
          </SelectTrigger>
          <SelectContent className="font-inter font-bold">
            <SelectGroup>
              {farmerOrders.map((farmerOrder) => (
                <SelectItem
                  key={farmerOrder.orderId}
                  value={farmerOrder.customer.name}
                >
                  {farmerOrder.customer.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        
        <div className="h-[61dvh] mt-3 overflow-y-scroll">
          {logisticsData.map((logistics, index) => (
            <div key={index}>
              <div className="font-inter font-bold  mt-2  mb-2">
                <p>Partner Name</p>
                <div className="flex justify-between mt-2  p-1 ps-3 bg-(--teritary) h-10  text-lg text-gray-500 w-90 rounded border-2 border-gray-300">
                  {logistics.name}{" "}
                  <img src={human} alt="human" className="me-4" />
                </div>
              </div>
              <div className="font-inter font-bold  mt-2  mb-2">
                <p>Phone Number</p>
                <a
                  className="flex justify-between mt-2  p-1 ps-3 bg-(--teritary) h-10  text-lg text-gray-500 w-90 rounded border-2 border-gray-300"
                  href={`tel:+91${logistics.phoneNumber}`}
                >
                  {logistics.phoneNumber}{" "}
                  <img src={phone} alt="phone" className="me-4" />
                </a>
              </div>
              <div className="font-inter font-bold  mt-2  mb-2">
                <p>Email</p>
                <div className="flex justify-between mt-2  p-1 ps-3 bg-(--teritary) h-10  text-lg text-gray-500 w-90 rounded border-2 border-gray-300">
                  {logistics.email}{" "}
                  <img src={message} alt="mail" className="me-4" />
                </div>
              </div>
              <div className="font-inter font-bold  mt-2  mb-2">
                <p>Village</p>
                <div className="flex justify-between mt-2  p-1 ps-3 bg-(--teritary) h-10  text-lg text-gray-500 w-90 rounded border-2 border-gray-300">
                  {logistics.village}{" "}
                  <img src={location} alt="location" className="me-4" />
                </div>
              </div>
              <div className="font-inter font-bold  mt-2  mb-2">
                <p>Post Office</p>
                <div className="flex justify-between mt-2  p-1 ps-3 bg-(--teritary) h-10  text-lg text-gray-500 w-90 rounded border-2 border-gray-300">
                  {logistics.postOffice}{" "}
                  <img src={location} alt="location" className="me-4" />
                </div>
              </div>
              <div className="font-inter font-bold  mt-2  mb-2">
                <p>Taluk</p>
                <div className="flex justify-between mt-2  p-1 ps-3 bg-(--teritary) h-10  text-lg text-gray-500 w-90 rounded border-2 border-gray-300">
                  {logistics.taluk}{" "}
                  <img src={location} alt="location" className="me-4" />
                </div>
              </div>
              <div className="font-inter font-bold  mt-2  mb-2">
                <p>District</p>
                <div className="flex justify-between mt-2  p-1 ps-3 bg-(--teritary) h-10  text-lg text-gray-500 w-90 rounded border-2 border-gray-300">
                  {logistics.district}{" "}
                  <img src={location} alt="location" className="me-4" />
                </div>
              </div>
              <div className="font-inter font-bold  mt-2  mb-2">
                <p>Pincode</p>
                <div className="flex justify-between mt-2  p-1 ps-3 bg-(--teritary) h-10  text-lg text-gray-500 w-90 rounded border-2 border-gray-300">
                  {logistics.pincode}{" "}
                  <img src={location} alt="location" className="me-4" />
                </div>
              </div>
              <div className="font-inter font-bold  mt-2  mb-2">
                <p>State</p>
                <div className="flex justify-between mt-2  p-1 ps-3 bg-(--teritary) h-10  text-lg text-gray-500 w-90 rounded border-2 border-gray-300">
                  {logistics.state}{" "}
                  <img src={location} alt="location" className="me-4" />
                </div>
              </div>
              <div className="font-inter font-bold  mt-2  mb-2">
                <p>Vehicle Type</p>
                <div className="flex justify-between mt-2  p-1 ps-3 bg-(--teritary) h-10  text-lg text-gray-500 w-90 rounded border-2 border-gray-300">
                  {logistics.vehicleType}{" "}
                  <img src={location} alt="location" className="me-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={(e) => handleBookLogisticsPartner()}
          type="submit"
          className="flex gap-2 font-bold text-xl px-1 mt-2 p-1.5 text-(--primary)  bg-(--secondary) rounded h-[5dvh] "
        >
          Book Now <img src={delivery} alt="delivery" />
        </button>
      </div>
      <div className="flex justify-center mt-0.5">
        {" "}
        <BottomNavigation />
      </div>
    </>
  );
};

export default LogisticsBooking;
