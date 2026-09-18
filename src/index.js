// index.js
import "./styles.css";
import {
  getWeatherData,
  getCurrentWeather,
  getWeeklyForecast,
  getHourlyForecast,
  getTodaysForecast,
} from "./data.js";

export const data = await getWeatherData("lahore");

const current = getCurrentWeather(data);
console.log(current.currentTemperature);
console.log(current.condition);
console.log(current.datetime);
console.log(current.feelslike);
console.log(current.humidity);
console.log(current.uvindex);
console.log(current.windspeed);
console.log(current.visibility);

const weekly = getWeeklyForecast(data);
const hourly = getHourlyForecast(data);
const todays = getTodaysForecast(data);
console.log(weekly);
console.log(hourly);
console.log(todays);

// console.log(data);
// console.log(data.resolvedAddress);
// console.log(data.days[0].temp);
// console.log(data.days[0].tempmin);
// console.log(data.days[0].tempmax);
// console.log(data.days[0].hours[0].temp);
// console.log(data.currentConditions.conditions);
