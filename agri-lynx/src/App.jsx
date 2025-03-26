import { useState } from 'react'
import LocalMarketOwnerRegistration from './owners/LocalMarketOwnerRegistration'
import FarmerLogin from './farmers/FarmerLogin'
import FarmerProduceListing from './farmers/FarmerProduceListing'
import ApiCommodityList from './components/ApiCommodityList'



function App() {


  return (
    <>
    {/* <LocalMarketOwnerRegistration /> */}
    {/* <FarmerLogin /> */}
    <FarmerProduceListing />
    {/* <ApiCommodityList /> */}
    </>
  )
}

export default App
