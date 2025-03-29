import React, { useContext, useState } from "react";
import editBtn from "../../assets/editBtn.svg";
import FarmerContext from "../context/FarmerContext";
import { Link } from "react-router-dom";

const Produce = () => {
  const { produceList, setProduceList } = useContext(FarmerContext);
  // console.log("ProduceComponent:",produceList);

  const fetchImage = async (commodity) => {
    const SECRET_KEY = "tZgxfcaCQfk66V1uKAGMIOwwUMmK-IH2qEniGtwDfTc";
    const res = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${commodity}&client_id=${SECRET_KEY}`
    );
    const data = await res.json();
    return data.results[0].urls.small;
  };

  return produceList.map((produce) => (
    <section
      className="flex w-full items-center justify-evenly mt-8 bg-(--green) rounded-md py-2  relative"
      key={produce.listingId}
    >
      <div className="bg-(--primary) rounded-lg">
        <img
          src={produce.imageUrl}
          alt={produce.commodity}
          className="object-cover h-40 w-34 rounded-lg"
          loading="lazy"
        />
      </div>
      <Link to={`/updateproduce/${produce.listingId}`}>
        <img
          src={editBtn}
          alt="edit"
          className="bg-(--primary) rounded-lg h-[25px] w-[25px] absolute top-1 right-1"
        />
      </Link>
      <div className="mr-4">
        <p className="bg-(--primary) px-5 py-3 rounded-md font-inter font-bold text-center mr-2">
          {produce.commodity}
        </p>
        <div className="flex items-center justify-around mt-4">
          <p className="bg-(--primary) px-5 py-2 rounded-lg font-inter font-bold text-center">
            {produce.quantity + "KG"}
          </p>
          <p className="bg-(--primary) px-5 py-2 rounded-lg font-inter font-bold text-center ml-2">
            {produce.price + "/KG"}
          </p>
        </div>
        <p className="bg-(--primary) px-5 py-3 rounded-lg font-inter font-bold text-center  mt-3 text-green-600">
          &#8377;{produce.minPrice} - &#8377;{produce.maxPrice}
        </p>
      </div>
    </section>
  ));
};

export default Produce;
