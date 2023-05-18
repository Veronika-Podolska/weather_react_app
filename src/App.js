import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";

export default function App() {
  const defaultCity = "Kyiv";
  const [ready, setReady] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState({});

  const [city, setCity] = useState(defaultCity);

  function displayWeather(response) {
    console.log(response.data.condition.icon);
    setReady(true);
    setWeatherInfo({
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      pressure: response.data.temperature.pressure,
      feelsLike: response.data.temperature.feels_like,
      description: response.data.condition.description,
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChangeCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "b7btoe10de74d38af299c8c0fa0d3f98";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  if (ready) {
    return (
      <div>
        <div className="App">
          <form onSubmit={handleSubmit} className="form-control">
            <div className="row">
              <div className="col-11">
                <input
                  type="search"
                  placeholder="Enter the city"
                  onChange={handleChangeCity}
                  className="input-type"
                />
              </div>
              <div className="col-1">
                <button className="btn"></button>
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherInfo} />
          <WeatherForecast cityName={weatherInfo.city} />
        </div>
        <Footer />
      </div>
    );
  } else {
    search();
    return <div>Loading</div>;
  }
}
