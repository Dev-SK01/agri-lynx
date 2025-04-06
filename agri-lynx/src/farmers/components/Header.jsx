import React from "react";
import avatar from "../../assets/avatar.svg";

const Header = () => {
  return (
    <>
      <nav className="flex-col w-dvw justify-items-center h-[8dvh] pe-3">
        <header className="flex justify-center rounded-xl h-16 pt-2 ps-2 bg-(--green) mt-5  w-100 text-xl   top-2">
          <h1 className=" flex font-bold font-inter pt-2  pb-2 ps-2 text-2xl    justify-center w-[80%]">
            Rishi
          </h1>
          <div className=" pb-1  ">
            <img src={avatar} alt="avatar" />
          </div>
        </header>
      </nav>
    </>
  );
};

export default Header;
