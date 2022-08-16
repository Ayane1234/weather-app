import React from "react";

export const Header = ({ title }) => {
  return (
    <section style={styles.headerWrapper}>
      <div style={styles.headerTitle}> {title} </div>
    </section>
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
