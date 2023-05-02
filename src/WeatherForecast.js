import React from "react";
import axios from "axios";

export default function WeatherForecast(props) {
  function showForecast(response) {
    console.log(response.data);
  }
  const query = props.weatherData.city;
  const apiKey = `b7btoe10de74d38af299c8c0fa0d3f98`;
  const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${query}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showForecast);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Tuesday</div>
          <img src={props.weatherData.icon} alt="weather-icon" />
          <div className="forecast-degrees">
            <span className="max-degree">17°C</span>
            <span className="min-degree">13°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
