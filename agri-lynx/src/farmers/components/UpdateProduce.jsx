import React, { useContext } from "react";
import FarmerContext from "../context/FarmerContext";
import { useNavigate,useParams } from "react-router-dom";
import Navigation from "./Navigation";
import Toast from "@/utils/toast";
import { toast } from "react-toastify";

const UpdateProduce = () => {
  const { farmerData } = useContext(FarmerContext);
  const { listingId } = useParams();
  const navigate = useNavigate();
  // console.log(listingId);

  const updateFarmerProduce = () => {
    try {
      // update backend api
      const res = listingId;
      if (res) {
        Toast(toast.success, "Updated Successfully.");
        // navigating to home after updation
        setTimeout(()=> navigate("/") , 2100);
      }
    } catch (err) {
      console.log(err.message);
      Toast(toast.error,"Server Error!");
    }
  };
  return (
    <div className="flex items-center justify-center flex-col">
      <Navigation />
      <p>FARMER ID :{farmerData.farmerId}</p>
      <p> LISTING ID : {listingId}</p>
      <button onClick={updateFarmerProduce}>Update</button>
    </div>
  );
};

export default UpdateProduce;
