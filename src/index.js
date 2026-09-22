// index.js
import "./styles.css";
import {
  getCurrentWeather,
  getWeeklyForecast,
  getHourlyForecast,
  getTodaysInfo,
} from "./weatherData.js";
import { getWeatherData } from "./weatherApi.js";

import {
  displayCurrentWeather,
  displayHourlyForcast,
  displayTodaysInfo,
  displayWeeklyForcast,
} from "./domController.js";

function getUserLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        resolve({ latitude, longitude });
      },
      (error) => {
        reject(error);
      },
    );
  });
}
const currentPlace = document.getElementById("currentPlace");
const location = await getUserLocation();
const locationString = `${location.latitude},${location.longitude}`;
const unitToggle = document.getElementById("unit-toggle");
let currentPreference = "C";

if (unitToggle) {
  unitToggle.addEventListener("click", () => {
    currentPreference = currentPreference === "C" ? "F" : "C";
    unitToggle.textContent = currentPreference === "C" ? "°C" : "°F";
    displayWeather(locationString);
  });
}

async function displayWeather(location) {
  try {
    const data = await getWeatherData(location, currentPreference);

    currentPlace.textContent = data.resolvedAddress;

    const currentData = getCurrentWeather(data);
    const weeklyData = getWeeklyForecast(data);
    const hourlyData = getHourlyForecast(data);
    const todaysData = getTodaysInfo(data);

    displayCurrentWeather(currentData, currentPreference);
    displayHourlyForcast(hourlyData, currentPreference);
    displayTodaysInfo(todaysData, currentPreference);
    displayWeeklyForcast(weeklyData, currentPreference);
  } catch (error) {
    alert(error.message);
    return;
  }
}

displayWeather(locationString);

function getSearchWeather() {
  const searchBtn = document.getElementById("searchLocation");
  const searchInput = document.getElementById("search");

  if (!searchBtn || !searchInput) {
    return;
  }

  searchBtn.addEventListener("click", () => {
    const city = searchInput.value.trim();
    if (city === "") {
      alert("Please enter a city");
      return;
    }
    displayWeather(city);
  });
}
getSearchWeather();

console.log("WEBPACK TEST 1");
