import React from 'react'
import ProductHeader from './ProductList/ProductHeader'

const LocalMarketOwnerProductList = () => {

  // replacing url for fetching the data in the server app useEffect
  if (window.location.pathname === "/localmarketdashboard") {
    window.location.replace(window.location.origin);
  }

  return (
    <div>
      <div className="place-content-center flex flex-col items-center justify-center  ">
          <ProductHeader />
      </div>

    </div>
  )
}

export default LocalMarketOwnerProductList