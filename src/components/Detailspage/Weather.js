import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWeather } from '../../redux/main/mainSlice';
import weatherImage from '../../assets/weather.png';
import '../../styles/Weather.css';

const Weather = () => {
  const kano = useSelector((state) => state.main.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWeather());
  }, [dispatch]);

  return (
    <>
      <div className="coordinate-main">
        <img className="kano-map" src={weatherImage} alt="" />
        <h2 className="kano-stats">
          <span data-testid="kano3">KANO</span>
          {' '}
          <br />
          {' '}
          <span data-testid="state3">STATE</span>
          {' '}
          <br />
          {' '}
          <span data-testid="weather">WEATHER</span>
          {' '}
          <br />
          <span data-testid="stat3">STATISTICS</span>
        </h2>
      </div>
      <div className="temperature-container">
        <div>
          {kano.weather ? (
            <li className="weather-values">
              Condition:&nbsp;
              {kano.weather[0].main}
            </li>
          ) : null}
        </div>
        <div>
          {kano.weather ? (
            <li className="weather-values">
              Description:&nbsp;
              {kano.weather[0].description}
            </li>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Weather;
