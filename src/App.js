import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import UpdatedDate from "./UpdatedDate";

export default function App() {
  const [ready, setReady] = useState(false);

  const [weatherInfo, setWeatherInfo] = useState({});

  function displayWeather(response) {
    setReady(true);

    setWeatherInfo({
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      pressure: response.data.temperature.pressure,
      feelsLike: response.data.temperature.feels_like,
      description: response.data.condition.description,
      icon: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png",
      date: new Date(response.data.time * 1000),
      city: response.data.city,
    });
  }

  if (ready) {
    return (
      <div className="App">
        <form>
          <input type="search" placeholder="Enter the city" />
          <input type="sumbit" value="search" />
        </form>
        <div className="row">
          <div className="col">
            <h1>{weatherInfo.city}</h1>
            <UpdatedDate date={weatherInfo.date} />
            <h3 className="text-capitalize">{weatherInfo.description}</h3>
            <div>
              <span className="temperature-degree">
                {Math.round(weatherInfo.temperature)}
              </span>{" "}
              <span className="celsius-link">°C</span>
              <img src={weatherInfo.icon} alt="sun-icon" />
            </div>
          </div>
          <div className="col">
            <div className="row weather-info">
              <div className="col ">
                <ul>
                  <li>Wind: {Math.round(weatherInfo.wind)}km/h</li>
                  <li>Feels like: {Math.round(weatherInfo.feelsLike)}°C</li>
                </ul>
              </div>
              <div className="col">
                <ul>
                  <li>Humidity: {Math.round(weatherInfo.humidity)} %</li>
                  <li>Pressure: {Math.round(weatherInfo.pressure)} mb </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const city = "Madrid";
    const apiKey = "b7btoe10de74d38af299c8c0fa0d3f98";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
    return <div>Loading</div>;
  }
}
