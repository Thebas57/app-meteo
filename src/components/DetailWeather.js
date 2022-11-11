import React, { useState } from "react";
import { days } from "../data/days";

const DetailWeather = ({ weather }) => {
  const date = new Date(weather.dt_txt);
  const icon = "./img/" + weather.weather[0].icon.replace("n", "d") + ".png";

  const [handleInfo, setHandleInfo] = useState(false);

  return (
    <div className="forecast">
      <div
        className="princ-forecast"
        onClick={(e) => setHandleInfo(!handleInfo)}
      >
        <div className="img">
          <img src={icon} alt="meteo" />
        </div>
        <div className="day">
          <span>{days[date.getDay()] + " " + date.getHours() + ":00"}</span>
        </div>
        <div className="info">
          <span>{weather.weather[0].description}</span>
        </div>
        <div className="temp">
          <span>
            {Math.round(weather.main.temp_min)}° /{" "}
            {Math.round(weather.main.temp_max)}°
          </span>
        </div>
      </div>
      {handleInfo && (
        <div className="second-forecast">
          <div className="left">
            <div className="row">
              <span>Ressenti</span>
              <span>{Math.round(weather.main.feels_like)}°</span>
            </div>
            <div className="row">
              <span>Vent</span>
              <span>{Math.round(weather.wind.speed)} km/h</span>
            </div>
          </div>
          <div className="right">
            <div className="row">
              <span>Humidité</span>
              <span>{Math.round(weather.main.humidity)} %</span>
            </div>
            <div className="row">
              <span>Pression</span>
              <span>{Math.round(weather.main.pressure)} hPa</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailWeather;
