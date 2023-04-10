// src/routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Vehicles from './pages/Vehicles';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} index />
      <Route path="/vehiculos" element={<Vehicles />} />
    </Routes>
  );
};

export default AppRoutes;
