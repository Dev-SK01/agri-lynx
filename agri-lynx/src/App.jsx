import { useState } from 'react'
import LocalMarketOwnerRegistration from './owners/LocalMarketOwnerRegistration'
import FarmerLogin from './farmers/FarmerLogin'
import FarmerProduceListing from './farmers/FarmerProduceListing'
import FarmerLogisticInformation from './farmers/FarmerLogisticInformation'




function App() {


  return (
    <>
    {/* <LocalMarketOwnerRegistration /> */}
    {/* <FarmerLogin /> */}
    {/* <FarmerProduceListing /> */}
    {/* <ApiCommodityList /> */}
    <FarmerLogisticInformation />
    </>
  )
}

export default App
