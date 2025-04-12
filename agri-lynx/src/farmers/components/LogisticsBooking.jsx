import React, { useContext, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import location from "../../assets/location.svg";
import phone from "../../assets/phone.svg";
import human from "../../assets/Human.svg";
import message from "../../assets/message.svg";
import delivery from "../../assets/delivery.svg";
import FarmerLogisticsContext from "../context/FarmerLogisticsContext";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
const LogisticsBooking = () => {
  let farmerOrdersDetails;
  const [selectedName, setSelectedName] = useState("");
  const {
    LogisticsDetails,
    setLogisticsDetails,
    farmerOrders,
    setFarmerOrders,
  } = useContext(FarmerLogisticsContext);
  const { partnerId } = useParams();
  const logisticsData = LogisticsDetails.filter((logistics) => {
    if (
      logistics.logisticsPartnerId.toLowerCase() === partnerId.toLowerCase()
    ) {
      return logistics;
    }
  });
  // const farmerOrderData = farmerOrders.filter((farmerData)=>{
  //   if(farmerData.orderStatus === "ordered"){
  //     return farmerData;
  //   }
  // })

  function handleBookLogisticsPartner(e) {
    const userSelectedOrder = farmerOrders.filter((farmerOrders) => {
      if (selectedName === farmerOrders.farmer.name) {
        return farmerOrders;
      }
    });
    // farmer remainin orders
    const logisticsUpdatedOrders = farmerOrders.filter((farmerOrders) => {
      if (selectedName !== farmerOrders.farmer.name) {
        return farmerOrders;
      }
    });
    const logistics = logisticsData[0];
    // appending logistics data to order datai
    if (selectedName === null || selectedName === "" || selectedName === "Select Orders") {
      toast.error("Please Select Name", {
              toastId: "toast",
            });
    } else {
      const logisticsAddedData = { ...userSelectedOrder[0], logistics };
      console.log(logisticsAddedData, logisticsUpdatedOrders);
      logisticsUpdatedOrders.push(logisticsAddedData);
      console.log(logisticsUpdatedOrders);
      // updating farmer orders state
      setFarmerOrders(logisticsUpdatedOrders);
    }
  }
  console.log(farmerOrders);

  return (
    <>
      <div className=" flex-col border-(--secondary)   items-center p-2   bg-(--primary) justify-center justify-items-center  bottom-0 top-0  m-0 me-0 ">
        <Header />
        <select
          onChange={(e) => setSelectedName(e.target.value)}
          name="orders"
          id="orders"
          className="flex-row justify-items-center bg-(--green) rounded-2xl p-1 pe-5 ps-9 text-xl font-inter font-bold  mt-6 h-[6dvh] w-60 border-e-4 border-b-4 border-(--secondary)"
        >
          <option value="Select Orders">Select Orders</option>
          {farmerOrders.map((farmerOrder) => (
            <option key={farmerOrder.orderId} value={farmerOrder.farmer.name}>
              {farmerOrder.farmer.name}
            </option>
          ))}
        </select>
        <div className="h-[60dvh] mt-3 overflow-y-scroll">
          {logisticsData.map((logistics) => (
            <>
              <div className="font-inter font-bold  mt-2  mb-2">
                <p>Partner Name</p>
                <div className="flex justify-between mt-2  p-1 ps-3 bg-(--teritary) h-10  text-lg text-gray-500 w-90 rounded border-2 border-gray-300">
                  {logistics.name}{" "}
                  <img src={human} alt="human" className="me-4" />
                </div>
              </div>
              <div className="font-inter font-bold  mt-2  mb-2">
                <p>Phone Number</p>
                <div className="flex justify-between mt-2  p-1 ps-3 bg-(--teritary) h-10  text-lg text-gray-500 w-90 rounded border-2 border-gray-300">
                  {logistics.phoneNumber}{" "}
                  <img src={phone} alt="phone" className="me-4" />
                </div>
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
            </>
          ))}
        </div>
        <button
          onClick={(e) => handleBookLogisticsPartner(e)}
          type="submit"
          className="flex gap-2 font-bold text-xl px-1 mt-2 p-1.5 text-(--primary)  bg-(--secondary) rounded h-[5dvh] "
        >
          Book Now <img src={delivery} alt="delivery" />
        </button>
        <Footer />
      </div>
    </>
  );
};

export default LogisticsBooking;
