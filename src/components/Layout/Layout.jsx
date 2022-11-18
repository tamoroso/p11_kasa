import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { useLocation } from "react-router-dom";

const Layout = (props) => {
  let location = useLocation(); //Use to handle active state on navigation

  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
