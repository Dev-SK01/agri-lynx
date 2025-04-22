import React from 'react'
import ProductHeader from './ProductList/ProductHeader'
import { OwnerContextProvider } from './context/OwnerContext';
const LocalMarketOwnerProductList = () => {
  return (
    <div>
      <div className="place-content-center flex flex-col items-center justify-center  ">
          <ProductHeader />
      </div>

    </div>
  )
}

export default LocalMarketOwnerProductList