import React from "react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Container = ({ children }) => {
  return (
    <>
      <div className="flex justify-center items-center  flex-col h-[20vh] bc">
        <Logo />
        <nav className="w-full max-w-sm flex flex-row justify-around bg-(--teritary) px-1 py-2 rounded-sm mb-4">
          <Link
            to={"/"}
            className="text-black bg-(--primary) font-bold font-inter w-1/3 p-2 active:bg-(--secondary) rounded-sm text-center"
          >
            Register
          </Link>
          <Link
            to={"login"}
            className="text-black bg-(--primary) font-bold font-inter w-1/3 p-2 active:bg-(--secondary) rounded-sm text-center"
          >
            Login
          </Link>
        </nav>
      </div>
      <section className="flex items-center  flex-col h-[80vh] overflow-y-scroll">
        {children}
      </section>
    </>
  );
};

export default Container;
