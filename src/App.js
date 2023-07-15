import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Homepage/Main';
import Navbar from './components/Homepage/Navbar';
import Coordinates from './components/Detailspage/Coordinates';
import Temperature from './components/Detailspage/Temperature';
import Weather from './components/Detailspage/Weather';
import Wind from './components/Detailspage/Wind';

const App = () => (
  <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Main} />
        <Route path="/coordinates" Component={Coordinates} />
        <Route path="/temperature" Component={Temperature} />
        <Route path="/weather" Component={Weather} />
        <Route path="/wind" Component={Wind} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
