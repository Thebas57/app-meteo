import axios from "axios";
import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, geoApiUrl } from "../api/api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState("");

  // Fonction quand on choisit une ville
  const handleSearch = (data) => {
    setSearch(data);
    
    onSearchChange(data);
  };

  // Retourne les villes dans la sélection
  const loadOptions = (inputValue) => {
    return axios
      .get(
        geoApiUrl + "/cities?minPopulation=100000&namePrefix=" + inputValue,
        geoApiOptions
      )
      .then(function (response) {
        return {
          options: response.data.data.map((city) => {
            console.log(city);
            return {
              value: city.latitude + " - " + city.longitude,
              label: city.name + ", " + city.countryCode,
            };
          }),
        };
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="search">
      <AsyncPaginate
        placeholder="Rechercher une ville"
        debounceTimeout={600}
        value={search}
        onChange={handleSearch}
        loadOptions={loadOptions}
      />
    </div>
  );
};

export default Search;
