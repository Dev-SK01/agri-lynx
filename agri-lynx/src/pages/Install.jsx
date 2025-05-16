import React from "react";
import logo from "/icon/logo.webp";

const Install = ({ install }) => {
  return (
    <section className="w-full h-screen flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col border-2 border-green-300 rounded-lg shadow-lg p-5 bg-green-50 w-[90%] ">
      <img src={logo} alt="Agri Lynx" className="h-[300px]"/>
      <p
        onClick={install}
        className="text-4xl bg-green-400 font-inknut rounded-md w-[55%] text-center py-2 font-bold  cursor-pointer hover:bg-green-500 transition-all duration-300"
      >
        Install
      </p>
      </div>
    </section>
  );
};

export default Install;
