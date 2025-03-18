import React from 'react';
import RegistrationHeader from './components/RegistrationHeader';
import PersonalDetails from './components/PersonalDetails';
import AddressDetails from './components/AddressDetails';
import BankDetails from './components/BankDetails';

const FarmerRegistration = () => {
  return (
    <section className="flex justify-center items-center  flex-col">
      <RegistrationHeader />
      <PersonalDetails />
      <AddressDetails />
      <BankDetails />
    </section>
  )
}

export default FarmerRegistration