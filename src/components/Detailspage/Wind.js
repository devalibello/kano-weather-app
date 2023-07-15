import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWeather } from '../../redux/main/mainSlice';
import windImage from '../../assets/wind.png';
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
        <img className="kano-map" src={windImage} alt="" />
        <h2 className="kano-stats">
          <span data-testid="kano4">KANO</span>
          {' '}
          <br />
          {' '}
          <span data-testid="state4">STATE</span>
          {' '}
          <br />
          {' '}
          <span data-testid="wind">WIND</span>
          {' '}
          <br />
          <span data-testid="stat4">STATISTICS</span>
        </h2>
      </div>
      <div className="wind-container">
        <div>
          {kano.wind ? (
            <li className="wind-values">
              Speed:&nbsp;
              {kano.wind.speed}
            </li>
          ) : null}
        </div>
        <div>
          {kano.wind ? (
            <li className="wind-values">
              Degree:&nbsp;
              {kano.wind.deg}
            </li>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Wind;
