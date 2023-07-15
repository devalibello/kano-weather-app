import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWeather } from '../../redux/main/mainSlice';
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
        <img className="kano-map" src="https://png.pngitem.com/pimgs/s/474-4748242_2000px-weather-sun-clouds-hard-shower-weather-symbols.png" alt="" />
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
        </h2>
      </div>
      <div className="temperature-container">
        <div>
          {kano.weather ? (
            <li className="weather-values">
              Weather Condition:&nbsp;
              {kano.weather[0].main}
            </li>
          ) : null}
        </div>
        <div>
          {kano.weather ? (
            <li className="weather-values">
              Weather Description:&nbsp;
              {kano.weather[0].description}
            </li>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Weather;
