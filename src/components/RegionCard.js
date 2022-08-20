import React from "react";
import { PrefectureButton } from "./PrefectureButton";

export const RegionCard = ({ prefectures, region, color }) => {
  return (
    <div
      style={
        color === "blue"
          ? styles.regionCardBlue
          : color === "lightBlue"
          ? styles.regionCardLightBlue
          : styles.regionCardPurple
      }
    >
      <div style={styles.regionTitleSection}>
        <div>{region}地方</div>
      </div>
      <div style={styles.prifectureSection}>
        {prefectures.map((prefecture, index) => {
          return <PrefectureButton title={prefecture.prefecture} key={index} />;
        })}
      </div>
    </div>
  );
};

const styles = {
  regionCardBlue: {
    backgroundColor: "#2C6FF1",
    width: "90%",
    height: "250px",
    margin: "5px 0px",
    // display: "flex",
    // justifyContent: "center",
    borderRadius: "30px",
  },
  regionCardLightBlue: {
    backgroundColor: "#74CBEE",
    width: "90%",
    height: "250px",
    margin: "5px 0px",
    // display: "flex",
    // justifyContent: "center",
    borderRadius: "30px",
  },
  regionCardPurple: {
    backgroundColor: "#C0C0F7",
    width: "90%",
    height: "250px",
    margin: "5px 0px",
    // display: "flex",
    // justifyContent: "center",
    borderRadius: "30px",
  },
  regionTitleSection: {
    padding: "5px 20px",
    color: "white",
  },
  prifectureSection: {
    display: "flex",
    flexWrap: "wrap",
    padding: 10,
    // alignContent: "space-around",
  },
  prefecture: {
    width: "90px",
    height: "50px",
    margin: 5,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
  },
};
