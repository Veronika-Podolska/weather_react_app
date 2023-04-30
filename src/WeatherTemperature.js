import React from "react";

export default function WeatherTemperature({ celsius }) {
  return (
    <span className="weatherTemperature">
      <span className="temperature-degree">{Math.round(celsius)}</span>{" "}
      <span className="celsius-link">°C</span>
    </span>
  );
}
