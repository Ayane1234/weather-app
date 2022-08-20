import React from "react";
import SunnyWhite from "../img/sunny_white.svg";
import CloudyWhite from "../img/cloudy_white.svg";
import RainyWhite from "../img/rainy_white.svg";
import CloudySunnyWhite from "../img/cloudy_sunny_white.svg";
import SnowyWhite from "../img/snowy_white.svg";
import MistWhite from "../img/mist_white.svg";
import DrizzleWhite from "../img/drizzle_white.svg";
import ThunderStormWhite from "../img/thunderstorm_white.svg";
import DrizzleBlack from "../img/drizzle_black.svg";
import SunnyBlack from "../img/sunny_black.svg";
import CloudyBlack from "../img/cloudy_black.svg";
import RainyBlack from "../img/rainy_black.svg";
import CloudySunnyBlack from "../img/cloudy_sunny_black.svg";
import MistBlack from "../img/mist_black.svg";
import SnowyBlack from "../img/snowy_black.svg";
import ThunderStormBlack from "../img/thunderstorm_black.svg";

export const WeatherIcon = ({ weatherId }) => {
  let weatherIconToday = "";
  let weatherIconTommorrow = "";

  if (weatherId === 800) {
    weatherIconToday = SunnyWhite;
    weatherIconTommorrow = SunnyBlack;
    // currentWeatherIcon = SunnyWhite;
  } else if (weatherId === 801) {
    weatherIconToday = CloudySunnyWhite;
    weatherIconTommorrow = CloudySunnyBlack;

    // currentWeatherIcon = CloudySunnyWhite;
  } else if (802 <= weatherId && weatherId < 805) {
    weatherIconToday = CloudyWhite;
    weatherIconTommorrow = CloudyBlack;
    // currentWeatherIcon = CloudyWhite;
  } else if (701 <= weatherId && weatherId < 782) {
    weatherIconToday = MistWhite;
    weatherIconTommorrow = MistBlack;
  } else if (600 <= weatherId && weatherId < 623) {
    weatherIconToday = SnowyWhite;
    weatherIconTommorrow = SnowyBlack;
    // currentWeatherIcon = SnowyWhite;
  } else if (500 <= weatherId && weatherId < 532) {
    weatherIconToday = RainyWhite;
    weatherIconTommorrow = RainyBlack;
    // currentWeatherIcon = RainyWhite;
  } else if (300 <= weatherId && weatherId < 322) {
    weatherIconToday = DrizzleWhite;
    weatherIconTommorrow = DrizzleBlack;
  } else if (200 <= weatherId && weatherId < 233) {
    weatherIconToday = ThunderStormWhite;
    weatherIconTommorrow = ThunderStormBlack;
  } else {
    weatherIconToday = CloudyWhite;
    weatherIconTommorrow = CloudyBlack;
  }

  return (
    <div>
      <img src={weatherIconToday} alt="天気" />
    </div>
  );
};

// if (getForecastCurrentWeather === 800) {
//   currentWeather = "晴れ";
//   currentWeatherIcon = SunnyWhite;
// } else if (getForecastCurrentWeather === 801) {
//   currentWeather = "晴れときどき曇り";
//   currentWeatherIcon = CloudySunnyWhite;
// } else if (
//   802 <= getForecastCurrentWeather &&
//   getForecastCurrentWeather < 805
// ) {
//   currentWeather = "曇り";
//   currentWeatherIcon = CloudyWhite;
// } else if (
//   701 <= getForecastCurrentWeather &&
//   getForecastCurrentWeather < 782
// ) {
//   currentWeather = "靄";
// } else if (
//   600 <= getForecastCurrentWeather &&
//   getForecastCurrentWeather < 623
// ) {
//   currentWeather = "雪";
//   currentWeatherIcon = SnowyWhite;
// } else if (
//   500 <= getForecastCurrentWeather &&
//   getForecastCurrentWeather < 532
// ) {
//   currentWeather = "雨";
//   currentWeatherIcon = RainyWhite;
// } else if (
//   300 <= getForecastCurrentWeather &&
//   getForecastCurrentWeather < 322
// ) {
//   currentWeather = "霧雨";
// } else if (
//   200 <= getForecastCurrentWeather &&
//   getForecastCurrentWeather < 233
// ) {
//   currentWeather = "雷雨";
// } else {
//   currentWeather = "その他";
// }
