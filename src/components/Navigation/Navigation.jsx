import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const navItems = [
    {
      label: "Accueil",
      path: "/",
    },
    {
      label: "A Propos",
      path: "/about",
    },
  ];

  return (
    <ul>
      {navItems.map((item, index) => (
        <li key={index}>
          <Link to={item.path}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
