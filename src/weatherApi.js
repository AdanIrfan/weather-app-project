export async function getWeatherData(location = "lahore") {
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
