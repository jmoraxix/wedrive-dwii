// src/pages/Vehicles.js
import React from 'react';
import FixedNavbar from '../Component/Navbar';
import Filters from '../Component/Filters';
import VehiclesForSale from '../Component/VehiclesForSale';
import Footer from '../Component/Footer'
import './css/Vehicles.css';

const Vehicles = () => {
  return (
    <div className="vehicles-page">
      <FixedNavbar />
      <div className='vehicles-container'>
        <Filters />
        <VehiclesForSale />
      </div>
      <Footer />

      {/* ... (Resto del contenido de la página de vehículos) ... */}
    </div>
  );
};

export default Vehicles;

