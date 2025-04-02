import React, { useContext } from "react";
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

const FarmerOrderDetails = () => {
  const { orderId } = useParams();
  const { allOrders } = useContext(FarmerContext);
  // console.log("All Orders :",allOrders);

  const orderData = allOrders?.filter((orders) => {
    if (orderId.toLocaleLowerCase() === orders.orderId.toLocaleLowerCase()) {
      return orders;
    }
  });
  console.log(orderData);

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="w-[95%] h-[8vh] mt-4">
        <Navigation />
      </div>
      <div className="w-[95%] mt-4 text-center bg-(--green) rounded-sm">
        <h1 className="font-bold text-[1.2rem] font-inter">
          #{orderId.toUpperCase()}
        </h1>
        <div className="text-center flex items-center justify-center">
          <img src={calanderImg} alt="calander" className="h-[25px] w-[25px]" />
          <span className="font-inter ml-2">{orderData[0].orderDate}</span>
        </div>
      </div>
      <Select
        className="text-black text-center"
        disabled={
          orderData[0].orderStatus === "delivered" ||
          orderData[0].orderStatus === "cancelled"
            ? true
            : false
        }
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
              disabled={orderData[0].orderStatus === "shipped" ? true : false}
            >
              Shipped
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="w-[95%] h-[8vh] mt-4 font-inter">
        <div>
          <div className="flex text-center items-center ">
            <img src={orderImg} alt="orderImg" />
            <h1 className="font-bold text-[1.4rem] mt-2">ORDER DETAILS</h1>
          </div>
         <div>
         <span className="font-[500]">
            COMMODITY : <span>{orderData[0].commodity}</span>
          </span>
          <span>
            QUANTITY :<span>{orderData[0].quantity}</span>
          </span>
          <span>
           PRICE : <span>{orderData[0].price}</span>
          </span>
          <span>
            COMMODITY PRICE :<span></span>
          </span>
         </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerOrderDetails;
