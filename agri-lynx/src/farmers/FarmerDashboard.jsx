import React, { useContext, useEffect } from "react";
import Navigation from "./components/Navigation";
import Search from "./components/Search";
import Produce from "./components/Produce";
import BottomNavigation from "./components/BottomNavigation";
import { PulseLoader } from "react-spinners";
import FarmerContext from "./context/FarmerContext";
import Toast from "@/utils/toast";
import { toast } from "react-toastify";
import welcomeImg from "../assets/welcome.svg";
import RegistrationContext from "@/registration/context/RegistrationContext";

const FarmerDashboard = () => {
  const { userData, setUserData, setOtp, setEmail, setCodeSent } =
    useContext(RegistrationContext);
  const {
    farmerData,
    setFarmerData,
    isContentLoading,
    produceList,
    setProduceList,
    farmerProduces,
    produceDetails,
    setProduceDetails
  } = useContext(FarmerContext);

  const searchProduce = (e) => {
    const produceName = e.target.value.toLowerCase();
    // console.log(produceName.toLowerCase());
    const filteredProduceData = produceList.filter((produce) => {
      if (produce.commodity.toLowerCase().includes(produceName)) {
        // returning the produce list
        return produce;
      }
    });
    // setting the filtered produce list
    if (filteredProduceData.length == 0 || produceName == "") {
      Toast(toast.warn, "No Produces Found...");
      setProduceList(farmerProduces);
    } else {
      setProduceList(filteredProduceData);
    }
  };


  useEffect(() => {
    // setting farmer produce after getting the user data
    if (farmerProduces?.length) {
      setProduceList([...farmerProduces,produceDetails]);
    }
    // registration and login state empty
    setOtp(""), setEmail(""), setCodeSent(false);
    // clean up function
  }, []);

  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <div className="w-[95%] h-[20vh] mt-4">
          <Navigation />
          <Search searchFunction={searchProduce} />
        </div>
        <div
          className={
            !isContentLoading
              ? "w-[95%] overflow-auto h-[67vh] rounded-md scrollbar"
              : "w-[95%] h-[67vh] flex items-center justify-center"
          }
        >
          {!isContentLoading && (
            <>
              {produceList?.length ? (
                <Produce />
              ) : (
                <img
                  src={welcomeImg}
                  alt="welcome-img"
                  className="object-fit h-[67vh]"
                />
              )}
            </>
          )}
          {isContentLoading && <PulseLoader color="#4CA14D" />}
        </div>
        {/* bottom navigation menu */}
        <BottomNavigation />
      </div>
    </>
  );
};

export default FarmerDashboard;
