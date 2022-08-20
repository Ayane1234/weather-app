import React from "react";
import { TommorrowDetail } from "../components/TommorrowDetail";
import Book from "../img/book.png";
import BackIcon from "../img/back-icon.svg";
import { testData } from "../api/testDataApi";
import { dateFormat } from "../function/dateFormat";

import { commentUnit } from "../display/commentUnit";
import { WeatherIcon } from "../components/WeatherIcon";

export const Weather = () => {
  //　APIで取得するときは、摂氏で取得するパラメータをつける"&units=metric"
  // 8-15 9:38のデータ
  // console.log(
  //   "testData.list[2].weather[0].id:",
  //   testData.list[2].weather[0].id
  // );
  // console.log("testData.list[1]:", testData.list[1]);

  const getForecastTimestamp = testData.list[0].dt;
  const getForecastCurrentTimeObject = new Date(getForecastTimestamp * 1000);
  const getForecastCurrentTime = dateFormat(
    getForecastCurrentTimeObject,
    "YYYY-MM-DD hh"
  );
  const today = new Date("2022/8/15 21:38:50");
  const currentTime = dateFormat(today, "YYYY-MM-DD hh");
  // console.log("日本時間currentTime:", currentTime);
  // console.log("UTCを日本時間にした天気予報時間", getForecastCurrentTime);

  // 今日の天気の取得
  let currentTemp = "";
  let threeHourTemp = "";
  let sixHourTemp = "";
  let currentWeatherId = "";
  let threeHourWeatherId = "";
  let sixHourWeatherId = "";

  if (getForecastCurrentTime === currentTime) {
    currentTemp = testData.list[0].main.temp;
    threeHourTemp = testData.list[1].main.temp;
    sixHourTemp = testData.list[2].main.temp;

    currentWeatherId = testData.list[0].weather[0].id;
    threeHourWeatherId = testData.list[1].weather[0].id;
    sixHourWeatherId = testData.list[2].weather[0].id;
  } else {
    currentTemp = testData.list[1].main.temp;
    threeHourTemp = testData.list[2].main.temp;
    sixHourTemp = testData.list[3].main.temp;

    currentWeatherId = testData.list[1].weather[0].id;
    threeHourWeatherId = testData.list[2].weather[0].id;
    sixHourWeatherId = testData.list[3].weather[0].id;
  }

  // 表示用日付の取得
  const currentDate = today.getDate();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDay();
  const weekday = ["日", "月", "火", "水", "木", "金", "土"];

  const displayCurrentDay = weekday[currentDay];
  const displayCurrentMonth = ("0" + currentMonth).slice(-2);
  const displayCurrentDate = ("0" + currentDate).slice(-2);
  const displayToday = `${displayCurrentMonth}.${displayCurrentDate}`;

  // 表示用明日の日付の取得
  const tommorrowDate = today.getDate() + 1; //このままだと、31日の次が、32になる。
  const tommorrowMonth = today.getMonth() + 1;

  const displayTommorrowDate = ("0" + tommorrowDate).slice(-2);
  const displayTommorrowMonth = ("0" + tommorrowMonth).slice(-2);

  const displayTommorrow = `${displayTommorrowMonth}.${displayTommorrowDate}`;

  // 明日の天気の取得
  const tommorrow = new Date("2022/8/15 9:38:50");
  tommorrow.setDate(tommorrow.getDate() + 1);
  const formatedTommorrow = dateFormat(tommorrow, "YYYY-MM-DD");
  const formatedToday = dateFormat(today, "YYYY-MM-DD");

  const tommorrowMorningTime = formatedToday.concat(" 21:00:00");
  const tommorrowNoonTime = formatedTommorrow.concat(" 03:00:00");
  const tommorrowNightTime = formatedTommorrow.concat(" 12:00:00");
  // console.log("tommorrowNightTime:", tommorrowNightTime);
  const tommorowMorningForecast = testData.list.filter(
    (list) => list.dt_txt === tommorrowMorningTime
  );

  const tommorrowNoonForeast = testData.list.filter(
    (list) => list.dt_txt === tommorrowNoonTime
  );

  const tommorrowNightForecast = testData.list.filter(
    (list) => list.dt_txt === tommorrowNightTime
  );

  const tommorrowNightTimestamp = tommorrowNightForecast[0].dt;
  // console.log("tommorrowNightTimestamp:", tommorrowNightTimestamp);
  const tommorrowNightJapanTime = new Date(tommorrowNightTimestamp * 1000);

  const tommorrowMorningTemp = tommorowMorningForecast[0].main.temp;
  const tommorrowMorningWeatherId = tommorowMorningForecast[0].weather[0].id;

  const tommorrowNoonTemp = tommorrowNoonForeast[0].main.temp;
  const tommorrowNoonWeatherId = tommorrowNoonForeast[0].weather[0].id;

  const tommorrowNightTemp = tommorrowNightForecast[0].main.temp;
  const tommorrowNightWeatherId = tommorrowNightForecast[0].weather[0].id;
  console.log("tommorrowNoonForecast:", tommorrowNoonForeast);

  const tommorrowHumidity = tommorrowNoonForeast[0].main.humidity;
  const tommorrowPressure = tommorowMorningForecast[0].main.pressure;

  const tommorrowWindDirection = tommorrowNoonForeast[0].wind.deg;
  const tommorrowWindSpeed = tommorrowNoonForeast[0].wind.speed;
  // 天気予報の前日の21:00が、日本時間の翌日6:00になる
  console.log("風速:", tommorrowWindSpeed);

  return (
    <div>
      <div style={styles.body}>
        <section style={styles.headerWrapper}>
          <img src={BackIcon} alt="バックアイコン" style={styles.backIcon} />
          <div style={styles.regionName}>秋田県の天気</div>
        </section>
        <section style={styles.contentsWrapper}>
          <section style={styles.todaySection}>
            <div style={styles.todayContents}>
              <div style={styles.dateContents}>
                <div style={styles.todayDate}>{displayToday}</div>
                <div style={styles.todayDay}>({displayCurrentDay})</div>
              </div>
              <div style={styles.todayWeather}>
                <div style={styles.currentWeatherSection}>
                  <div style={styles.timeTiltle}>現在</div>
                  <div style={styles.todayWeatherDetail}>
                    <WeatherIcon weatherId={currentWeatherId} date="today" />
                  </div>
                  <div style={styles.todayWeatherTemp}>
                    {currentTemp}
                    {commentUnit.unit.temp}
                  </div>
                </div>

                <div style={styles.threeHourWeatherSection}>
                  <div style={styles.timeTiltle}>3時間後</div>
                  <div style={styles.todayWeatherDetail}>
                    <WeatherIcon weatherId={threeHourWeatherId} date="today" />
                  </div>
                  <div style={styles.todayWeatherTemp}>
                    {threeHourTemp}
                    {commentUnit.unit.temp}
                  </div>
                </div>

                <div style={styles.sixHourWeatherSection}>
                  <div style={styles.timeTiltle}>6時間後</div>
                  <div style={styles.todayWeatherDetail}>
                    <WeatherIcon weatherId={sixHourWeatherId} date="today" />
                  </div>
                  <div style={styles.todayWeatherTemp}>
                    {sixHourTemp}
                    {commentUnit.unit.temp}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section style={styles.tommorrowMainSection}>
            <div style={styles.tommorrowContents}>
              <div style={styles.tomorrowDateContents}>
                <div style={styles.tomorrowDate}>
                  明日の天気({displayTommorrow})
                </div>
              </div>
              <div style={styles.tommorrowWeatherContents}>
                <div style={styles.tommorrowWeather}>
                  <div style={styles.timeTiltle}>朝</div>
                  <div style={styles.tommorrowForcast}>
                    <WeatherIcon
                      weatherId={tommorrowMorningWeatherId}
                      date="tommorrow"
                    />
                  </div>
                  <div style={styles.tommorowWeatherTemp}>
                    {tommorrowMorningTemp}
                    {commentUnit.unit.temp}
                  </div>
                </div>
                <div style={styles.tommorrowWeather}>
                  <div style={styles.timeTiltle}>昼</div>
                  <div style={styles.tommorrowForcast}>
                    <WeatherIcon
                      weatherId={tommorrowNoonWeatherId}
                      date="tommorrow"
                    />
                    {/* <img src={SunnyBlack} alt="晴れ" /> */}
                  </div>
                  <div style={styles.tommorowWeatherTemp}>
                    {tommorrowNoonTemp}
                    {commentUnit.unit.temp}
                  </div>
                </div>
                <div style={styles.tommorrowWeather}>
                  <div style={styles.timeTiltle}>夜</div>
                  <div style={styles.tommorrowForcast}>
                    <WeatherIcon
                      weatherId={tommorrowNightWeatherId}
                      date="tommorrow"
                    />
                    {/* <img src={CloudyBlack} alt="晴れ" /> */}
                  </div>
                  <div style={styles.tommorowWeatherTemp}>
                    {tommorrowNightTemp}
                    {commentUnit.unit.temp}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section style={styles.tommorowSubSection}>
            <div style={styles.tomorrowMessageSection}>
              <div style={styles.tommorrowCommentTiltle}>明日の一言</div>
              <div style={styles.tommorowMessageContents}>
                <img src={Book} alt="本" style={styles.bookIcon} />
                <div style={styles.shippo}></div>
                <div style={styles.comment}>
                  明日はカラッと晴れた日になりそう。気分転換を混ぜながら、勉強頑張ってくださいね。
                </div>
              </div>
            </div>
            <TommorrowDetail
              tommorrowHumidity={tommorrowHumidity}
              tommorrowPressure={tommorrowPressure}
              tommorrowWindDirection={tommorrowWindDirection}
              tommorrowWindSpeed={tommorrowWindSpeed}
              unit={commentUnit}
            />
          </section>
        </section>
      </div>
    </div>
  );
};
const styles = {
  body: {
    backgroundColor: "#F5F5F7",
    height: "800px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },
  headerWrapper: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    position: "fixed",
    top: 0,
    left: 0,
    height: 40,
    width: "100%",
    // padding: 5,
  },
  backIcon: {
    margin: 10,
    width: 20,
    height: 20,
    top: 0,
    left: 0,
    display: "block",
    position: "fixed",
  },
  regionName: {
    margin: 5,
  },
  contentsWrapper: {
    display: "flex",
    width: "95%",
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 40,
    // border: "1px solid",
  },

  todaySection: {
    backgroundColor: "#2C6FF1",
    borderRadius: "30px",
    margin: "5px 0px 10px 0px",
    width: "90%",
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  todayContents: {
    margin: "0 auto",
    width: "100%",
  },
  dateContents: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    // border: "1px solid black",
  },
  todayDate: {
    fontSize: "30px",
    color: "white",
    // margin: 2,
    // border: "1px solid black",
  },
  todayDay: {
    fontSize: "15px",
    color: "white",
    margin: "0px 0px 7px 3px",
    // border: "1px solid black",
  },
  todayWeather: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // border: "1px solid black",
    // width: "100%",
    height: "150px",
    // margin: 5,
  },

  currentWeatherSection: {
    width: "30%",
    height: "70%",
    // border: "1px solid white",
    fontSize: "18px",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  timeTiltle: {
    textAlign: "center",
    margin: 10,
    // border: "1px solid white",
  },
  todayWeatherDetail: {
    width: "60px",
    height: "60px",
    margin: "0 auto",
    // border: "1px solid white",
  },
  todayWeatherTemp: {
    textAlign: "center",
    margin: 10,
    // border: "1px solid white",
  },

  threeHourWeatherSection: {
    width: "30%",
    height: "70%",
    borderRight: "1px solid white",
    borderLeft: "1px solid white",
    fontSize: "18px",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  sixHourWeatherSection: {
    width: "30%",
    height: "70%",
    // border: "1px solid white",
    fontSize: "18px",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  tommorrowMainSection: {
    // backgroundColor: "white",
    width: "90%",
    height: "200px",
    margin: "0px 0px 20px 0px",
  },
  tommorrowContents: {
    margin: "0 auto",
    // display: "flex",
    // justifyContent: "center",
    width: "100%",
  },
  tomorrowDateContents: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  tommorrowWeatherContents: {
    // width: "200px",
    padding: "0px 20px 0px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "150px",
    borderBottom: "1px solid #707070",
  },

  tommorrowForcast: { width: "60px", height: "60px", margin: "0 auto" },
  tommorowWeatherTemp: { textAlign: "center", margin: 10 },

  tommorowSubSection: {
    display: "flex",
    width: "90%",
    height: "300px",
  },
  tomorrowMessageSection: {
    width: "55%",
    backgroundColor: "#74CBEE",
    borderRadius: "30px",
    padding: 5,
  },
  tommorrowCommentTiltle: {
    display: "flex",
    justifyContent: "center",
    color: "white",
  },
  tommorowMessageContents: {
    padding: 5,
  },
  bookIcon: {
    width: 30,
    height: 30,
  },
  shippo: {
    width: "0px",
    height: "0px",
    position: "absolute",
    // background: "#eee",
    borderStyle: "solid",
    borderWidth: "5px 30px 10px 0px",
    borderColor: "transparent white transparent transparent",
    transform: "rotate(60deg)",
  },
  comment: {
    // zIndex: 1,
    backgroundColor: "white",
    position: "relative",
    display: "inline-block",
    maxWidth: "192px",
    margin: "8px 0px 0px",
    padding: "9px 14px",
    borderRadius: "19px",
    overflowWrap: "break-word",
    clear: "both",
    boxSizing: "content-box",
  },
};
