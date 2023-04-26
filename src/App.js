import React, { useState } from "react";
import "./App.css";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";

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
        <WeatherInfo data={weatherInfo} />
      </div>
    );
  } else {
    const city = "Paris";
    const apiKey = "b7btoe10de74d38af299c8c0fa0d3f98";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
    return <div>Loading</div>;
  }
}
