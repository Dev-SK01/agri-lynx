import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import addBtn from "../../assets/addBtn.svg";
import { SearchIcon } from "lucide-react";
const Search = () => {
  return (
    <div className="flex w-full items-center justify-center mt-10">
      <SearchIcon className="absolute left-8" />
      <Input
        type="text"
        placeholder="Search Your Produces"
        className="bg-(--green) p-5.5 font-inknut rounded-[25px] w-[100%] text-center"
      />
      <Button type="submit" className="p-0 ml-4">
        <img src={addBtn} alt="addBtn" />
      </Button>
    </div>
  );
};

export default Search;
