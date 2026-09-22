import { getIcon } from "./iconloader.js";

export async function displayCurrentWeather(currentWeather, unit) {
  const currentWeatherDiv = document.getElementById("currentWeather");
  const currentTemp = document.getElementById("currentTemp");
  const currentCondition = document.getElementById("currentCondition");
  const currentFeelsLike = document.getElementById("currentFeelsLike");
  const currentHumidity = document.getElementById("currentHumidity");
  const currentWind = document.getElementById("currentWind");
  const currentUvIndex = document.getElementById("currentUvIndex");
  const currentRainChance = document.getElementById("currentRainChance");

  currentTemp.textContent = `${currentWeather.currentTemperature}°${unit}`;
  currentCondition.textContent = currentWeather.condition;
  currentFeelsLike.textContent = `${currentWeather.feelslike}°${unit}`;
  currentHumidity.textContent = `${currentWeather.humidity}%`;
  currentWind.textContent = `${currentWeather.windspeed} ${unit === "C" ? "km/h" : "mph"}`;
  currentUvIndex.textContent = currentWeather.uvindex;
  if (currentRainChance) {
    currentRainChance.textContent = `${currentWeather.precipprob}%`;
  }
  currentWeatherDiv.querySelectorAll(".icon").forEach((icon) => icon.remove());
  const img = document.createElement("img");
  img.src = await getIcon(currentWeather.icon);
  img.classList.add("icon");
  currentWeatherDiv.appendChild(img);
}

export async function displayTodaysInfo(todaysInfo, unit) {
  const description = document.getElementById("description");
  const tempmax = document.getElementById("tempmax");
  const tempmin = document.getElementById("tempmin");
  const sunrise = document.getElementById("sunrise");
  const sunset = document.getElementById("sunset");

  description.textContent = todaysInfo.description;
  tempmin.textContent = `${todaysInfo.tempmin}°${unit}`;
  tempmax.textContent = `${todaysInfo.tempmax}°${unit}`;
  sunrise.textContent = todaysInfo.formattedSunrise;
  sunset.textContent = todaysInfo.formattedSunset;
}

export async function displayHourlyForcast(hourlyForecast, unit) {
  const hourlyContainer = document.getElementById("hourlyContainer");

  hourlyContainer.replaceChildren();

  for (let i = 0; i < 24; i++) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("cards");

    const temperature = document.createElement("h2");
    temperature.textContent = `${hourlyForecast[i].temp}°${unit}`;
    cardDiv.appendChild(temperature);

    const time = document.createElement("p");
    time.textContent = hourlyForecast[i].formattedDate;
    cardDiv.appendChild(time);

    const img = document.createElement("img");
    img.src = await getIcon(hourlyForecast[i].icon);
    img.classList.add("icon");
    cardDiv.appendChild(img);

    hourlyContainer.appendChild(cardDiv);
  }
}

export async function displayWeeklyForcast(weeklyForecast, unit) {
  const weeklyContainer = document.getElementById("weeklyContainer");

  weeklyContainer.replaceChildren();

  for (let i = 0; i < 7; i++) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("cards");

    const datetime = document.createElement("p");
    datetime.textContent = weeklyForecast[i].formattedDate;
    cardDiv.appendChild(datetime);

    const img = document.createElement("img");
    img.src = await getIcon(weeklyForecast[i].icon);
    img.classList.add("icon");
    cardDiv.appendChild(img);

    const condition = document.createElement("p");
    condition.textContent = weeklyForecast[i].conditions;
    cardDiv.appendChild(condition);

    const tempmin = document.createElement("p");
    tempmin.textContent = `${weeklyForecast[i].tempmin}°${unit}`;
    cardDiv.appendChild(tempmin);

    const tempmax = document.createElement("p");
    tempmax.textContent = `${weeklyForecast[i].tempmax}°${unit}`;
    cardDiv.appendChild(tempmax);

    const precipprob = document.createElement("p");
    precipprob.textContent = `${weeklyForecast[i].precipprob}%`;
    cardDiv.appendChild(precipprob);

    weeklyContainer.appendChild(cardDiv);
  }
}
