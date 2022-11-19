import React, { useContext } from "react";
import { Banner, Thumb } from "../../components";
import { HousingContext } from "../../context/HousingContext";
import styles from "./Home.module.css";

const Home = () => {
  const housingData = useContext(HousingContext);
  return (
    <>
      <Banner
        backgroundImageSrc={"./assets/images/Background.png"}
        tagline={"Chez vous, partout et ailleurs"}
      />
      <div className={styles.thumb_wrapper}>
        {housingData &&
          housingData.map((house) => (
            <Thumb
              key={house?.id}
              housingCoverSrc={house?.cover}
              housingTitle={house?.title}
            />
          ))}
      </div>
    </>
  );
};

export default Home;
