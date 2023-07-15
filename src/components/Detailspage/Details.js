import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Coordinates from './Coordinates';
import Temperature from './Temperature';
import Weather from './Weather';
import Wind from './Wind';

const Details = () => {
  return (
    <>
      <Routes>
        <Route path="/coordinates" element={<Coordinates />} />
        <Route path="/temperature" element={<Temperature />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/wind" element={<Wind />} />
      </Routes>
      <Outlet />
    </>
  );
};

export default Details;
