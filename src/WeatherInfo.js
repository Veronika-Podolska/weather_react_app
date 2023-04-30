import React from "react";
import UpdatedDate from "./UpdatedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo({ data }) {
  return (
    <div className="weatherInfo">
      <div className="row">
        <div className="col">
          <h1>{data.city}</h1>
          <UpdatedDate date={data.date} />
          <h3 className="text-capitalize">{data.description}</h3>
          <div>
            <WeatherTemperature celsius={data.temperature} />

            <img src={data.icon} alt="sun-icon" />
          </div>
        </div>
        <div className="col">
          <div className="row weather-info">
            <div className="col ">
              <ul>
                <li>Wind: {Math.round(data.wind)}km/h</li>
                <li>Feels like: {Math.round(data.feelsLike)}°C</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>Humidity: {Math.round(data.humidity)} %</li>
                <li>Pressure: {Math.round(data.pressure)} mb </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
