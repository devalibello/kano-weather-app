import { Link } from 'react-router-dom';
import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => (
  <ul className="nav-items">
    <li><Link to="/"><FaChevronLeft className="arrow-back" data-testid="back-button" /></Link></li>
    <li className="main-page">KANO WEATHER STATISTICS</li>
  </ul>
);

export default Navbar;
