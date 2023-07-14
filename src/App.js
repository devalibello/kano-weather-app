import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Coordinates from './components/Coordinates';
import Temperature from './components/Temperature';
import Weather from './components/Weather';
import Wind from './components/Wind';

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
