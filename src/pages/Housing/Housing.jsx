import React, { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Dropdown, Gallery, HostAvatar, Rating, Tag } from "../../components";
import { HousingContext } from "../../context/HousingContext";
import Error from "../Error/Error";
import styles from "./Housing.module.css";

const Housing = () => {
  const { id } = useParams();
  const housingData = useContext(HousingContext);

  const currentHousing = useMemo(() => {
    if (housingData) {
      return housingData[housingData.findIndex((item) => item?.id === id)];
    }
  }, [housingData, id]);

  const dropdownsData = [
    {
      label: "Description",
      content: currentHousing?.description,
    },
    {
      label: `Équipements`,
      content: () =>
        currentHousing?.equipments.map((element, index) => (
          <p key={element + index}>{element}</p>
        )),
    },
  ];

  return (
    <>
      {currentHousing ? (
        <>
          <Gallery pictures={currentHousing?.pictures} />
          <div className={styles.housing_infos}>
            <div>
              <h1>{currentHousing?.title}</h1>
              <p>{currentHousing?.location}</p>
              <div className={styles.tags}>
                {currentHousing?.tags.map((tag, index) => (
                  <Tag key={tag + index} tagLabel={tag} />
                ))}
              </div>
            </div>
            <div>
              <HostAvatar host={currentHousing?.host} />
              <Rating score={currentHousing?.rating} />
            </div>
          </div>
          <div className={styles.housing_description}>
            {dropdownsData.map((dropdownData, index) => (
              <Dropdown
                key={dropdownData.label + index}
                dropdownData={dropdownData}
              />
            ))}
          </div>
        </>
      ) : (
        <Error />
      )}
    </>
  );
};

export default Housing;
