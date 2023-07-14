import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getWeather } from '../redux/main/mainSlice';
import '../styles/Main.css';
import Navbar from './Navbar';

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeather());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="kano-main">
          <img className="kano-map" src="https://png.pngitem.com/pimgs/s/435-4356354_map-of-africa-illustration-hd-png-download.png" alt="" />
          <h2 className="kano-stats">
            KANO
            {' '}
            <br />
            {' '}
            STATE
            {' '}
            <br />
            {' '}
            WEATHER
            {' '}
            <br />
            STATISTICS
            {' '}
            <br />
            <span className="live-data-text">12 live data</span>
          </h2>
        </div>

        <hr />

        <div className="kano-details">

          <div className="coordinates">
            <div><Link to="/coordinates"><img className="picture-coordinates" src="https://png.pngitem.com/pimgs/s/265-2652205_google-maps-icon-3d-hd-png-download.png" alt="" /></Link></div>
            <div className="coordinate-text">Coordinate</div>
            <p className="coordinate-items">2 items</p>
          </div>

          <div className="weather">
            <div><Link to="/weather"><img className="picture-weather" src="https://png.pngitem.com/pimgs/s/474-4748242_2000px-weather-sun-clouds-hard-shower-weather-symbols.png" alt="" /></Link></div>
            <div className="weather-text">Weather</div>
            <p className="coordinate-items">2 items</p>
          </div>

          <div className="temperature">
            <div><Link to="/temperature"><img className="picture-temperature" src="https://www.pngitem.com/pimgs/m/325-3255572_cloud-sun-weather-weather-forecast-hd-png-download.png" alt="" /></Link></div>
            <div className="temperature-text">Temperature</div>
            <p className="coordinate-items">6 items</p>
          </div>

          <div className="wind">
            <div><Link to="/wind"><img className="picture-wind" src="https://www.pngitem.com/pimgs/m/10-109358_windy-symbol-weather-wind-png-transparent-png.png" alt="" /></Link></div>
            <div className="wind-text">Wind</div>
            <p className="coordinate-items">2 items</p>
          </div>

        </div>

      </div>
    </>
  );
};

export default Main;
