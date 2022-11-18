import React from "react";

const Thumb = (housingCoverSrc, housingTitle) => {
  return (
    <article>
      <img src={housingCoverSrc} alt={housingTitle} />
      <h3>{housingTitle}</h3>
    </article>
  );
};

export default Thumb;
