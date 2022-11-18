import React from "react";
import { useParams } from "react-router-dom";

const Housing = () => {
  const { id } = useParams();

  return <h1>Housing {id}</h1>;
};

export default Housing;
