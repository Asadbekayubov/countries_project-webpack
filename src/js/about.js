import "../css/main.css";
import "./mode";
import { createCountryInfo } from "./updateUI";
import request from "./request";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const country = urlParams.get("country");

const countryAPI = `https://restcountries.com/v3.1/${country}`;

request(countryAPI)
  .then((data) => {
    createCountryInfo(data[0]);
  })
  .catch((error) => {
    alert(error.message);
  });
