import React from "react";
import notFoundImg from "../assets/404.svg";
import Logo from "@/registration/components/Logo";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="h-[100vh] w-[100vw] flex flex-col overflow-hidden">
      <div className="flex justify-center items-center  flex-col h-[20vh] bc">
        <Logo />
        <nav className="w-full max-w-sm flex flex-row justify-around bg-(--teritary) px-1 py-2 rounded-sm mb-4">
          <Link
            to="/"
            className="text-black bg-(--primary) font-bold font-inter w-1/3 p-2 active:bg-(--secondary) rounded-sm text-center"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="text-black bg-(--primary) font-bold font-inter w-1/3 p-2 active:bg-(--secondary) rounded-sm text-center"
          >
            Login
          </Link>
        </nav>
      </div>
      <img src={notFoundImg} alt="404" loading="lazy" className="mt-10"/>
    </section>
  );
};

export default NotFound;
