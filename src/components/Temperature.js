import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWeather } from '../redux/main/mainSlice';
import '../styles/Temperature.css';

const Temperature = () => {
  const kano = useSelector((state) => state.main.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWeather());
  }, [dispatch]);

  return (
    <>
      <div className="coordinate-main">
        <img className="kano-map" src="https://www.pngitem.com/pimgs/m/325-3255572_cloud-sun-weather-weather-forecast-hd-png-download.png" alt="" />
        <h2 className="kano-stats">
          KANO
          {' '}
          <br />
          {' '}
          STATE
          {' '}
          <br />
          {' '}
          TEMPERATURE
          {' '}
          <br />
          STATISTICS
        </h2>
      </div>
      <div className="temperature-container">
        <div>
          {kano.main ? (
            <li className="temperature-values">
              Temperature:&nbsp;
              {kano.main.temp}
            </li>
          ) : null}
        </div>
        <div>
          {kano.main ? (
            <li className="temperature-values">
              Feels Like:&nbsp;
              {kano.main.feels_like}
            </li>
          ) : null}
        </div>
        <div>
          {kano.main ? (
            <li className="temperature-values">
              Minimum Temperature:&nbsp;
              {kano.main.temp_min}
            </li>
          ) : null}
        </div>
        <div>
          {kano.main ? (
            <li className="temperature-values">
              Maximum Temperature:&nbsp;
              {kano.main.temp_max}
            </li>
          ) : null}
        </div>
        <div>
          {kano.main ? (
            <li className="temperature-values">
              Pressure:&nbsp;
              {kano.main.pressure}
            </li>
          ) : null}
        </div>
        <div>
          {kano.main ? (
            <li className="temperature-values">
              Humidity:&nbsp;
              {kano.main.humidity}
            </li>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Temperature;
