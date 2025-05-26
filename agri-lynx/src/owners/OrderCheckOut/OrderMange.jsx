import React, { useState, useContext } from "react";
import Avatar from "../../Assests/Avatar.svg";
import delivery from "../../Assests/delivery.svg";
import farmer from "../../Assests/farmer.svg";
import Payment from "../../Assests/Payment.svg";
import Checkout from "../../Assests/Checkout.svg";
import location from "../../Assests/location.svg";
import { Button } from "@/components/ui/button";
import OwnerContext from "../context/OwnerContext";
import { useParams, useNavigate, Link } from "react-router-dom";
import Footer from "../ProductList/Footer";
import useUid from "@/hook/useUid";
import Toast from "@/utils/toast";
import { toast } from "react-toastify";

const OrderMange = () => {
  const {
    OwnerData,
    updateOrderStatus,
    setMarketOrders,
    updateProductQuantity,
    filteredCommodities,
    setIsContentLoading,
  } = useContext(OwnerContext);

  const { listingId } = useParams();
  const selectedItem = filteredCommodities.find((item) => String(item.listingId) === String(listingId)) || {};
  const price = selectedItem?.price || 0;
  const availableQuantity = selectedItem?.quantity || 0;
  const [userQuantity, setUserQuantity] = useState("");
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const navigate = useNavigate();
  const updatedQuantity = String(Number(availableQuantity) - Number(userQuantity));
  // console.log("updatedQ :", updatedQuantity);

  const handleClick = () => {
    if (!userQuantity || Number(userQuantity) <= 0) {
      alert("Please enter a valid quantity.");
      return;
    }

    const newOrderId = useUid();
    const totalPrice = price * userQuantity;
    const OrderData = {
      orderId: newOrderId,
      listingId: selectedItem.listingId,
      commodity: selectedItem.commodity,
      commodityPrice: selectedItem.price,
      quantity: userQuantity,
      price: totalPrice,
      orderDate: new Date().toUTCString(),
      orderStatus: "ordered",
      bookingStatus: "pending",
      month: months[new Date().getMonth()],
      imageUrl: selectedItem.imageUrl,

      customer: {
        customerId: OwnerData?._id || "N/A",
        name: OwnerData?.name || "",
        email: OwnerData?.email || "",
        phoneNumber: OwnerData?.phoneNumber || "",
        address: OwnerData?.address || "",
        taluk: OwnerData?.taluk || "",
        district: OwnerData?.district || "",
        state: OwnerData?.state || "",
        pincode: OwnerData?.pincode || "",
      },

      farmer: {
        farmerId: selectedItem?.farmer?.farmerId || "",
        name: selectedItem?.farmer?.name || "",
        phoneNumber: selectedItem?.farmer?.phoneNumber || "",
        address: selectedItem?.farmer?.address || "",
        village: selectedItem?.farmer?.village || "",
        postoffice: selectedItem?.farmer?.postOffice || "",
        taluk: selectedItem?.farmer?.taluk || "",
        district: selectedItem?.farmer?.district || "",
        pincode: selectedItem?.farmer?.pincode || "",
        upiId: selectedItem?.farmer?.upiId || "",
      },
    };

    setMarketOrders((prevOrders) => [...prevOrders, OrderData]);
    updateOrderStatus(newOrderId, "ordered");
    updateProductQuantity(selectedItem.listingId, Number(userQuantity));
    placeOrder(OrderData);
    navigate("/myorder");
  };

  const placeOrder = async (order) => {
    setIsContentLoading(true);
    try {
      const req1 = await fetch(import.meta.env.VITE_API_BASE_URL + "/farmer/updatequantity", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ farmerId: selectedItem?.farmer?.farmerId, listingId, updatedQuantity })
      });
      const res = await req1.json();
      if (res?.isUpdated) {
        toast.success("Quantity Updated");
        // order place api
        try {
          const req = await fetch(`${import.meta.env.VITE_API_BASE_URL}/owner/placeorder`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(order),
          });
          const res = await req.json();
          
          setIsContentLoading(false);
        } catch (err) {
          Toast(toast.error, err.message);
        }
      } else {
        toast.error("Server Error!")
      }
    } catch (err) {
      toast.error(err.messsage);
    }

  };

  const handleChange = (e) => {
    let value = e.target.value.replace(/\D/g, "").replace(/^0+/, "");

    if (!value) {
      setUserQuantity("");
      return;
    }

    const numericValue = Number(value);
    if (numericValue <= availableQuantity) {
      setUserQuantity(value);
    } else {
      alert(`You can’t select more than ${availableQuantity} kg`);
    }
  };

  const totalPrice = price * userQuantity;

  const handleAvatarClick = () => {
    navigate("/OwnerDashBoard");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-between">
        <header className="flex rounded-xl h-16 pt-2 bg-(--green) mt-5 w-[95dvw] py-4 text-xl">
          <Link to="/">
            <h1 className="font-bold font-inknut pt-1 ms-10 items-center">
              {OwnerData?.name}
            </h1>
          </Link>
          <div className="ms-83 pb-1 fixed">
            <img src={Avatar} onClick={handleAvatarClick} alt="avatar" />
          </div>
        </header>

        <div className="overflow-scroll scrollbar h-[75vh] mt-8 w-[90dvw]">
          <div className="flex items-center justify-center flex-col ">
            <div>
              <h1 className="text-2xl font-serif font-bold font-stretch-150% inline-block space-x-5">
                Checkout Order
              </h1>
              <img
                className="inline-block ml-1.5"
                src={Checkout}
                alt="Assests"
              />
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 px-4 bg-(--green) py-3 rounded-xl">
            <img
              className="object-cover h-[170px] w-[150px] rounded-xl"
              src={selectedItem.imageUrl}
              alt={selectedItem.commodity}
            />
            <div className="flex items-center justify-center flex-col ml-2">
              <p className="flex bg-white rounded-md text-center font-bold text-2xl text-black px-12 py-1.5 ">
                {selectedItem?.commodity}
              </p>
              <div className="mt-5">
                <span className="bg-white inline-block rounded-md text-center font-bold py-2 px-4 mr-3">
                  {selectedItem?.quantity} KG
                </span>
                <span className="bg-white inline-block rounded-md text-center font-bold py-2 px-4">
                  ₹ {selectedItem?.price}
                </span>
              </div>
              <input
                type="number"
                inputMode="numeric"
                value={userQuantity}
                onChange={handleChange}
                onKeyDown={(e) => {
                  if (["ArrowUp", "ArrowDown", "e", "-", "+"].includes(e.key)) {
                    e.preventDefault();
                  }
                }}
                className="ml-2 mt-5 bg-white inline-block rounded-md w-[190px] text-black p-2"
                placeholder="Enter Quantity"
              />
            </div>
          </div>

          <div className="flex items-center justify-center mt-5 px-4 w-full flex-col bg-(--green) rounded-xl">
            <div className="p-5 w-full max-w-md">
              <div>
                <h1 className="inline-block font-bold font-inter mt-3 ms-2 text-1xl">
                  PAYMENT DETAILS
                </h1>
                <img className="ml-1 inline-block" src={Payment} alt="Assests" />
              </div>
              <div>
                <h2 className="ms-10 mt-1">Commodity Price : ₹ {selectedItem?.price}</h2>
                <h2 className="ms-10 mt-1">Total Quantity : {userQuantity || 0} KG</h2>
                <h2 className="ms-10 mt-1">Total Amount : ₹ {totalPrice}</h2>
                <h2 className="font-bold ms-10 mt-1">UPI ID :</h2>
                <div className="ms-10 mt-2">
                  <a
                    href={`upi://pay?pa=${selectedItem?.farmer?.upiId}&pn=${selectedItem?.farmer?.name}&am=${totalPrice}&cu=INR`}
                    className="bg-white rounded-xl p-2 font-bold ml-2 block"
                    target="_blank"
                  >
                    {selectedItem?.farmer?.upiId}
                  </a>
                </div>

                <div>
                  <h1 className="inline-block font-bold font-inter mt-5 ms-2 text-1xl">
                    DELIVERY DETAILS
                  </h1>
                  <img className="ml-1 inline-block" src={location} alt="Assests" />
                </div>
                <div>
                  <h2 className="ms-10 mt-1">Address : {OwnerData?.address}</h2>
                  <h2 className="ms-10 mt-1">Taluk : {OwnerData?.taluk}</h2>
                  <h2 className="ms-10 mt-1">District : {OwnerData?.district}</h2>
                  <h2 className="ms-10 mt-1">PinCode : {OwnerData?.pincode}</h2>
                </div>

                <div>
                  <h1 className="inline-block font-bold font-inter mt-5 ms-2 text-1xl">
                    FARMER DETAILS
                  </h1>
                  <img className="ml-1 inline-block" src={farmer} alt="Assests" />
                </div>
                <div>
                  <h2 className="ms-10 mt-1">Name : {selectedItem?.farmer?.name}</h2>
                  <a className="ms-10 mt-1" href={`tel:+91${selectedItem?.farmer?.phoneNumber}`}>
                    Number : +91 {selectedItem?.farmer?.phoneNumber}
                  </a>
                  <h2 className="ms-10 mt-1">Address : {selectedItem?.farmer?.address}</h2>
                  <h2 className="ms-10 mt-1">Taluk : {selectedItem?.farmer?.taluk}</h2>
                  <h2 className="ms-10 mt-1">District : {selectedItem?.farmer?.district}</h2>
                </div>
              </div>
            </div>

            <div className="pb-4">
              <Button
                onClick={handleClick}
                className="bg-green-600 text-white font-bold"
                variant="outline"
              >
                ORDER NOW
                <img className="mb-2" src={delivery} alt="Assests" />
              </Button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default OrderMange;
