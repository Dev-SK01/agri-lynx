import React, { useContext, useState } from "react";
import Navigation from "./Navigation";
import { useParams } from "react-router-dom";
import FarmerContext from "../context/FarmerContext";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import calanderImg from "../../assets/calendar.svg";
import orderImg from "../../assets/order.svg";
import avatar from "../../assets/avatar.svg";
import logisticImg from "../../assets/logistic.svg";
import locationImg from "../../assets/location.svg";
import BottomNavigation from "./BottomNavigation";
import Toast from "@/utils/toast";
import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";
import OrderStatusVerification from "./OrderStatusVerification";

const FarmerOrderDetails = () => {
  const { orderId } = useParams();
  const {
    allOrders,
    farmerOrders,
    setFarmerOrders,
    packedOrders,
    setPackedOrders,
    shippedOrders,
    setShippedOrders,
    setIsContentLoading,
    isContentLoading,
  } = useContext(FarmerContext);
  const [isOtpView, setOtpView] = useState(false);
  // state of shipped order status
  const [orderStatus,setOrderStatus] = useState("");
  // console.log("All Orders :", allOrders);

  const orderData = allOrders?.filter((order) => {
    if (orderId.toLowerCase() === order.orderId.toLowerCase()) {
      return order;
    }
  });
  // console.log(orderData);
  const handleOrderStatus = (value) => {
    setOrderStatus(value);
    if (value === "packed") {
      if (orderData[0].logistics) {
        handlePackedOrder(value);
      } else {
        Toast(toast.error, "Book Logistic Partner...!");
      }
    }
    if (value == "shipped") {
      handleShippedOrder(value);
    }
  };

  const handlePackedOrder = (value) => {
    if (confirm("Are sure to Update Order Status")) {
      setIsContentLoading(true);
      try {
        // back end api for updating order status
        const req = "";
        const res = true;
        if (res) {
          // state logic
          const packedOrder = orderData;
          const orderedOrder = farmerOrders.filter((order) => {
            if (orderId.toLowerCase() !== order.orderId.toLowerCase()) {
              return order;
            }
          });
          packedOrder[0].orderStatus = value;
          setPackedOrders([...packedOrders, packedOrder[0]]);
          setFarmerOrders(orderedOrder);
          Toast(toast.success, "Order Status Updated Successfully");
        } else {
          Toast(toast.error, "Failed To Update Status!");
        }
        setTimeout(() => setIsContentLoading(false), 2000);
      } catch (err) {
        Toast(toast.error, err.message);
      }
    }
  };

  const handleShippedOrder = () => {
    if (confirm("Are sure to Update Order Status")) {
      // for otp verification
      setOtpView(true);
    }
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="h-[25vh] w-full flex items-center justify-center flex-col">
        <div className="w-[95%]  mt-4">
          <Navigation />
        </div>
        <div className="w-[95%] mt-4 text-center bg-(--green) rounded-sm">
          <h1 className="font-bold text-[1.2rem] font-inter">
            #{orderId.toUpperCase()}
          </h1>
          <div className="text-center flex items-center justify-center">
            <img
              src={calanderImg}
              alt="calander"
              className="h-[25px] w-[25px]"
            />
            <span className="font-inter ml-2">{orderData[0]?.orderDate}</span>
          </div>
        </div>
        <Select
          className="text-black text-center"
          disabled={
            orderData[0].orderStatus === "delivered" ||
            orderData[0].orderStatus === "cancelled" ||
            orderData[0].orderStatus === "shipped"
              ? true
              : false
          }
          onValueChange={(value) => handleOrderStatus(value)}
        >
          <SelectTrigger className="w-[150px] pb-3 pt-3 mt-5 bg-(--green) font-inter font-bold text-black  ">
            <SelectValue
              placeholder={orderData[0].orderStatus}
              className="text-black text-center"
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="font-inter font-bold">
              <SelectLabel>Status</SelectLabel>
              <SelectItem
                value="ordered"
                disabled={
                  orderData[0].orderStatus === "ordered" ||
                  orderData[0].orderStatus === "packed" ||
                  orderData[0].orderStatus === "shipped"
                    ? true
                    : false
                }
              >
                Ordered
              </SelectItem>
              <SelectItem
                value="packed"
                disabled={
                  orderData[0].orderStatus === "packed" ||
                  orderData[0].orderStatus === "shipped"
                    ? true
                    : false
                }
              >
                Packed
              </SelectItem>
              <SelectItem
                value="shipped"
                disabled={
                  orderData[0].orderStatus === "shipped" ||
                  orderData[0].orderStatus === "ordered"
                    ? true
                    : false
                }
              >
                Shipped
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div
        className={
          !isContentLoading
            ? "w-[95%] overflow-auto h-[64.5vh] rounded-md scrollbar"
            : "w-[95%] h-[64.5vh] flex items-center justify-center"
        }
      >
        {!isContentLoading && (
          <>
            {/* order details */}
            <div className="pb-2 border-b-1 border-b-green-300">
              <div className="flex text-center items-center ">
                <img src={orderImg} alt="orderImg" />
                <h1 className="font-extrabold text-[1.4rem] mt-2 font-inter">
                  ORDER DETAILS
                </h1>
              </div>
              <div className="ml-12">
                <span className="font-[600] font-inter">
                  COMMODITY : <span>{orderData[0]?.commodity}</span>
                </span>
                <br />
                <span className="font-[600] font-inter">
                  QUANTITY : <span>{orderData[0]?.quantity}.KG</span>
                </span>
                <br />
                <span className="font-[600] font-inter">
                  PRICE : &#8377; <span>{orderData[0]?.price}</span>
                </span>
                <br />
                <span className="font-[600] font-inter">
                  COMMODITY PRICE : &#8377;{" "}
                  <span>{orderData[0]?.commodityPrice}</span>
                </span>
                <br />
              </div>
            </div>
            {/* customer details */}
            <div className="pb-2 border-b-1 border-b-green-300">
              <div className="flex text-center items-center ">
                <img src={avatar} alt="avatar" />
                <h1 className="font-extrabold text-[1.4rem] mt-2 font-inter">
                  CUSTOMER
                </h1>
              </div>
              <div className="ml-12">
                <span className="font-[600] font-inter">
                  NAME : <span>{orderData[0]?.customer?.name}</span>
                </span>
                <br />
                <span className="font-[600] font-inter">
                  NUMBER :{" "}
                  <a href={`tel:+91${orderData[0]?.customer?.phoneNumber}`}>
                    +91<span>{orderData[0]?.customer?.phoneNumber}</span>
                  </a>
                </span>
                <br />
                <span className="font-[600] font-inter">
                  EMAIL : <span>{orderData[0]?.customer?.email}</span>
                </span>
                <br />
              </div>
            </div>
            {/* logistics details */}
            {orderData[0]?.logistics && (
              <div className="pb-2 border-b-1 border-b-green-300">
                <div className="mt-4 ml-2">
                  <div className="flex text-center items-center ">
                    <img src={logisticImg} alt="avatar" />
                    <h1 className="font-extrabold text-[1.4rem] mt-2 font-inter ml-2">
                      LOGISTICS
                    </h1>
                  </div>
                  <div className="ml-12">
                    <span className="font-[600] font-inter">
                      NAME : <span>{orderData[0]?.logistics?.name}</span>
                    </span>
                    <br />
                    <span className="font-[600] font-inter">
                      NUMBER :{" "}
                      <a
                        href={`tel:+91${orderData[0]?.logistics?.phoneNumber}`}
                      >
                        +91<span>{orderData[0]?.logistics?.phoneNumber}</span>
                      </a>
                    </span>
                    <br />
                    <span className="font-[600] font-inter">
                      EMAIL : <span>{orderData[0]?.logistics?.email}</span>
                    </span>
                    <br />
                  </div>
                </div>
              </div>
            )}
            {/* address details */}
            <div className="mt-4 pb-2 border-b-1 border-b-green-300">
              <div className="flex text-center items-center ">
                <img src={locationImg} alt="avatar" />
                <h1 className="font-extrabold text-[1.4rem] mt-2 font-inter ml-2">
                  DELIVER TO
                </h1>
              </div>
              <div className="ml-12">
                <span className="font-[600] font-inter">
                  ADDRESS : <span>{orderData[0]?.customer?.address}</span>
                </span>
                <br />
                <span className="font-[600] font-inter">
                  DISTRICT : <span>{orderData[0]?.customer?.district}</span>
                </span>
                <br />
                <span className="font-[600] font-inter">
                  PINCODE : <span>{orderData[0]?.customer?.pincode}</span>
                </span>
                <br />
              </div>
            </div>
          </>
        )}
        {isContentLoading && <PulseLoader color="#4CA14D" />}
      </div>
      <BottomNavigation />
      {isOtpView && (
        <OrderStatusVerification
          orderData={orderData}
          setOtpView={setOtpView}
          orderId={orderId}
          orderStatus={orderStatus}
        />
      )}
    </div>
  );
};

export default FarmerOrderDetails;
