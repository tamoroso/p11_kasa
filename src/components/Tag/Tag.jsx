import React from "react";
import styles from "./Tag.module.css";

const Tag = ({ tagLabel }) => {
  return <span className={styles.tag}>{tagLabel}</span>;
};

export default Tag;
