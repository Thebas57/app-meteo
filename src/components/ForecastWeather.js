import React from "react";
import DetailWeather from "./DetailWeather";

const ForecastWeather = ({ weather }) => {
  return (
    <div className="forecastWeather" key={weather.date_txt}>
      <h1>A venir</h1>
      {weather.list.map((jour) => {
        return <DetailWeather weather={jour} key={jour.dt_txt} />;
      })}
    </div>
  );
};

export default ForecastWeather;
