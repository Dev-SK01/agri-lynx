import { useState } from 'react'
import LocalMarketOwnerRegistration from './owners/LocalMarketOwnerRegistration'
import DashBoard from './logistics/DashBoard/DashBoard'
import LocalMarketOwnerProductList from './owners/LocalMarketOwnerProductList'
import LocalMarketOwnerMyOrder from './owners/LocalMarketOwnerMyOrder'
import Logistic from './logistics/Logistic'
function App() {


  return (
    <>
      {/* <LocalMarketOwnerRegistration/>  */}
       {/* <LocalMarketOwnerProductList/>  */}
       {/* <LocalMarketOwnerMyOrder/> */}
      <Logistic />
    </>
  )
}

export default App
