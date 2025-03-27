import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import addBtn from "../../assets/addBtn.svg";
import { SearchIcon } from "lucide-react";
import FarmerContext from "../context/FarmerContext";
import Toast from "@/utils/toast";
import { toast } from "react-toastify";

const Search = () => {

  const { produceList, setProduceList, farmerProduces } =
    useContext(FarmerContext);

  // console.log("Search :",produceList);

  const searchProduce = (e) => {
    const produceName = e.target.value;
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

  return (
    <div className="flex w-full items-center justify-center mt-10">
      <SearchIcon className="absolute left-8" />
      <Input
        type="text"
        placeholder="Search Your Produces"
        className="bg-(--green) p-5.5 font-inknut rounded-[25px] w-[100%] text-center"
        onChange={(e) => searchProduce(e)}
      />
      <Button type="submit" className="p-0 ml-4">
        <img src={addBtn} alt="addBtn" />
      </Button>
    </div>
  );
};

export default Search;
