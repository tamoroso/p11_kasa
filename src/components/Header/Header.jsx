import React from "react";
import { Navigation } from "../Navigation";
import { ReactComponent as KasaLogo } from "../../assets/logo/kasa_logo.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <KasaLogo />
      <Navigation />
    </header>
  );
};

export default Header;
