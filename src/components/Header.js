import React from "react";

export const Header = ({ title }) => {
  return (
    <wrapper style={styles.headerWrapper}>
      <div style={styles.headerTitle}> {title} </div>
    </wrapper>
  );
};
const styles = {
  headerWrapper: {
    backgroundColor: "white",
    position: "fixed",
    top: 0,
    left: 0,
    height: 40,
    width: "100%",
  },
  headerTitle: {
    margin: 5,
    display: "flex",
    justifyContent: "center",
  },
};
