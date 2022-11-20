import React from "react";
import styles from "./HostAvatar.module.css";

const HostAvatar = ({ host }) => {
  const { name, picture } = host;
  const nameArray = name.split(" ");
  return (
    <div className={styles.host_avatar_wrapper}>
      <span>
        {nameArray[0]}
        <br />
        {nameArray[1]}
      </span>
      {picture && picture.length ? (
        <img src={picture} alt={`${name} avatar`} />
      ) : (
        <div className={styles.host_no_image}></div>
      )}
    </div>
  );
};

export default HostAvatar;
