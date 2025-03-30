import React, { useState, useEffect } from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import avatar from '../../Assest/avatar.svg';
import analytics from '../../Assest/analytics.svg';
import logistic from '../../Assest/logistic.svg';
import ordericon from '../../Assest/ordericon.svg';
import product from '../../Assest/product.svg';
import { Input } from "@/components/ui/input";

const localMarketOwner = [
    { name: "Rishikesavan", shopName: "Thanjavur Store", location: "Ramnad" }
];

const commodities = [
    { commodity: "Tomato", quantity: "10KG", price: "Rs.10", marketPrice: "12-18", farmerId: "1234567", location: "Madurai", name: "Rishikesavan", phoneNumber: "+91 9874563210",min:"12",max:"34" },
    { commodity: "Brinjal", quantity: "11KG", price: "Rs.8", marketPrice: "0-18", farmerId: "1234", location: "Ramnad", name: "Rishikesavan", phoneNumber: "+91 9874563210" ,min:"12",max:"34"},
    { commodity: "Potato", quantity: "100KG", price: "Rs.28", marketPrice: "25-30", farmerId: "123456", location: "Sivagangai", name: "Rishikesavan", phoneNumber: "+91 9874563210",min:"12",max:"34" },
    { commodity: "Carrot", quantity: "10KG", price: "Rs.10", marketPrice: "12-18", farmerId: "1234567", location: "Madurai", name: "Rishikesavan", phoneNumber: "+91 9874563210",min:"12",max:"34" },
    { commodity: "Beetroot", quantity: "11KG", price: "Rs.8", marketPrice: "0-18", farmerId: "1234", location: "Ramnad", name: "Rishikesavan", phoneNumber: "+91 9874563210",min:"12",max:"34" },
    { commodity: "GroundNut", quantity: "100KG", price: "Rs.28", marketPrice: "25-30", farmerId: "123456", location: "Sivagangai", name: "Rishikesavan", phoneNumber: "+91 9874563210",min:"12",max:"34" },
    { commodity: "Maize", quantity: "10KG", price: "Rs.10", marketPrice: "12-18", farmerId: "1234567", location: "Madurai", name: "Rishikesavan", phoneNumber: "+91 9874563210" ,min:"12",max:"34"},
    { commodity: "Corn", quantity: "11KG", price: "Rs.8", marketPrice: "0-18", farmerId: "1234", location: "Ramnad", name: "Rishikesavan", phoneNumber: "+91 9874563210" ,min:"12",max:"34"},
    { commodity: "Bitterguard", quantity: "100KG", price: "Rs.28", marketPrice: "25-30", farmerId: "123456", location: "Sivagangai", name: "Rishikesavan", phoneNumber: "+91 9874563210",min:"12",max:"34" },
    { commodity: "Tomato", quantity: "10KG", price: "Rs.10", marketPrice: "12-18", farmerId: "1234567", location: "Madurai", name: "Rishikesavan", phoneNumber: "+91 9874563210" ,min:"12",max:"34"},
    { commodity: "Brinjal", quantity: "11KG", price: "Rs.8", marketPrice: "0-18", farmerId: "1234", location: "Ramnad", name: "Rishikesavan", phoneNumber: "+91 9874563210",min:"12",max:"34" },
    { commodity: "Potato", quantity: "100KG", price: "Rs.28", marketPrice: "25-30", farmerId: "123456", location: "Sivagangai", name: "Rishikesavan", phoneNumber: "+91 9874563210" ,min:"12",max:"34"},
    { commodity: "Carrot", quantity: "10KG", price: "Rs.10", marketPrice: "12-18", farmerId: "1234567", location: "Madurai", name: "Rishikesavan", phoneNumber: "+91 9874563210",min:"12",max:"34" },
    { commodity: "Beetroot", quantity: "11KG", price: "Rs.8", marketPrice: "0-18", farmerId: "1234", location: "Ramnad", name: "Rishikesavan", phoneNumber: "+91 9874563210" ,min:"12",max:"34"},
    { commodity: "GroundNut", quantity: "100KG", price: "Rs.28", marketPrice: "25-30", farmerId: "123456", location: "Sivagangai", name: "Rishikesavan", phoneNumber: "+91 9874563210",min:"12",max:"34" },
    { commodity: "Maize", quantity: "10KG", price: "Rs.10", marketPrice: "12-18", farmerId: "1234567", location: "Madurai", name: "Rishikesavan", phoneNumber: "+91 9874563210",min:"12",max:"34" },
    { commodity: "Corn", quantity: "11KG", price: "Rs.8", marketPrice: "0-18", farmerId: "1234", location: "Ramnad", name: "Rishikesavan", phoneNumber: "+91 9874563210" ,min:"12",max:"34"},
    { commodity: "Bitterguard", quantity: "100KG", price: "Rs.28", marketPrice: "25-30", farmerId: "123456", location: "Sivagangai", name: "Rishikesavan", phoneNumber: "+91 9874563210",min:"12",max:"34" }
  
  ];

const accessKey = "ngZx_O2HxOkiG9ML_VctB1Z2ImTU5OsYXNK_Jivcq2E";

const ProductHeader = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [checked, setChecked] = useState(false);
    const [images, setImages] = useState({});

    // Owner's location
    const ownerLocation = localMarketOwner[0]?.location || "";

    // Filter commodities based on checkbox state
    const filteredCommodities = commodities.filter((item) => {
        const matchesSearch = item.commodity.toLowerCase().includes(searchTerm.toLowerCase());
        if (checked) {
            return matchesSearch; // Show all commodities
        }
        return matchesSearch && item.location === ownerLocation; // Show only owner's location commodities
    });

    // Fetch images dynamically from Unsplash
    useEffect(() => {
        const fetchImages = async () => {
            const updatedImages = {};
            await Promise.all(
                commodities.map(async (item) => {
                    const response = await fetch(
                        `https://api.unsplash.com/search/photos?page=1&query=${item.commodity}&client_id=${accessKey}`
                    );
                    const data = await response.json();
                    updatedImages[item.commodity] = data.results[0]?.urls.small || '';
                })
            );
            setImages(updatedImages);
        };
        fetchImages();
    }, []);

    return (
        <div className="flex items-center justify-center flex-col">
            {/* Header */}
            <header className='flex rounded-xl h-16 pt-2 bg-(--green) mt-5 w-100 text-xl'>
                <h1 className='font-bold font-inter pt-1 ms-10 text-1xl'>
                    Welcome {localMarketOwner[0]?.name}!
                </h1>
                <div className='ms-83 pb-1 fixed'>
                    <img src={avatar} alt="avatar" />
                </div>
            </header>

            {/* Search Bar */}
            <div className='items-center bg-(--teritary) flex rounded-xl h-10 pt-2 mt-5 w-100'>
                <Input
                    type="text"
                    placeholder="Search Your Product"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-(--green) p-5.5 font-inter rounded-[5px] w-[100%]"
                />
            </div>

            {/* Checkbox to toggle all commodities */}
            <div className="flex items-center mt-4">
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
                    <div key={index}    >
                        <div>
                            <h1 className='flex justify-center rounded-xl h-9 pt-2 bg-[var(--primary)] mt-2 ms-2 w-60 items-center text-center font-bold font-inter'>
                                {item.commodity}
                            </h1>
                            <h1 className='flex justify-center rounded-xl h-9 pt-2 bg-[var(--primary)] mt-2 ms-2 w-60 items-center font-bold font-inter'>
                                {item.name}
                            </h1>
                            <h1 className='flex justify-center rounded-xl h-9 pt-2 bg-[var(--primary)] mt-2 ms-2 w-60 items-center font-bold font-inter'>
                                {item.phoneNumber}
                            </h1>
                        </div>
                        <div>
                            <p className='flex justify-center rounded-xl h-9 pt-2 bg-[var(--primary)] mt-2 ms-2 w-28 items-center font-bold font-inter'>
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
