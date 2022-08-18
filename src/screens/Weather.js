import React from "react";
import SunnyWhite from "../img/sunny_white.svg";
import CloudyWhite from "../img/cloudy_white.svg";
import RainyWhite from "../img/rainy_white.svg";
import CloudySunnyWhite from "../img/cloudy_sunny_white.svg";
import SnowyWhite from "../img/snowy_white.svg";
import SunnyBlack from "../img/sunny_black.svg";
import CloudyBlack from "../img/cloudy_black.svg";
import Book from "../img/book.png";
import BackIcon from "../img/back-icon.svg";
import { testData } from "../api/testDataApi";
import { dateFormat } from "../function/dateFormat";
import { commentUnit } from "../display/commentUnit";

export const Weather = () => {
  //　APIで取得するときは、摂氏で取得するパラメータをつける"&units=metric"
  // 9:38に取得したテストデータ
  console.log("testData:", testData);
  const getForecastTimestamp = testData.list[0].dt;
  const getForecastCurrentTimeObject = new Date(getForecastTimestamp * 1000);
  const getForecastCurrentTime = dateFormat(
    getForecastCurrentTimeObject,
    "YYYY-MM-DD hh"
  );
  const today = new Date("2022/8/15 19:39:50");
  const currentTime = dateFormat(today, "YYYY-MM-DD hh");
  console.log(" getForecastCurrentTime:", currentTime);

  let currentTemp = "";
  let currentWeather = "";
  let getForecastCurrentWeather = "";
  let currentWeatherIcon = "";
  if (getForecastCurrentTime === currentTime) {
    currentTemp = testData.list[0].main.temp;
  } else {
    currentTemp = testData.list[1].main.temp;
    getForecastCurrentWeather = 600;
    // getForecastCurrentWeather = testData.list[1].weather[0].id;
    console.log("getForecastCurrentWeather:", getForecastCurrentWeather);

    if (getForecastCurrentWeather === 800) {
      currentWeather = "晴れ";
      currentWeatherIcon = SunnyWhite;
    } else if (getForecastCurrentWeather === 801) {
      currentWeather = "晴れときどき曇り";
      currentWeatherIcon = CloudySunnyWhite;
    } else if (
      802 <= getForecastCurrentWeather &&
      getForecastCurrentWeather < 805
    ) {
      currentWeather = "曇り";
      currentWeatherIcon = CloudyWhite;
    } else if (
      701 <= getForecastCurrentWeather &&
      getForecastCurrentWeather < 782
    ) {
      currentWeather = "靄";
    } else if (
      600 <= getForecastCurrentWeather &&
      getForecastCurrentWeather < 623
    ) {
      currentWeather = "雪";
      currentWeatherIcon = SnowyWhite;
    } else if (
      500 <= getForecastCurrentWeather &&
      getForecastCurrentWeather < 532
    ) {
      currentWeather = "雨";
      currentWeatherIcon = RainyWhite;
    } else if (
      300 <= getForecastCurrentWeather &&
      getForecastCurrentWeather < 322
    ) {
      currentWeather = "霧雨";
    } else if (
      200 <= getForecastCurrentWeather &&
      getForecastCurrentWeather < 233
    ) {
      currentWeather = "雷雨";
    } else {
      currentWeather = "その他";
    }
  }
  console.log("currentWeather:", currentWeather);

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
  const tommorrowDate = today.getDate() + 1;
  const tommorrowMonth = today.getMonth() + 1;

  const displayTommorrowDate = ("0" + tommorrowDate).slice(-2);
  const displayTommorrowMonth = ("0" + tommorrowMonth).slice(-2);

  const displayTommorrow = `${displayTommorrowMonth}.${displayTommorrowDate}`;

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
                    <img src={currentWeatherIcon} alt="天気" />
                  </div>
                  <div style={styles.todayWeatherTemp}>
                    {currentTemp}
                    {commentUnit.unit.temp}
                  </div>
                </div>

                <div style={styles.threeHourWeatherSection}>
                  <div style={styles.timeTiltle}>3時間後</div>
                  <div style={styles.todayWeatherDetail}>
                    <img src={CloudyWhite} alt="くもり" />
                  </div>
                  <div style={styles.todayWeatherTemp}>29.0℃</div>
                </div>

                <div style={styles.sixHourWeatherSection}>
                  <div style={styles.timeTiltle}>6時間後</div>
                  <div style={styles.todayWeatherDetail}>
                    <img src={CloudyWhite} alt="くもり" />
                  </div>
                  <div style={styles.todayWeatherTemp}>29.0℃</div>
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
                    <img src={SunnyBlack} alt="晴れ" />
                  </div>
                  <div style={styles.tommorowWeatherTemp}>30.0℃</div>
                </div>
                <div style={styles.tommorrowWeather}>
                  <div style={styles.timeTiltle}>昼</div>
                  <div style={styles.tommorrowForcast}>
                    <img src={SunnyBlack} alt="晴れ" />
                  </div>
                  <div style={styles.tommorowWeatherTemp}>30.0℃</div>
                </div>
                <div style={styles.tommorrowWeather}>
                  <div style={styles.timeTiltle}>夜</div>
                  <div style={styles.tommorrowForcast}>
                    <img src={CloudyBlack} alt="晴れ" />
                  </div>
                  <div style={styles.tommorowWeatherTemp}>28.0℃</div>
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
            <div style={styles.tomorrrowDetailSection}>
              <div style={styles.tommorrowDetailTitle}>明日の詳細</div>
              <div style={styles.tommorrowDetailContents}>
                <div style={styles.tommorrowDetail}>
                  <p>湿度</p>
                  <p>60%</p>
                </div>
                <div style={styles.tommorrowDetail}>
                  <p>気圧</p>
                  <p>1000.0mb</p>
                </div>
                <div style={styles.tommorrowDetail}>
                  <p>風</p>
                  <p>東13kmh</p>
                </div>
              </div>
            </div>
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
  tomorrrowDetailSection: {
    width: "45%",
  },
  tommorrowDetailTitle: {
    display: "flex",
    justifyContent: "center",
  },
  tommorrowDetailContents: {
    padding: 10,
  },
  tommorrowDetail: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #707070",
  },
};
