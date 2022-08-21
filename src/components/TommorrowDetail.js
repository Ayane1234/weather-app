import React from "react";

export const TommorrowDetail = ({
  tommorrowHumidity,
  tommorrowPressure,
  unit,
  tommorrowWindDirection,
  tommorrowWindSpeed,
}) => {
  let windDirecion = "";
  if (
    tommorrowWindDirection >= 350 &&
    tommorrowWindDirection < 361 &&
    tommorrowWindDirection >= 1 &&
    tommorrowWindDirection < 11
  ) {
    windDirecion = "北";
  } else if (tommorrowWindDirection >= 11 && tommorrowWindDirection < 31) {
    windDirecion = "北北東";
  } else if (tommorrowWindDirection >= 31 && tommorrowWindDirection < 51) {
    windDirecion = "北東";
  } else if (tommorrowWindDirection >= 51 && tommorrowWindDirection < 71) {
    windDirecion = "東北東";
  } else if (tommorrowWindDirection >= 71 && tommorrowWindDirection < 101) {
    windDirecion = "東";
  } else if (tommorrowWindDirection >= 101 && tommorrowWindDirection < 121) {
    windDirecion = "東南東";
  } else if (tommorrowWindDirection >= 121 && tommorrowWindDirection < 141) {
    windDirecion = "南東";
  } else if (tommorrowWindDirection >= 141 && tommorrowWindDirection < 161) {
    windDirecion = "南南東";
  } else if (tommorrowWindDirection >= 161 && tommorrowWindDirection < 191) {
    windDirecion = "南";
  } else if (tommorrowWindDirection >= 191 && tommorrowWindDirection < 211) {
    windDirecion = "南南西";
  } else if (tommorrowWindDirection >= 211 && tommorrowWindDirection < 231) {
    windDirecion = "南西";
  } else if (tommorrowWindDirection >= 231 && tommorrowWindDirection < 251) {
    windDirecion = "西南西";
  } else if (tommorrowWindDirection >= 251 && tommorrowWindDirection < 281) {
    windDirecion = "西";
  } else if (tommorrowWindDirection >= 281 && tommorrowWindDirection < 301) {
    windDirecion = "西北西";
  } else if (tommorrowWindDirection >= 301 && tommorrowWindDirection < 321) {
    windDirecion = "北西";
  } else if (tommorrowWindDirection >= 321 && tommorrowWindDirection < 350) {
    windDirecion = "北北西";
  } else {
    windDirecion = "";
  }
  return (
    <div style={styles.tomorrrowDetailSection}>
      <div style={styles.tommorrowDetailTitle}>明日の詳細</div>
      <div style={styles.tommorrowDetailContents}>
        <div style={styles.tommorrowDetail}>
          <p>湿度</p>
          <p>
            {tommorrowHumidity}
            {unit.unit.humidity}
          </p>
        </div>
        <div style={styles.tommorrowDetail}>
          <p>気圧</p>
          <p>
            {tommorrowPressure}
            {unit.unit.pressure}
          </p>
        </div>
        <div style={styles.tommorrowDetail}>
          <div>風</div>

          <p>
            {windDirecion} {tommorrowWindSpeed}kmh
          </p>
        </div>
      </div>
    </div>
  );
};
const styles = {
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
