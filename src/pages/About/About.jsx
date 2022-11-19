import React, { useEffect, useState } from "react";
import { Banner, Dropdown } from "../../components";
import styles from "./About.module.css";

const About = () => {
  const [aboutData, setAboutData] = useState();

  useEffect(() => {
    const fetchAboutData = () => {
      fetch("./data/about_data.json")
        .then((response) => response.json())
        .then((result) => setAboutData(result))
        .catch((error) => console.log(`An error occured : ${error}`));
    };

    fetchAboutData();
  }, []);

  return (
    <>
      <Banner backgroundImageSrc={"./assets/images/Background_about.png"} />
      <div className={styles.about_dropdown_container}>
        {aboutData &&
          aboutData.map((item, index) => (
            <Dropdown key={index} dropdownData={item} />
          ))}
      </div>
    </>
  );
};

export default About;
