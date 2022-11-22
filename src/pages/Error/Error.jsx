import React from "react";
import { Link } from "react-router-dom";
import styles from "./Error.module.css";

const Error = () => {
  return (
    <div className={styles.error_content_wrapper}>
      <div className={styles.error_content}>
        <h1>404</h1>
        <p>Oups ! La page que vous demandez n'existe pas.</p>
      </div>
      <Link to={"/"}>Retourner sur la page d'accueil</Link>
    </div>
  );
};

export default Error;
