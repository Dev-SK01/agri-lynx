import React, { useContext } from "react";
import avatar from "../../assets/avatar.svg";
import FarmerContext from "../context/FarmerContext";
import { Link, Outlet } from "react-router-dom";
const Navigation = () => {
  const { farmerData } = useContext(FarmerContext);
  // console.log("Navigation :",farmerData);
  return (
    <>
      <div className="flex items-center justify-around w-[95%] bg-(--green) rounded-md mx-3 py-2">
        <Link to="/" className="font-inknut font-bold w-[80%] ml-4 text-center">
          {farmerData?.name || "Farmer Name"}
        </Link>
        <Link
          to="/farmerprofile"
          className="w-[20%] flex items-center justify-center"
        >
          <img src={avatar} alt="avatar" />
        </Link>
      </div>
    </>
  );
};

export default Navigation;
