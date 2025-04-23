// Your exact code already works well.
// Just ensure <Link> elements have `key={order.orderId}` added.

import React, { useContext, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import avatar from "../../Assest/avatar.svg";
import analytics from '../../Assest/analytics.svg';
import logistic from '../../Assest/logistic.svg';
import ordericon from '../../Assest/ordericon.svg';
import product from '../../Assest/product.svg';
import LogisticContext from '../context/LogisticContext';

const OrderCheckOutPage = () => {
  const {
    LogisticOrders,
    LogisticData,
    orderStatus,
    setOrderStatus,
  } = useContext(LogisticContext);
  const navigate = useNavigate();

  const filteredOrders = LogisticOrders.filter(
    (order) =>
      order.status === "accepted" &&
      order.orderStatus.toLowerCase() === orderStatus.toLowerCase()
  );

  return (
    <div className="flex items-center justify-center flex-col">
      {/* Header */}
      <header className='flex rounded-xl h-16 pt-2 bg-(--green) mt-5 w-100 text-xl'>
        <Link to="/">
          <h1 className='font-bold font-inknut pt-1 ms-10 items-center'>
            {LogisticData?.name}!
          </h1>
        </Link>
        <div className='ms-83 pb-1 fixed'>
          <img src={avatar} onClick={() => navigate('/DashBoard')} alt="avatar" />
        </div>
      </header>

      {/* Status Selector */}
      <div className='flex rounded-sm  p-2 bg-(--green) mt-5 w-95 text-xl justify-between items-center overflow-x-scroll scrollbar'>
      <div >

          {['ordered', 'In-Transit', 'delivered'].map((status) => (
            <button
              key={status}
              onClick={() => setOrderStatus(status)}
              className={`rounded-sm font-bold font-inter ml-2 px-2 py-1   ${status.toLowerCase() === orderStatus.toLowerCase()
                ? "bg-(--primary) border-1 border-green-600"
                : ''
                }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
      </div>


      {/* Filtered Orders */}
      <div className="mt-4 w-full max-w-1xl h-[75vh] overflow-y-auto px-4 flex items-center flex-col">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <Link to={`/orderdetails/${order.orderId}`} key={order.orderId}>
              <div className='cursor-pointer bg-[var(--green)] flex mt-4 h-35 rounded-2xl w-100 py-1 relative border-l-8 border-l-green-600 '>
                <div>
                  <h1 className='flex justify-center rounded-xl h-9 pt-2 bg-[var(--primary)] mt-2 ms-2 w-60 font-bold font-inter'>
                    {order.commodity}
                  </h1>
                  <h1 className='flex justify-center rounded-xl h-9 pt-2 bg-[var(--primary)] mt-2 ms-2 w-60 font-bold font-inter'>
                    {order.customer.name}
                  </h1>
                  <h1 className='flex justify-center rounded-xl h-9 pt-2 bg-[var(--primary)] mt-2 ms-2 w-60 font-bold font-inter'>
                  <a href={`tel:+91${order?.customer?.phoneNumber}`}>
                    +91<span>{order?.customer?.phoneNumber}</span>
                  </a>
                  </h1>
                </div>
                <div>
                  <p className='flex justify-center rounded-xl h-9 pt-2 bg-[var(--primary)] mt-2 ms-2 w-28 font-bold font-inter'>
                    {order.quantity}.KG
                  </p>
                  <p className='flex justify-center rounded-xl h-9 pt-2 bg-[var(--primary)] mt-2 ms-2 w-28 font-bold font-inter'>
                    {order.commodityPrice}.Rs
                  </p>
                  <p className='flex justify-center rounded-xl h-9 pt-2 bg-[var(--primary)] mt-2 ms-2 w-28 font-bold font-inter'>
                    {order.price}.Rs
                  </p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center mt-4">No orders found for "{orderStatus}"</p>
        )}
      </div>

      {/* Footer */}
      {/* footer */}
      <footer className="bg-(--green) h-[8vh] rounded-[30px] mt-4 flex items-center justify-evenly py-4 fixed bottom-3">
        <Link to="/">
          <div className='ms-7 me-7 h-12 w-12 bg-white rounded-sm p-1'>
            <img src={product} alt="product" />
          </div>
        </Link>
        <Link to="/checkoutPage">
          <div className="ms-7 me-7 h-12 w-12 bg-white rounded-sm p-1">
            <img src={ordericon} alt="orderIcon" />
          </div>
        </Link>
        <div className='ms-7 me-7 h-12 w-12 bg-white rounded-sm p-1 pt-1'>
          <img src={logistic} alt="logistic" />
        </div>
        <div className='ms-7 me-7 h-12 w-12 bg-white rounded-sm p-1 pt-1'>
          <img src={analytics} alt="analytics" />
        </div>
      </footer>
    </div>
  );
};

export default OrderCheckOutPage;
