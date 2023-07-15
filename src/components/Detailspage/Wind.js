import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWeather } from '../../redux/main/mainSlice';
import '../../styles/Wind.css';

const Wind = () => {
  const kano = useSelector((state) => state.main.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWeather());
  }, [dispatch]);

  return (
    <>
      <div className="coordinate-main">
        <img className="kano-map" src="https://www.pngitem.com/pimgs/m/10-109358_windy-symbol-weather-wind-png-transparent-png.png" alt="" />
        <h2 className="kano-stats">
          KANO
          {' '}
          <br />
          {' '}
          STATE
          {' '}
          <br />
          {' '}
          WIND
          {' '}
          <br />
          STATISTICS
        </h2>
      </div>
      <div className="wind-container">
        <div>
          {kano.wind ? (
            <li className="wind-values">
              Wind Speed:&nbsp;
              {kano.wind.speed}
            </li>
          ) : null}
        </div>
        <div>
          {kano.wind ? (
            <li className="wind-values">
              Wind Deg:&nbsp;
              {kano.wind.deg}
            </li>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Wind;
