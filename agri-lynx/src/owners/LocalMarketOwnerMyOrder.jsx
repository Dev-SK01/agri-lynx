import React from 'react'
import MyOrders from './MyOrders/MyOrders';
import { OwnerContextProvider } from './context/OwnerContext';
const LocalMarketOwnerMyOrder = () => {
  return (
    <OwnerContextProvider>
      <MyOrders />
    </OwnerContextProvider>
  )
}

export default LocalMarketOwnerMyOrder
