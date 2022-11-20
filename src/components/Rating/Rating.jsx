import React from "react";
import { ReactComponent as Star } from "../../assets/icons/star.svg";
import styles from "./Rating.module.css";

const Rating = ({ score }) => {
  const maxScore = 5;
  const ratingArray = [...Array(maxScore).keys()];
  const scoreNumber = parseInt(score, 10);

  if (scoreNumber > maxScore) {
    console.error(
      "An error occured in Rating component : score is above maximum score"
    );
  }

  return (
    <div>
      {isNaN(scoreNumber) || scoreNumber > maxScore ? (
        <span>Aucune note</span>
      ) : (
        ratingArray.map((index) => (
          <Star
            key={index}
            className={index + 1 > score ? styles.disable : styles.active}
          />
        ))
      )}
    </div>
  );
};

export default Rating;
