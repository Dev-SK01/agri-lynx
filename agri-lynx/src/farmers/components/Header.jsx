import React from "react";
import avatar from "../../assets/avatar.svg";

const Header = () => {
  return (
    <>
      <nav className="flex-col  justify-items-center  px-3 mt-4 h-[10dvh] ">
        <header className="flex justify-center rounded-xl  pt-2 ps-2 bg-(--green)  w-[90dvw]  text-xl   ">
          <h1 className=" flex font-bold font-inter pt-2  pb-2 ps-2 text-2xl    justify-center w-[80%]">
            Rishi
          </h1>
          <div className=" pb-1 ">
            <img src={avatar} alt="avatar" />
          </div>
        </header>
      </nav>
    </>
  );
};

export default Header;
