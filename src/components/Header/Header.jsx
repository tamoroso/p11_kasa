import React from "react";
import { Navigation } from "../Navigation";
import { ReactComponent as KasaLogo } from "../../assets/logo/kasa_logo.svg";

const Header = () => {
  return (
    <header>
      <KasaLogo />
      <Navigation />
    </header>
  );
};

export default Header;
