import axios from "axios";
import { useState } from "react";
import { weatherApiOptions } from "./api/api";
import CurrentWheater from "./components/CurrentWheater";
import ForecastWeather from "./components/ForecastWeather";
import Search from "./components/Search";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  //On recup la météo (et autres) quand on clique sur une ville
  const handleOnSearchChange = async (data) => {
    const [lat, lon] = data.value.split(" - ");

    //Appelle pour recup les infos de la météo de la ville
    await axios
      .get(
        weatherApiOptions.url +
          "weather?lat=" +
          lat +
          "&lon=" +
          lon +
          "&appid=" +
          weatherApiOptions.key +
          "&lang=fr&units=metric"
      )
      .then((response) => {
        setCurrentWeather({ city: data.label, ...response.data });
      })
      .catch((err) => console.log(err));

    //Appelle pour recup les infos de la météo de la ville LES PROCHAINS JOURS
    await axios
      .get(
        weatherApiOptions.url +
          "forecast?lat=" +
          lat +
          "&lon=" +
          lon +
          "&appid=" +
          weatherApiOptions.key +
          "&cnt=12&lang=fr&units=metric"
      )
      .then((response) => {
        setForecastWeather({ city: data.label, ...response.data });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && forecastWeather ? (
        <>
          <CurrentWheater weather={currentWeather} />
          <ForecastWeather weather={forecastWeather} />
        </>
      ) : (
        <>
          <div className="welcome">
            <h1>Bienvenue sur mon application de météo !</h1>
            <h3>Recherche une ville</h3>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
