import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWeather } from '../../redux/main/mainSlice';
import coordinatesImage from '../../assets/coordinates.png';
import '../../styles/Coordinates.css';

const Coordinates = () => {
  const kano = useSelector((state) => state.main.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWeather());
  }, [dispatch]);

  return (
    <>
      <div className="coordinate-main">
        <img className="kano-map" src={coordinatesImage} alt="" />
        <h2 className="kano-stats">
          KANO
          {' '}
          <br />
          {' '}
          STATE
          {' '}
          <br />
          {' '}
          COORDINATE
          {' '}
          <br />
          STATISTICS
        </h2>
      </div>
      <div className="coordinates-container">
        <div>
          {kano.coord ? (
            <li className="coordinate-values">
              Longitude:&nbsp;
              {kano.coord.lon}
            </li>
          ) : null}
        </div>
        <div>
          {kano.coord ? (
            <li className="coordinate-values">
              Latitude:&nbsp;
              {kano.coord.lat}
            </li>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Coordinates;
