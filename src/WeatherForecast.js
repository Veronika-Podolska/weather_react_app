import React from "react";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Tuesday</div>
          <img src={props.img.icon} alt="weather-icon" />
          <div className="forecast-degrees">
            <span className="max-degree">17°C</span>
            <span className="min-degree">13°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
