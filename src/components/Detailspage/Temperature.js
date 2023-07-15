import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWeather } from '../../redux/main/mainSlice';
import temperatureImage from '../../assets/temperature.png';
import '../../styles/Temperature.css';

const Temperature = () => {
  const kano = useSelector((state) => state.main.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWeather());
  }, [dispatch]);

  return (
    <>
      <div className="coordinate-main">
        <img className="kano-map" src={temperatureImage} alt="" />
        <h2 className="kano-stats">
          <span data-testid="kano2">KANO</span>
          {' '}
          <br />
          {' '}
          <span data-testid="state2">STATE</span>
          {' '}
          <br />
          {' '}
          <span data-testid="temp">TEMPERATURE</span>
          {' '}
          <br />
          <span data-testid="stat2">STATISTICS</span>
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
