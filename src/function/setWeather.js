export const setWeather = (forecastWeather) => {
  let weather = "";
  //   let currentWeatherIcon = "";

  if (forecastWeather === 800) {
    weather = "晴れ";
    // currentWeatherIcon = SunnyWhite;
  } else if (forecastWeather === 801) {
    weather = "晴れときどき曇り";
    // currentWeatherIcon = CloudySunnyWhite;
  } else if (802 <= forecastWeather && forecastWeather < 805) {
    weather = "曇り";
    // currentWeatherIcon = CloudyWhite;
  } else if (701 <= forecastWeather && forecastWeather < 782) {
    weather = "靄";
  } else if (600 <= forecastWeather && forecastWeather < 623) {
    weather = "雪";
    // currentWeatherIcon = SnowyWhite;
  } else if (500 <= forecastWeather && forecastWeather < 532) {
    weather = "雨";
    // currentWeatherIcon = RainyWhite;
  } else if (300 <= forecastWeather && forecastWeather < 322) {
    weather = "霧雨";
  } else if (200 <= forecastWeather && forecastWeather < 233) {
    weather = "雷雨";
  } else {
    weather = "その他";
  }

  return weather;
};
