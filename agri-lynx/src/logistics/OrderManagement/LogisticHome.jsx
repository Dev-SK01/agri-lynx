import React, { useContext } from 'react';
import avatar from "../../Assest/avatar.svg";
import analytics from '../../Assest/analytics.svg';
import logistic from '../../Assest/logistic.svg';
import ordericon from '../../Assest/ordericon.svg';
import product from '../../Assest/product.svg';
import LogisticContext from '../context/LogisticContext';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from "react-router-dom";

const LogisticHome = () => {
  const { LogisticOrders, LogisticData, acceptOrder, deleteOrder } = useContext(LogisticContext);
  const navigate = useNavigate();

  const handleAvatarClick = () => {
    navigate("/dashboard");
  };

  const handleAccept = (orderId) => {
    const order = LogisticOrders.find(o => o.orderId === orderId);
    acceptOrder(orderId); 
    navigate(`/checkoutPage/${orderId}`, { state: { order } }); 
  };
  

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
          <img src={avatar} onClick={handleAvatarClick} alt="avatar" />
        </div>
      </header>

      {/* Order Cards */}
      {LogisticOrders.filter(order => order.status !== 'accepted')
         .map(order => (
         
        <div
          key={order.orderId}
          className='bg-[var(--green)] flex mt-4 h-48 rounded-2xl w-100 py-1 relative border-l-8 border-l-green-600'
        >
          <div>
            <h1 className='flex justify-center items-center text-center rounded-xl h-9 pt-0 bg-[var(--primary)] mt-2 ms-2 w-60 font-bold font-inter'>
              {order.farmer.name}
            </h1>
            <h1 className='flex justify-center items-center text-center rounded-xl h-9 pt-0 bg-[var(--primary)] mt-2 ms-2 w-60 font-bold font-inter'>
            <a href={`tel:+91${order?.farmer?.phoneNumber}`}>
                    +91<span>{order?.farmer?.phoneNumber}</span>
                  </a>
            </h1>
            <h1 className='flex justify-center items-center text-center rounded-xl h-20 pt-0 bg-[var(--primary)] mt-2 ms-2 w-60 font-bold font-inter'>
              {order.farmer.address}, {order.farmer.village}, {order.farmer.taluk}
            </h1>
          </div>

          <div>
            <p className='flex justify-center rounded-xl h-9 pt-0 bg-[var(--primary)] mt-2 ms-2 w-28 items-center font-bold font-inter'>
              {order.quantity} KG
            </p>
            <p className='flex justify-center rounded-xl h-9 pt-0 bg-[var(--primary)] mt-2 ms-2 w-28 items-center font-bold font-inter'>
            ₹ {order.price} 
            </p>

            <Button
              className='flex justify-center rounded-xl h-9 pt-2 bg-[var(--secondary)] mt-2 ms-2 w-28 items-center font-bold font-inter text-black'
              onClick={() => handleAccept(order.orderId)}
            >
              Accept
            </Button>

            <Button
              className='flex justify-center rounded-xl h-9 pt-2 bg-red-500 mt-2 ms-2 w-28 items-center font-bold font-inter text-black'
              onClick={() => deleteOrder(order.orderId)}
            >
              Decline
            </Button>
          </div>
        </div>
      ))}

      {/* Footer */}
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

export default LogisticHome;
