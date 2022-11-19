import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

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
    <ul className={styles.navigation_wrapper}>
      {navItems.map((item, index) => (
        <li key={index}>
          <Link
            to={item.path}
            style={
              item.path === activeLink
                ? { textDecoration: "underline" }
                : undefined
            }
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
