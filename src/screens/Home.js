import React from "react";
import { Header } from "../components/Header";
import { prefectures } from "../display/prefectures";
import { RegionCard } from "../components/RegionCard";

export const Home = () => {
  // const apikey = "ca3f6ffe199e9fd3f27d3d022faeef47";
  console.log("prefectures:", prefectures);
  const Tohoku = prefectures.tohoku.map((prefecture) => {
    console.log(prefecture);
  });
  return (
    <div style={styles.body}>
      <Header title="お天気検索アプリ" />

      <div>
        <div style={styles.contentsTitleWrapper}>
          <div style={styles.contentsTitle}>都道府県でえらぶ</div>
        </div>
        <section style={styles.contentsWrapper}>
          <div style={styles.regionWrapper}>
            <RegionCard prefectures={prefectures} />

            <div style={styles.regionCardLightBlue}>
              <div style={styles.regionTitleSection}>
                <div>関東地方</div>
              </div>
              <div style={styles.prifectureSection}>
                <div style={styles.prefecture}>東京</div>
                <div style={styles.prefecture}>神奈川</div>
                <div style={styles.prefecture}>埼玉</div>
                <div style={styles.prefecture}>千葉</div>
                <div style={styles.prefecture}>群馬</div>
                <div style={styles.prefecture}>栃木</div>
                <div style={styles.prefecture}>茨城</div>
              </div>
            </div>
            <div style={styles.regionCardPurple}>
              <div style={styles.regionTitleSection}>
                <div>中部地方</div>
              </div>
              <div style={styles.prifectureSection}>
                <div style={styles.prefecture}>静岡</div>
                <div style={styles.prefecture}>山梨</div>
                <div style={styles.prefecture}>愛知</div>
                <div style={styles.prefecture}>長野</div>
                <div style={styles.prefecture}>新潟</div>
                <div style={styles.prefecture}>岐阜</div>
                <div style={styles.prefecture}>富山</div>
                <div style={styles.prefecture}>石川</div>
                <div style={styles.prefecture}>福井</div>
              </div>
            </div>
            <div style={styles.regionCardBlue}>
              <div style={styles.regionTitleSection}>
                <div>関西地方</div>
              </div>
              <div style={styles.prifectureSection}>
                <div style={styles.prefecture}>大阪</div>
                <div style={styles.prefecture}>京都</div>
                <div style={styles.prefecture}>神戸</div>
                <div style={styles.prefecture}>滋賀</div>
                <div style={styles.prefecture}>奈良</div>
                <div style={styles.prefecture}>和歌山</div>
                <div style={styles.prefecture}>三重</div>
              </div>
            </div>
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
