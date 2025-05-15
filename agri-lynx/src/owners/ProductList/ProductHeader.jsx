import React, { useState, useContext, useEffect } from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import avatar from '../../Assest/avatar.svg';

import { Input } from "@/components/ui/input";


import OwnerContext from '../context/OwnerContext';
import { Link, useNavigate } from "react-router-dom";
import Footer from './Footer';
const ProductHeader = () => {
  const { OwnerData, purchasedList,setFilteredCommodities,filteredCommodities } = useContext(OwnerContext);
  const [searchTerm, setSearchTerm] = useState("");
  
  const [checked, setChecked] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  

  
  

  // const filteredCommodities = (purchasedList || []).filter((item) => {
  //   const matchesSearch = item.commodity?.toLowerCase().includes(searchTerm.toLowerCase());
  //   const isLocal = item.district?.toLowerCase() === localDistrict;
  //   const hasQuantity = parseInt(item.quantity) > 0;

   

  //   // Show all matching items if checkbox is checked
  //   // Show only local matching items if checkbox is unchecked
  //   return hasQuantity && matchesSearch && (checked || isLocal);
  // });
  const navigate = useNavigate();

  const handleAvatarClick = () => {
    navigate("/OwnerDashBoard");
  };
  
  const handleClick = (listingId) => {
    navigate(`/order/${listingId}`);
  };
  



 console.log(filteredCommodities)


  return (
    <div className="flex items-center justify-center flex-col">
      {/* Header */}
      <header className='flex rounded-xl h-16 pt-2 bg-(--green) mt-5 w-100 text-xl'>
              <Link to="/">
                <h1 className='font-bold font-inknut pt-1 ms-10 items-center'>
                  {OwnerData?.name}
                </h1>
              </Link>
              <div className='ms-83 pb-1 fixed'>
                <img src={avatar} onClick={handleAvatarClick} alt="avatar" />
              </div>
            </header>

      <div className="w-[100%] overflow-auto h-[79vh] rounded-[25px] scrollbar ">
        {/* Search Bar */}
        <div className='items-center bg-(--teritary) flex rounded-[25px] h-10 pt-2 mt-5 w-100'>
          <Input
            type="text"
            placeholder="Search Your Product"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-(--green) p-5.5 font-inknut rounded-[25px] w-[100%]"
          />
        </div>

        {/* Checkbox */}
        <div className='mt-5 flex items-center'>
          <Checkbox
            checked={checked}
            onCheckedChange={setChecked}
            className="w-6 h-6 rounded border-2 border-black text-white data-[state=checked]:bg-black data-[state=checked]:text-white"
          />
          <label className="ml-2 font-inknut text-lg">Show from other districts</label>
        </div>

        {/* Filtered results */}
        {filteredCommodities.length > 0 ? (
          filteredCommodities.map((item, index) => (            
            <div className='flex border-2 rounded-2xl mb-5 mt-5 bg-(--green)' key={item.listingId} onClick={() => handleClick(item.listingId)}>
              <div className='mb-5' key={index} >
                <h1 className='flex justify-center rounded-xl h-9 pt-0 bg-[var(--primary)] mt-2 ms-2 w-60 items-center text-center font-bold font-inter'>
                  {item.commodity}
                </h1>
                <h1 className='flex justify-center rounded-xl h-9 pt-0 bg-[var(--primary)] mt-2 ms-2 w-60 items-center font-bold font-inter'>
                  {item.farmer?.name}

                </h1>
                <h1 className='flex justify-center rounded-xl h-9 pt-0 bg-[var(--primary)] mt-2 ms-2 w-60 items-center font-bold font-inter'>
                  
                  <a href={`tel:+91${item.farmer?.phoneNumber}`}>
                    +91 <span>{item.farmer?.phoneNumber}</span>
                  </a>
                </h1>
              </div>
              <div className='ml-2'>
                <p className='flex justify-center rounded-xl h-9 pt-0 bg-[var(--primary)] mt-2 ms-2 w-28 items-center font-bold font-inter'>
                  {item.quantity} KG
                </p>
                <img
                  src={item.imageUrl}
                  alt={item.commodity}
                  className='h-20 w-20 mt-3 rounded-2xl object-cover ml-7 '
                />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-red-500 mt-5">No products found</p>
        )}
      </div>

      {/* Footer */}
     <Footer />
    </div>
  );
};

export default ProductHeader;
