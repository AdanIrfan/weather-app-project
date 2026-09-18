export async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&include=days%2Chours%2Ccurrent&key=WR3AKUVKS83XAW5ZNKTX35F6N&contentType=json`,
    );
    if (!response.ok) {
      throw new Error("Bad Http request");
    }

    const weather = await response.json();
    return weather;
  } catch (error) {
    console.log(error.message);
  }
}

export function getCurrentWeather(weather) {
  const currentTemperature = weather.currentConditions.temp;
  const condition = weather.currentConditions.conditions;
  const feelslike = weather.currentConditions.feelslike;
  const humidity = weather.currentConditions.humidity;
  const windspeed = weather.currentConditions.windspeed;
  const uvindex = weather.currentConditions.uvindex;
  const visibility = weather.currentConditions.visibility;
  const datetime = weather.currentConditions.datetime;

  return {
    currentTemperature,
    condition,
    feelslike,
    humidity,
    windspeed,
    uvindex,
    visibility,
    datetime,
  };
}

export function getTodaysForecast(weather) {
  const tempmax = weather.days[0].tempmax;
  const tempmin = weather.days[0].tempmin;
  const description = weather.days[0].description;
  const sunrise = weather.days[0].sunrise;
  const sunset = weather.days[0].sunset;
  const icon = weather.days[0].icon;
  return { tempmax, tempmin, description, sunrise, sunset, icon };
}

export function getHourlyForecast(weather) {
  const hourlyForcast = [];
  for (let i = 0; i < 24; i++) {
    const datetime = weather.days[0].hours[i].datetime;
    const temp = weather.days[0].hours[i].temp;
    const conditions = weather.days[0].hours[i].conditions;
    const icon = weather.days[0].hours[i].icon;
    const precipprob = weather.days[0].hours[i].precipprob;
    hourlyForcast.push({ datetime, temp, conditions, icon, precipprob });
  }
  return hourlyForcast;
}

export function getWeeklyForecast(weather) {
  const weeklyForcast = [];
  for (let i = 0; i < 7; i++) {
    const datetime = weather.days[i].datetime;
    const tempmax = weather.days[i].tempmax;
    const tempmin = weather.days[i].tempmin;
    const conditions = weather.days[i].conditions;
    const icon = weather.days[i].icon;
    const precipprob = weather.days[i].precipprob;
    weeklyForcast.push({
      datetime,
      tempmax,
      tempmin,
      conditions,
      icon,
      precipprob,
    });
  }
  return weeklyForcast;
}
