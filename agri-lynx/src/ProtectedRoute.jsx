import React, { useContext } from 'react'
import RegistrationContext from './registration/context/RegistrationContext';
import { Navigate, Outlet } from 'react-router-dom';

const ProctedRoute = () => {
  const{userData} = useContext(RegistrationContext);
  console.log("Procted Route :",userData);
  if(!userData){
    return <Navigate to="/"/>
  }
  return <Outlet/>;
}

export default ProctedRoute