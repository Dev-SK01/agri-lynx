import React, { useContext } from "react";
import avatar from "../../assets/avatar.svg";
import FarmerContext from "../context/FarmerContext";

const Navigation = () => {
  const {farmerData} = useContext(FarmerContext);
  // console.log("Navigation :",farmerData);
  return (
    <div className="flex items-center justify-around w-[95%] bg-(--green) rounded-md mx-3 py-2">
      <p className="font-inknut font-bold w-[80%] ml-4 text-center">
        {farmerData[0].name}
      </p>
      <div className="w-[20%] flex items-center justify-center">
        <img src={avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default Navigation;
