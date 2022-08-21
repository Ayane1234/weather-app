import React from "react";
import { Header } from "../components/Header";
import { prefectures } from "../display/prefectures";
import { RegionCard } from "../components/RegionCard";

export const Home = () => {
  // const apikey = "ca3f6ffe199e9fd3f27d3d022faeef47";
  console.log("prefectures:", prefectures);

  return (
    <div style={styles.body}>
      <Header title="お天気検索アプリ" />

      <div>
        <div style={styles.contentsTitleWrapper}>
          <div style={styles.contentsTitle}>都道府県でえらぶ</div>
        </div>
        <section style={styles.contentsWrapper}>
          <div style={styles.regionWrapper}>
            <RegionCard
              prefectures={prefectures.tohoku}
              region="北海道・東北"
              color="blue"
            />
            <RegionCard
              prefectures={prefectures.kanto}
              region="関東"
              color="lightBlue"
            />
            <RegionCard
              prefectures={prefectures.chubu}
              region="中部"
              color="purple"
            />
            <RegionCard
              prefectures={prefectures.kansai}
              region="関西"
              color="blue"
            />
            <RegionCard
              prefectures={prefectures.chugoku}
              region="中国"
              color="lightBlue"
            />
            <RegionCard
              prefectures={prefectures.shikoku}
              region="四国"
              color="purple"
            />
            <RegionCard
              prefectures={prefectures.kyusyu}
              region="九州・沖縄"
              color="blue"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

const styles = {
  body: {
    width: "100%",
    // height: "100%",
    backgroundColor: "#F5F5F7",
    height: "100%",
    position: "relative",
    margin: "0 auto",
    // display: "flex",
    // alignItems: "center",
    // flexDirection: "column",
    // justifyContent: "center",

    paddingTop: 40,
  },
  contentsWrapper: {
    width: "95%",

    margin: "0 auto",
  },
  contentsTitleWrapper: {
    height: "auto",
    display: "flex",
    justifyContent: "flex-start",
    margin: "2px 0px",
  },
  contentsTitle: {
    marginLeft: 40,
  },
  regionWrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
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
