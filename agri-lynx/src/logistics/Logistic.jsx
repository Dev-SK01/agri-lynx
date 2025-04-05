import React from 'react'
import DashBoard from './DashBoard/DashBoard'
import { LogisticContextProvider } from './context/LogisticContext'
import LogisticHome from './OrderManagement/LogisticHome'
import OrderCheckOutPage from './OrderManagement/OrderCheckOutPage'
const Logistic = () => {
  return (

    <LogisticContextProvider>
      {/* <DashBoard /> */}
      {/* <LogisticHome/> */}
      <OrderCheckOutPage></OrderCheckOutPage>
    </LogisticContextProvider>
  )
}

export default Logistic

