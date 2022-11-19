import React from "react";
import styles from "./Thumb.module.css";

const Thumb = ({ housingCoverSrc, housingTitle }) => {
  return (
    <article className={styles.wrapper}>
      <img
        className={styles.img_content}
        src={housingCoverSrc}
        alt={housingTitle}
      />
      <h3 className={styles.title}>{housingTitle}</h3>
    </article>
  );
};

export default Thumb;
