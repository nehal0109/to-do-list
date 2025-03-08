// src/components/Weather.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../features/tasksSlice';

const Weather = () => {
  const [city, setCity] = useState('New York');
  const dispatch = useDispatch();
  const { weather, status, error } = useSelector((state) => state.tasks);

  const handleFetchWeather = () => {
    if (city.trim()) {
      dispatch(fetchWeather(city));
    }
  };

  return (
    <div className="weather-container">
      <div className="weather-input">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleFetchWeather}>Get Weather</button>
      </div>

      {status === 'loading' && <p>Loading weather data...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {weather && status === 'succeeded' && (
        <div className="weather-info">
          <h4>{weather.name}</h4>
          <p>Temp: {(weather.main.temp - 273.15).toFixed(1)} °C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
