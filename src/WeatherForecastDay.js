import React from "react";
import "./weatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function max() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°C`;
  }

  function min() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°C`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  return (
    <div className="weather-forecast-day">
      <div className="forecast-day">{day()}</div>
      <img src={props.data.condition.icon_url} alt="weather-icon" />
      <div className="forecast-degrees">
        <span className="max-degree">{max()}</span>
        <span className="min-degree"> {min()}</span>
      </div>
    </div>
  );
}
