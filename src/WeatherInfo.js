import React from "react";
import UpdatedDate from "./UpdatedDate";
import "./weatherInfo.css";

export default function WeatherInfo({ data }) {
  return (
    <div className="weatherInfo">
      <div className="row">
        <div className="col">
          <h1>{data.city}</h1>
          <UpdatedDate date={data.date} />
          <h3 className="text-capitalize">{data.description}</h3>
          <div className="weather-degree">
            <span className="weather-degree">
              {Math.round(data.temperature)}{" "}
            </span>
            <img src={data.icon} alt="sun-icon" />
          </div>
        </div>
        <div className="col">
          <div className="row weather-info">
            <div className="col ">
              <ul>
                <li>
                  Wind: <div>{Math.round(data.wind)} km/h</div>
                </li>
                <li>
                  Feels like: <div>{Math.round(data.feelsLike)}°C</div>
                </li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>
                  Humidity: <div>{Math.round(data.humidity)} %</div>
                </li>
                <li>
                  Pressure: <div>{Math.round(data.pressure)} mb </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
