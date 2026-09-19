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

async function displayWeather(location) {
  const data = await getWeatherData(location);
  currentPlace.textContent = data.resolvedAddress;

  const currentData = getCurrentWeather(data);
  const weeklyData = getWeeklyForecast(data);
  const hourlyData = getHourlyForecast(data);
  const todaysData = getTodaysInfo(data);

  displayCurrentWeather(currentData);
  displayHourlyForcast(hourlyData);
  displayTodaysInfo(todaysData);
  displayWeeklyForcast(weeklyData);
}

displayWeather(locationString);

function getSearchWeather() {
  const searchBtn = document.getElementById("button");

  searchBtn.addEventListener("click", () => {
    const searchInput = document.getElementById("search").value.trim();
    displayWeather(searchInput);
  });
}
getSearchWeather();
