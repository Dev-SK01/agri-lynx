import React from 'react'
import editBtn from "../../assets/editBtn.svg"
const Produce = () => {
  return (
    <section className="flex w-full items-center justify-around  mt-8 bg-(--green) rounded-md py-8 relative">
        <div className="bg-(--primary)">
            product image
        </div>
        <img 
            src={editBtn} 
            alt="edit" 
            className="bg-(--primary) rounded-md h-[25px] w-[25px] absolute top-1 right-1"
        />
        <div>
            <p className="bg-(--primary)">Commodity Name</p>
           <div className='flex items-center justify-around '>
            <p className="bg-(--primary)">Quantity</p>
            <p className="bg-(--primary)">Price</p>
           </div>
           <p className="bg-(--primary)">Market Price</p>
        </div>
    </section>
  )
}

export default Produce