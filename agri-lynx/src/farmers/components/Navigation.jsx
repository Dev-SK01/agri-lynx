import React from "react";
import avatar from "../../assets/avatar.svg";
const Navigation = () => {
  return (
      <div className="flex items-center justify-around w-[95%] bg-(--green) rounded-md mx-3 py-2">
        <p className="font-inknut font-bold">Prasanth Muthusamy!</p>
        <img src={avatar} alt="avatar" className="ml-20" />
      </div>
  );
};

export default Navigation;
