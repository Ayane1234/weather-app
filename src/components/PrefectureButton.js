import React from "react";

export const PrefectureButton = ({ title }) => {
  return (
    <div>
      <div style={styles.prefecture}>{title}</div>
    </div>
  );
};
const styles = {
  prifectureSection: {
    display: "flex",
    flexWrap: "wrap",
    padding: 10,
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
