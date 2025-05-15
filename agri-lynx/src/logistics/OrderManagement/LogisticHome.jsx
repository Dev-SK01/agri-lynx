import React, { useContext } from 'react';
import avatar from "../../Assest/avatar.svg";
import analytics from '../../Assest/analytics.svg';
import logistic from '../../Assest/logistic.svg';
import ordericon from '../../Assest/ordericon.svg';
import product from '../../Assest/product.svg';
import LogisticContext from '../context/LogisticContext';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from "react-router-dom";
import welcome from "../../assets/welcome.svg";
import Toast from '@/utils/toast';
import { toast } from 'react-toastify';

const LogisticHome = () => {
  const { LogisticOrders, LogisticData, acceptOrder, deleteOrder,setLogisticOrders } = useContext(LogisticContext);
  const navigate = useNavigate();

  const handleAvatarClick = () => {
    navigate("/dashboard");
  };

  async function handleUpdateBookingStatus(orderId,action) {
    try {
      const req = await fetch(import.meta.env.VITE_API_BASE_URL + `/logistic/updatebookingstatus`,{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
        },
        body:JSON.stringify({orderId,action})
      });
      const res = await req.json();
      console.log(res);
      
      if (!res?.error) {
        Toast(toast.success, "accepted");
        const order = LogisticOrders.find(o => o.orderId === orderId);
        action === "accept" ? acceptOrder(orderId) : deleteOrder(orderId);
        navigate(`/checkoutPage/${orderId}`, { state: { order } });
      }else{

      }
    } catch (err) {
      Toast(toast.error, err.message);
    }
  }
  // const pendingOrders = (LogisticOrders || []).filter(order => order.status !== 'ordered');

  console.log(LogisticOrders)
  return (
    <div className="flex items-center justify-center flex-col">
      {/* Header */}
      <header className='flex rounded-xl h-16 pt-2 bg-(--green) mt-5 w-100 text-xl'>
        <Link to="/">
          <h1 className='font-bold font-inknut pt-1 ms-10 items-center'>
            {LogisticData?.name}
          </h1>
        </Link>
        <div className='ms-83 pb-1 fixed'>
          <img src={avatar} onClick={handleAvatarClick} alt="avatar" />
        </div>
      </header>

      {/* Welcome Image if no orders */}
      {LogisticOrders.length === 0 && (
        <div className="flex flex-col items-center mt-10 justify-center h-[80dvh]">
          <img src={welcome} alt="Welcome" className="w-[450px] h-auto" />
        </div>
      )}

      {/* Order Cards */}
      {LogisticOrders.map(order => (
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
              onClick={() => handleUpdateBookingStatus(order.orderId,"accept")}
            >
              Accept
            </Button>

            <Button
              className='flex justify-center rounded-xl h-9 pt-2 bg-red-500 mt-2 ms-2 w-28 items-center font-bold font-inter text-black'
              onClick={() => handleUpdateBookingStatus(order.orderId,"cancel")}
            >
              Decline
            </Button>
          </div>
        </div>
      ))}

      {/* Footer */}
    <footer className="bg-(--green) h-[8vh] w-[95%] rounded-[30px] mt-4 flex items-center justify-evenly py-2 fixed bottom-3">
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
            <div className='ms-4 me-7 h-12 w-21 bg-white rounded-sm p-2 pt-1.5'>
              <img src={logistic} alt="logistic" />
            </div>
            <div className='ms-4 me-7 h-12 w-21 bg-white rounded-sm p-2 ps-1.5'>
              <img src={analytics} alt="analytics" />
            </div>
          </footer>
    </div>
  );
};

export default LogisticHome;
