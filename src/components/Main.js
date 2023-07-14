import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getWeather } from '../redux/main/mainSlice';
import '../styles/Main.css';

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
      link: '/coordinates',
      imageSrc: 'https://png.pngitem.com/pimgs/s/265-2652205_google-maps-icon-3d-hd-png-download.png',
      text: 'Coordinate',
      itemCount: '2 items',
    },
    {
      id: 'weather',
      link: '/weather',
      imageSrc: 'https://png.pngitem.com/pimgs/s/474-4748242_2000px-weather-sun-clouds-hard-shower-weather-symbols.png',
      text: 'Weather',
      itemCount: '2 items',
    },
    {
      id: 'temperature',
      link: '/temperature',
      imageSrc: 'https://www.pngitem.com/pimgs/m/325-3255572_cloud-sun-weather-weather-forecast-hd-png-download.png',
      text: 'Temperature',
      itemCount: '6 items',
    },
    {
      id: 'wind',
      link: '/wind',
      imageSrc: 'https://www.pngitem.com/pimgs/m/10-109358_windy-symbol-weather-wind-png-transparent-png.png',
      text: 'Wind',
      itemCount: '2 items',
    },
  ];

  const filteredComponents = components.filter((component) => component.text.toLowerCase()
    .includes(searchTerm.toLowerCase()));

  return (
    <>
      <div className="main-container">
        <div className="kano-main">
          <img
            className="kano-map"
            src="https://png.pngitem.com/pimgs/s/435-4356354_map-of-africa-illustration-hd-png-download.png"
            alt=""
          />
          <h2 className="kano-stats">
            KANO
            <br />
            STATE
            <br />
            WEATHER
            <br />
            STATISTICS
            <br />
            <span className="live-data-text">12 live data</span>
          </h2>
        </div>

        <hr />

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
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
                <div className={`${component.id}-text`}>
                  {component.text}
                </div>
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
