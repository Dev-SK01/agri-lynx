import React from "react";
import { Link } from "react-router-dom";

const Orders = ({ orderData }) => {
  return orderData.length ? (
    orderData.map((order) => (
      <Link to={`/farmerorderdetails/${order?.orderId}`} key={order?.orderId}>
        <section
          className="flex w-full items-center justify-between mt-8 bg-(--green) rounded-md py-2  relative border-l-8 border-l-green-600"
          key={order?.orderId}
        >
          <div className="ml-2 w-[55%]">
            <p className="bg-(--primary) rounded-sm font-inter font-bold  mb-2 pl-2 py-2">
              {order?.commodity}
            </p>
            <p className="bg-(--primary) rounded-sm font-inter font-bold  mb-2 pl-2 py-2">
              {order?.customer?.name}
            </p>
            <p className="bg-(--primary)  rounded-sm font-inter font-bold  mb-2 pl-2 py-2">
              +91 {order?.customer?.phoneNumber}
            </p>
          </div>
          <div className="rounded-sm mr-12  mt-2">
            <p className="bg-(--primary) rounded-sm font-inter font-bold text-center px-6 py-1 mb-4 text-violet-400">
              {order?.quantity}.KG
            </p>
            <p className="bg-(--primary) rounded-sm font-inter font-bold text-center px-6 py-1 mb-4 text-orange-400">
              &#8377; {order?.commodityPrice}
            </p>
            <p className="bg-(--primary) rounded-sm font-inter font-bold text-center px-6 py-1 mb-4 text-green-600">
              &#8377; {order?.price}
            </p>
            {/* <img
            src={order.imageUrl}
            alt={order.commodity}
            className="object-cover h-25 w-25 rounded-lg "
            loading="lazy"
          /> */}
          </div>
          {/* booking status */}
          <p
            className={`px-10 py-1rounded-sm font-bold text-white capitalize absolute rotate-90 right-0 -mr-12 ${
              order?.bookingStatus === "pending"
                ? "bg-[#f5a523c4]"
                : order?.bookingStatus === "booked"
                ? "bg-green-500"
                : "bg-red-700"
            }`}
          >
            {order?.bookingStatus}
          </p>
        </section>
      </Link>
    ))
  ) : (
    <div className="flex items-center justify-center text-center mt-10">
      <h1 className="font-extrabold font-inter">NO ORDERS FOUND!!</h1>
    </div>
  );
};

export default Orders;
