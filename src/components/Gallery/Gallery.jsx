import React, { useState } from "react";
import { ReactComponent as CaretDown } from "../../assets/icons/caret_down.svg";
import styles from "./Gallery.module.css";

const Gallery = ({ pictures }) => {
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
  const picturesNumber = pictures.length;

  const handleDisplayNextPicture = () => {
    if (currentPictureIndex === picturesNumber - 1) {
      setCurrentPictureIndex(0);
    } else {
      setCurrentPictureIndex((prevState) => (prevState += 1));
    }
  };

  const handleDisplayPreviousPicture = () => {
    if (currentPictureIndex === 0) {
      setCurrentPictureIndex(picturesNumber - 1);
    } else {
      setCurrentPictureIndex((prevState) => (prevState -= 1));
    }
  };

  return (
    <div className={styles.gallery_container}>
      {picturesNumber === 1 ? null : (
        <CaretDown
          onClick={handleDisplayPreviousPicture}
          className={styles.previous}
        />
      )}

      <img
        src={pictures[currentPictureIndex]}
        alt={`housing interior ${currentPictureIndex}`}
      />
      <span className={styles.slides_count}>
        {currentPictureIndex + 1}/{picturesNumber}
      </span>
      {picturesNumber === 1 ? null : (
        <CaretDown onClick={handleDisplayNextPicture} className={styles.next} />
      )}
    </div>
  );
};

export default Gallery;
