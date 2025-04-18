import React, { useState, useEffect,useContext } from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import avatar from '../../Assest/avatar.svg';
import analytics from '../../Assest/analytics.svg';
import logistic from '../../Assest/logistic.svg';
import ordericon from '../../Assest/ordericon.svg';
import product from '../../Assest/product.svg';
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import OwnerContext from '../context/OwnerContext';
const localMarketOwner = [
  { name: "Rishikesavan", shopName: "Thanjavur Store", district: "madurai" },
];


const ProductHeader = () => {
  const { marketOwnerData } = useContext(OwnerContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [checked, setChecked] = useState(false);

  const localDistrict = marketOwnerData?.district?.toLowerCase() || "";

  const filteredCommodities = marketOwnerData?.produceList?.filter((item) => {
    const matchesSearch = item.commodity
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());

    if (!checked) {
      return (
        typeof item.district === "string" &&
        item.district.toLowerCase() === localDistrict &&
        matchesSearch
      );
    }
    return matchesSearch;
  }) || [];


  return (
    <div className="flex items-center justify-center flex-col">
      {/* Header */}
      <header className='flex rounded-xl h-16 pt-2 bg-(--green) w-100 text-xl top-2.5 fixed'>
        <h1 className='font-bold font-inter pt-1 ms-10 text-1xl'>
          Welcome {localMarketOwner[0]?.name}!
        </h1>
        <div className='ms-83 pb-1 fixed'>
          <img src={avatar} alt="avatar" />
        </div>
      </header>
      <div className="w-[95%] overflow-auto h-[80vh] rounded-md scrollbar mt-19">
        {/* Search Bar */}
        <div className='items-center bg-(--teritary) flex rounded-xl h-10 pt-2 mt-5 w-100  '>
          <Input
            type="text"
            placeholder="Search Your Product"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-(--green) p-5.5 font-inknut rounded-[5px] w-[100%]"
          />
        </div>

        {/* Checkbox to toggle all commodities */}
        <div className='mt-5 flex items-center'>
          <Checkbox
            checked={checked}
            onCheckedChange={setChecked}
            className="w-6 h-6 rounded border-2 border-black text-white data-[state=checked]:bg-black data-[state=checked]:text-white"
          />
          <label className="ml-2 font-inknut text-lg">Show from other district</label>
        </div>


        {/* Display filtered commodities */}
        {filteredCommodities.length > 0 ? (
          filteredCommodities.map((item, index) => (
            <div key={index} className='flex border-2 rounded-2xl mb-5 mt-5 '>
              <div className='mb-5'>
                <h1 className='flex justify-center rounded-xl h-9 pt-2 bg-[var(--teritary)] mt-2 ms-2 w-60 items-center text-center font-bold font-inter'>
                  {item.commodity}
                </h1>
                <h1 className='flex justify-center rounded-xl h-9 pt-2 bg-[var(--teritary)] mt-2 ms-2 w-60 items-center font-bold font-inter'>
                  {marketOwnerData.name}
                </h1>
                <h1 className='flex justify-center rounded-xl h-9 pt-2 bg-[var(--teritary)] mt-2 ms-2 w-60 items-center font-bold font-inter'>
                  +91-{marketOwnerData.phoneNumber}
                </h1>
              </div>
              <div>
                <p className='flex justify-center rounded-xl h-9 pt-2 bg-[var(--teritary)] mt-2 ms-2 w-28 items-center font-bold font-inter'>
                  {item.quantity}
                </p>
                <img
                  src={images[item.commodity] || ''}
                  alt={item.commodity}
                  className='h-20 w-20 mt-2 ms-6 pt-1 rounded-2xl'
                />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-red-500 mt-5">No products found</p>
        )}
      </div>
      {/* Footer Navigation */}
      <footer className="bg-(--green) h-[8vh] rounded-[30px] mt-4 flex items-center justify-evenly py-4 fixed bottom-3">
          <div className='ms-7 me-7 h-12 w-12 bg-white rounded-xl p-1'>
            <img src={product} alt="product" />
          </div>
          <Link to="">
            <div className="ms-7 me-7 h-12 w-12 bg-white rounded-xl p-1">
              <img src={ordericon} alt="orderIcon"  />
            </div>
          </Link>
          <div className='ms-7 me-7 h-12 w-12 bg-white rounded-xl p-1 pt-1'>
            <img src={logistic} alt="logistic" />
          </div>
          <div className='ms-7 me-7 h-12 w-12 bg-white rounded-xl p-1 pt-1'>
            <img src={analytics} alt="analytics" />
          </div>
        </footer>
    </div>
  );
};

export default ProductHeader;
