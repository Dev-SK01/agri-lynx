import React from "react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
const Container = ({ children }) => {
  return (
    <>
      <div className="flex justify-center items-center  flex-col h-[32vh]">
        <Logo />
        <nav className="w-full max-w-sm flex flex-row justify-around bg-(--teritary) px-1 py-2 rounded-sm">
          <Button
            type="submit"
            className="text-black bg-(--primary) font-bold font-inter w-1/3 px-6 active:bg-(--secondary) active:text-white"
          >
            Register
          </Button>
          <Button
            type="submit"
            className="text-black bg-(--primary) font-bold font-inter w-1/3 px-6 active:bg-(--secondary) active:text-white"
          >
            Login
          </Button>
        </nav>
      </div>
      <section className="flex items-center  flex-col h-[68vh] overflow-y-scroll">
        {children}
      </section>
    </>
  );
};

export default Container;
