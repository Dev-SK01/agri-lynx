import React from "react";
import { Input } from "@/components/ui/input";
import addBtn from "../../assets/addBtn.svg";
import { SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Search = ({ searchFunction , isAddBtn }) => {
  return (
    <div className="flex w-full items-center justify-center mt-10">
      <SearchIcon className="absolute left-8" />
      <Input
        type="text"
        placeholder="Search Your Produces"
        className="bg-(--green) p-5.5 font-inknut rounded-[25px] w-[100%] text-center"
        onChange={(e) => searchFunction(e)}
      />
      <Link className="p-0 ml-4" to="/addproduce">
        <img src={addBtn} alt="addBtn" />
      </Link>
    </div>
  );
};

export default Search;
