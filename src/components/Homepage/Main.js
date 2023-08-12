import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getWeather } from '../../redux/main/mainSlice';
import coordinatesImage from '../../assets/coordinates.png';
import temperatureImage from '../../assets/temperature.png';
import windImage from '../../assets/wind.png';
import weatherImage from '../../assets/weather.png';
import kanoImage from '../../assets/kano.png';
import '../../styles/Main.css';

const Main = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(getWeather());
  }, [dispatch]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const components = [
    {
      id: 'coordinates',
      link: '/details/coordinates',
      imageSrc: coordinatesImage,
      text: 'Coordinate',
      itemCount: '2 items',
    },
    {
      id: 'weather',
      link: '/details/weather',
      imageSrc: weatherImage,
      text: 'Weather',
      itemCount: '2 items',
    },
    {
      id: 'temperature',
      link: '/details/temperature',
      imageSrc: temperatureImage,
      text: 'Temperature',
      itemCount: '6 items',
    },
    {
      id: 'wind',
      link: '/details/wind',
      imageSrc: windImage,
      text: 'Wind',
      itemCount: '2 items',
    },
  ];

  const filteredComponents = components.filter(
    (component) => component.text.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <div className="main-container">
        <div className="kano-main">
          <img className="kano-map" src={kanoImage} alt="" />
          <h2 className="kano-stats">
            KANO
            <br />
            STATE
            <br />
            WEATHER
            <br />
            STATISTICS
            <br />
            <span className="live-data-text">12 LIVE DATA</span>
          </h2>
        </div>

        <hr />
        <div className="search-section">
          <p className="search-text">Search Category</p>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>

        <div className="kano-details">
          {filteredComponents.length > 0 ? (
            filteredComponents.map((component) => (
              <div className={component.id} key={component.id}>
                <div>
                  <Link to={component.link}>
                    <img
                      className={`picture-${component.id}`}
                      src={component.imageSrc}
                      alt=""
                    />
                  </Link>
                </div>
                <div className={`${component.id}-text`}>{component.text}</div>
                <p className="coordinate-items">{component.itemCount}</p>
              </div>
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Main;
