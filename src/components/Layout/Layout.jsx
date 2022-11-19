import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={styles.main_content_wrapper}>
      <div className={styles.main_content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
