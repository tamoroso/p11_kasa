import React from "react";
import styles from "./Banner.module.css";

const Banner = ({ backgroundImageSrc, tagline = undefined }) => {
  return (
    <div
      className={styles.banner}
      style={{
        background: `url(${backgroundImageSrc})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {tagline && <h1>{tagline}</h1>}
    </div>
  );
};

export default Banner;
