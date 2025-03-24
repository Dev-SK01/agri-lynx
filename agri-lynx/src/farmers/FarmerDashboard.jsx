import React, { useContext } from 'react'
import RegistrationContext from '@/registration/context/RegistrationContext';

const FarmerDashboard = () => {
 const{userData} = useContext(RegistrationContext);
  return (
    <div>
      <p>{userData?.userId}</p>
      <p>{userData?.userType}</p>
    </div>
  )
}

export default FarmerDashboard