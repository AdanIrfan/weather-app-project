export async function getWeatherData(location = "lahore", unit) {
  const preferredUnit = unit === "C" ? "metric" : "us";
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${preferredUnit}&include=days%2Chours%2Ccurrent&key=WR3AKUVKS83XAW5ZNKTX35F6N&contentType=json`,
  );

  if (!response.ok) {
    throw new Error("Bad HTTP request| invalid Location");
  }

  return response.json();
}
