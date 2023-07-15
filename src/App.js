import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Homepage/Main';
import Details from './components/Detailspage/Details';
import Navbar from './components/Homepage/Navbar';

const App = () => (
  <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details/*" element={<Details />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
