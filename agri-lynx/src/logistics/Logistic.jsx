import React from 'react'
import DashBoard from './DashBoard/DashBoard'
import { LogisticContextProvider } from './context/LogisticContext'
const Logistic = () => {
  return (

    <LogisticContextProvider>
      <DashBoard />
    </LogisticContextProvider>
  )
}

export default Logistic

