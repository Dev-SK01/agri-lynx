import React from 'react'
import OrderMange from './OrderCheckOut/OrderMange'
import { OwnerContextProvider } from './context/OwnerContext'
const OrderCheckOut = () => {
  return (
    <>
      <OwnerContextProvider>
        <OrderMange />
        </OwnerContextProvider>

    </>
  )
}

export default OrderCheckOut
