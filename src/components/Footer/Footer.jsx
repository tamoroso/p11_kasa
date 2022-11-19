import React from "react";
import { ReactComponent as KasaLogo } from "../../assets/logo/kasa_logo.svg";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <KasaLogo />
      <p>&#169; 2020 Kasa All rights reserved</p>
    </footer>
  );
};

export default Footer;
