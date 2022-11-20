import React, { useContext } from "react";
import { Link } from "react-router-dom";
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
            <Link key={house?.id} to={`housing/${house?.id}`}>
              <Thumb
                housingCoverSrc={house?.cover}
                housingTitle={house?.title}
              />
            </Link>
          ))}
      </div>
    </>
  );
};

export default Home;
