import React from 'react'

const CurrentWheater = ({weather}) => {
    console.log(weather)
  return (
    <div className='current-weather'>
        <div className="info-principale">
            <div className="ville">
                <h1>{weather.name}</h1>
                <h3>{weather.weather[0].description}</h3>
            </div>
            <div className="temperature">
                <h1>{Math.round(weather.main.temp)}°</h1>
            </div>
        </div>
        <div className="info-secondaire">
            <div className="logo">
                <img src={`./img/${weather.weather[0].icon}.png`} alt="sunny" />
            </div>
            <div className="others-info">
                <span>Details</span>
                <div className="row-info">
                    <span>Ressenti</span>
                    <span>{Math.round(weather.main.feels_like)}°</span>
                </div>
                <div className="row-info">
                    <span>Vent</span>
                    <span>{Math.round(weather.wind.speed)} km/h</span>
                </div>
                <div className="row-info">
                    <span>Humidité</span>
                    <span>{Math.round(weather.main.humidity)} %</span>
                </div>
                <div className="row-info">
                    <span>Pression</span>
                    <span>{Math.round(weather.main.pressure)} hPa</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CurrentWheater