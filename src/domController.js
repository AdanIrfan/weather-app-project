export function displayCurrentWeather(currentWeather) {
  const currentTemp = document.getElementById("currentTemp");
  const currentCondition = document.getElementById("currentCondition");
  const currentFeelsLike = document.getElementById("currentFeelsLike");
  const currentHumidity = document.getElementById("currentHumidity");
  const currentWind = document.getElementById("currentWind");

  currentTemp.textContent = currentWeather.currentTemperature;
  currentCondition.textContent = currentWeather.condition;
  currentFeelsLike.textContent = currentWeather.feelslike;
  currentHumidity.textContent = currentWeather.humidity;
  currentWind.textContent = currentWeather.windspeed;
}

export function displayTodaysInfo(todaysInfo) {
  const description = document.getElementById("description");
  const icon = document.getElementById("icon");
  const tempmax = document.getElementById("tempmax");
  const tempmin = document.getElementById("tempmin");
  const sunrise = document.getElementById("sunrise");
  const sunset = document.getElementById("sunset");

  description.textContent = todaysInfo.description;
  icon.textContent = todaysInfo.icon;
  tempmin.textContent = todaysInfo.tempmin;
  tempmax.textContent = todaysInfo.tempmax;
  sunrise.textContent = todaysInfo.sunrise;
  sunset.textContent = todaysInfo.sunset;
}

export function displayHourlyForcast(hourlyForecast) {
  const hourlyContainer = document.getElementById("hourlyContainer");
  hourlyContainer.replaceChildren();

  for (let i = 0; i < 24; i++) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("cards");
    const temperature = document.createElement("h2");
    temperature.textContent = hourlyForecast[i].temp;
    cardDiv.appendChild(temperature);
    const time = document.createElement("p");
    time.textContent = hourlyForecast[i].datetime;
    cardDiv.appendChild(time);
    const icon = document.createElement("p");
    icon.textContent = hourlyForecast[i].icon;
    cardDiv.appendChild(icon);
    hourlyContainer.appendChild(cardDiv);
  }
}

export function displayWeeklyForcast(weeklyForecast) {
  const weeklyContainer = document.getElementById("weeklyContainer");
  weeklyContainer.replaceChildren();

  for (let i = 0; i < 7; i++) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("cards");
    const datetime = document.createElement("p");
    datetime.textContent = weeklyForecast[i].datetime;
    cardDiv.appendChild(datetime);
    const icon = document.createElement("p");
    icon.textContent = weeklyForecast[i].icon;
    cardDiv.appendChild(icon);
    const condition = document.createElement("p");
    condition.textContent = weeklyForecast[i].conditions;
    cardDiv.appendChild(condition);
    const tempmin = document.createElement("p");
    tempmin.textContent = weeklyForecast[i].tempmin;
    cardDiv.appendChild(tempmin);
    const tempmax = document.createElement("p");
    tempmax.textContent = weeklyForecast[i].tempmax;
    cardDiv.appendChild(tempmax);
    const precipprob = document.createElement("p");
    precipprob.textContent = weeklyForecast[i].precipprob;
    cardDiv.appendChild(precipprob);
    weeklyContainer.appendChild(cardDiv);
  }
}
