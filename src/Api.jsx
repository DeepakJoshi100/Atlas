import axios from "axios";

export const CountryAllData = () =>
  axios
    .get("https://countriesnow.space/api/v0.1/countries")
    .then(function (response) {
      return response.data;
    });

export const CountryData = () =>
  axios.get("https://restcountries.com/v3.1/all").then(function (response) {
    return response.data;
  });
