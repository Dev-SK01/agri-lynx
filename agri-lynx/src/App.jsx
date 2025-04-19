import React from 'react'
// import { useState } from 'react'
import LocalMarketOwnerRegistration from './owners/LocalMarketOwnerRegistration'
import LocalMarketOwnerDashboard from './owners/DashBoard/LocalMarketOwnerDashboard'
import Dashboard from './owners/Dashboard'
import { ToastContainer, toast } from 'react-toastify';
import {BrowserRouter,Routes,Route} from "react-router-dom"

const App = () => {
  return (
    <>

   {/* <LocalMarketOwnerRegistration /> */}
     <ToastContainer />  
     <Dashboard/>
  </>
  )
}

export default App

