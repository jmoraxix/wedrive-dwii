// src/routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Vehicles from './pages/Vehicles';
import Suppliers from './pages/Suppliers';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} index />
      <Route path="/vehiculos" element={<Vehicles />} />
      <Route path="/suppliers" element={<Suppliers />} />
    </Routes>
  );
};

export default AppRoutes;
