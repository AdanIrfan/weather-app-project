export function getCurrentWeather(weather) {
  const currentTemperature = Math.round(weather.currentConditions.temp);
  const condition = weather.currentConditions.conditions;
  const feelslike = Math.round(weather.currentConditions.feelslike);
  const humidity = Math.round(weather.currentConditions.humidity);
  const windspeed = weather.currentConditions.windspeed;
  const uvindex = weather.currentConditions.uvindex;
  const visibility = weather.currentConditions.visibility;
  const datetime = weather.currentConditions.datetime;

  const date = new Date(`${weather.days[0].datetime}T${datetime}`);

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(date);

  return {
    currentTemperature,
    condition,
    feelslike,
    humidity,
    windspeed,
    uvindex,
    visibility,
    formattedDate,
  };
}

export function getTodaysInfo(weather) {
  const maxtemp = Math.round(weather.days[0].tempmax);
  const mintemp = Math.round(weather.days[0].tempmin);
  const description = weather.days[0].description;

  const sunrise = weather.days[0].sunrise;
  const sunriseDate = new Date(`${weather.days[0].datetime}T${sunrise}`);

  const formattedSunrise = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(sunriseDate);

  const sunset = weather.days[0].sunset;
  const sunsetDate = new Date(`${weather.days[0].datetime}T${sunset}`);

  const formattedSunset = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(sunsetDate);

  const icon = weather.days[0].icon;

  return {
    maxtemp,
    mintemp,
    description,
    formattedSunrise,
    formattedSunset,
    icon,
  };
}

export function getHourlyForecast(weather) {
  const hourlyForecast = [];

  for (let i = 0; i < 24; i++) {
    const datetime = weather.days[0].hours[i].datetime;
    const date = new Date(`${weather.days[0].datetime}T${datetime}`);

    const formattedDate = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
    }).format(date);

    const temp = Math.round(weather.days[0].hours[i].temp);
    const conditions = weather.days[0].hours[i].conditions;
    const icon = weather.days[0].hours[i].icon;
    const precipprob = weather.days[0].hours[i].precipprob;

    hourlyForecast.push({
      formattedDate,
      temp,
      conditions,
      icon,
      precipprob,
    });
  }

  return hourlyForecast;
}

export function getWeeklyForecast(weather) {
  const weeklyForecast = [];

  for (let i = 0; i < 7; i++) {
    const datetime = weather.days[i].datetime;
    const date = new Date(`${datetime}T00:00:00`);

    const formattedDate = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    }).format(date);

    const tempmax = Math.round(weather.days[i].tempmax);
    const tempmin = Math.round(weather.days[i].tempmin);
    const conditions = weather.days[i].conditions;
    const icon = weather.days[i].icon;
    const precipprob = weather.days[i].precipprob;

    weeklyForecast.push({
      formattedDate,
      tempmax,
      tempmin,
      conditions,
      icon,
      precipprob,
    });
  }

  return weeklyForecast;
}
