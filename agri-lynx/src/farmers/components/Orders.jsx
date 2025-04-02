import React from "react";
import { Link } from "react-router-dom";

const Orders = ({ orderData }) => {
  return orderData.map((order) => (
    <Link to={`/farmerorderdetails/${order.orderId}`}>
      <section className="flex w-full items-center justify-between mt-8 bg-(--teritary) rounded-md py-2  relative border-l-8 border-l-green-600">
        <div className="ml-4">
          <p className="bg-(--primary) rounded-sm font-inter font-bold px-18 py-2 text-center  mb-2">
            {order.commodity}
          </p>
          <p className="bg-(--primary) rounded-sm font-inter font-bold text-center mb-2 py-2">
            {order.customer.name}
          </p>
          <p className="bg-(--primary)  rounded-sm font-inter font-bold text-center mb-2 py-2">
            +91 {order.customer.phoneNumber}
          </p>
        </div>
        <div className="rounded-sm mr-6">
          <p className="bg-(--primary) rounded-sm font-inter font-bold text-center px-4 py-1 mb-4">
            {order.quantity}.KG
          </p>
          <img
            src={order.imageUrl}
            alt={order.commodity}
            className="object-cover h-25 w-25 rounded-lg "
            loading="lazy"
          />
        </div>
      </section>
    </Link>
  ));
};

export default Orders;
