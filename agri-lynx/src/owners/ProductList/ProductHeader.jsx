import React, { useState, useEffect } from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import avatar from '../../Assest/avatar.svg';
import analytics from '../../Assest/analytics.svg';
import logistic from '../../Assest/logistic.svg';
import ordericon from '../../Assest/ordericon.svg';
import product from '../../Assest/product.svg';
import { Input } from "@/components/ui/input";

const localMarketOwner = [
  { name: "Rishikesavan", shopName: "Thanjavur Store", district: "madurai" },
];

const ProductHeader = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [checked, setChecked] = useState(false);
  const [images, setImages] = useState({});

  const [marketOwnerData, setMarketOwnerData] = useState({
    marketOwnerId: "mkt123abc456",
    name: "Ravi ",
    email: "ravimarket@gmail.com",
    phoneNumber: "9876543210",
    alternateNumber: "8765432109",
    address: "456, Market Street, City Center",
    marketName: "Fresh Agro Market",
    district: "Ramanathapuram",
    pincode: "630661",
    state: "TAMIL NADU",
    produceList: [
        {
          commodity: "Tomato",
          quantity: "1000",
          price: "120",
          listingId: "u7g6b52bd7dn9n3b",
          farmerId: "s63hdb38dyb9ae4",
          imageUrl:
            "https://media.istockphoto.com/id/1459115525/photo/tomato-vegetables-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=q6pG5xZ_dEVlzwCvvURp1wNcT7xFYh4IQq_Hlk1bI3k=",
          minPrice: "200",
          maxPrice: "230",
        },
        {
          commodity: "Potato",
          quantity: "100",
          price: "12",
          listingId: "u7g6b52bd7dn9n3q",
          farmerId: "s63hdb38dyb9ae4",
          imageUrl:
            "https://media.istockphoto.com/id/157430678/photo/three-potatoes.webp?a=1&b=1&s=612x612&w=0&k=20&c=xCQkT9Rwrz3XgFnLQfQZ2mq-xTA4WuGkdr23MkdPddA=",
          minPrice: "100",
          maxPrice: "130",
        },
        {
          commodity: "Brinjal",
          quantity: "300",
          price: "20",
          listingId: "u7g6b52bd7dn9n3c",
          farmerId: "s63hdb38dyb9ae4",
          imageUrl:
            "https://images.unsplash.com/photo-1639428134238-b548770d4b77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QnJpbmphbHxlbnwwfDF8MHx8fDI%3D",
          minPrice: "2000",
          maxPrice: "2300",
        },
        {
          commodity: "Water Melon",
          quantity: "200",
          price: "10",
          listingId: "u7g6b52bd7dn9n3d",
          farmerId: "s63hdb38dyb9ae4",
          imageUrl:
            "https://images.unsplash.com/photo-1659667630176-1f2958367059?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdhdGVyJTIwbWVsb258ZW58MHwxfDB8fHwy",
          minPrice: "500",
          maxPrice: "530",
        },

      {
        commodity: "Bitter Guard",
        quantity: "1000",
        price: "250",
        listingId: "u7g6b52bd7dn9n3e",
        farmerId: "s63hdb38dyb9ae4",
        imageUrl:
          "https://images.unsplash.com/photo-1720680052575-e629a9eff73b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Yml0dGVyJTIwZ291cmR8ZW58MHwxfDB8fHwy",
        minPrice: "100",
        maxPrice: "130",
      },
    ],
  },
  
);

  const accessKey = "ngZx_O2HxOkiG9ML_VctB1Z2ImTU5OsYXNK_Jivcq2E";
  const localDistrict = localMarketOwner[0]?.district.toLowerCase();

  // Filter commodities based on checkbox state
  const filteredCommodities = marketOwnerData.produceList.filter((item) => {
    const matchesSearch = item.commodity.toLowerCase().includes(searchTerm.toLowerCase());
  
    // Initially show only products from the local district
    if (!checked) {
      return marketOwnerData.district.toLowerCase() === localDistrict && matchesSearch; 
    }
  
    // If checkbox is checked, show all products
    return matchesSearch;
  });


  // Fetch images dynamically from Unsplash
  useEffect(() => {
    const fetchImages = async () => {
      const updatedImages = {};
      await Promise.all(
        marketOwnerData.produceList.map(async (item) => {
          const response = await fetch(
            `https://api.unsplash.com/search/photos?page=1&query=${item.commodity}&client_id=${accessKey}`
          );
          const data = await response.json();
          updatedImages[item.commodity] = data.results[0]?.urls.small || "";
        })
      );
      setImages(updatedImages);
    };
    fetchImages();
  }, 
  [marketOwnerData.produceList]);

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
          <div className="overflow mt-20">
            {/* Search Bar */}
            <div className='items-center bg-(--teritary) flex rounded-xl h-10 pt-2 mt-5 w-100  '>
                <Input
                    type="text"
                    placeholder="Search Your Product"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-(--green) p-5.5 font-inter rounded-[5px] w-[100%]"
                />
            </div>

            {/* Checkbox to toggle all commodities */}
            <div className='mt-5 items-center'>
                <Checkbox
                    checked={checked}
                    onCheckedChange={setChecked}
                    className="w-6 h-6 border-black-400"
                />
                <label className="ml-2 font-inter text-lg">Show from other district</label>
            </div>

            {/* Display filtered commodities */}
            {filteredCommodities.length > 0 ? (
                filteredCommodities.map((item, index) => (
                    <div key={index}  className='flex border-2 rounded-2xl mb-5 mt-5 '>
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
                <div className='ms-7 me-7 h-12 w-12 bg-white rounded-xl p-0.5'>
                    <img src={ordericon} alt="ordericon" />
                </div>
                <div className='ms-7 me-7 h-12 w-12 bg-white rounded-xl p-1 pt-1.5'>
                    <img src={logistic} alt="logistic" />
                </div>
                <div className='ms-7 me-7 h-12 w-12 bg-white rounded-xl p-1 pt-2'>
                    <img src={analytics} alt="analytics" />
                </div>
            </footer>
        </div>
    );
};

export default ProductHeader;
