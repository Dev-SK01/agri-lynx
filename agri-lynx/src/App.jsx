import { useState } from 'react'
import LocalMarketOwnerRegistration from './owners/LocalMarketOwnerRegistration'
import DashBoard from './logistics/DashBoard/DashBoard'
import LocalMarketOwnerProductList from './owners/LocalMarketOwnerProductList'
import LocalMarketOwnerMyOrder from './owners/LocalMarketOwnerMyOrder'
import Logistic from './logistics/Logistic'
import { LogisticContextProvider } from './logistics/context/LogisticContext'
function App() {


  return (
    <>
      <LogisticContextProvider>
        {/* <LocalMarketOwnerRegistration/>  */}
        {/* <LocalMarketOwnerProductList/>  */}
        {/* <LocalMarketOwnerMyOrder/> */}
        <Logistic />
      </LogisticContextProvider>

    </>
  )
}

export default App
