import React from 'react'
import LocalMarketOwnerAnalytics from './Analytics/LocalMarketOwnerAnalytics'
import { OwnerContextProvider } from './context/OwnerContext';
const Analytics = () => {
  return (
    <>
    <OwnerContextProvider>
    <LocalMarketOwnerAnalytics/>
    </OwnerContextProvider>

   

    </>
  )
}

export default Analytics
