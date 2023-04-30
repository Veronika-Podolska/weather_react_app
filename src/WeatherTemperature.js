import React, { useState } from "react";

export default function WeatherTemperature({ celsius }) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertToFahrenheit() {
    return (celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span className="weatherTemperature">
        <span className="temperature-degree">{Math.round(celsius)}</span>{" "}
        <span className="celsius-link">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="weatherTemperature">
        <span className="temperature-degree">
          {Math.round(convertToFahrenheit())}
        </span>{" "}
        <span className="celsius-link">
          °
          <a href="/" onClick={showCelsius}>
            C
          </a>{" "}
          | F
        </span>
      </span>
    );
  }
}
