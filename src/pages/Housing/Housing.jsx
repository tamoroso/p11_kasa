import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Gallery, HostAvatar, Rating, Tag } from "../../components";
import { HousingContext } from "../../context/HousingContext";

const Housing = () => {
  const { id } = useParams();
  const housingData = useContext(HousingContext);

  const Poc = housingData[0];

  const host = {
    name: "Bobcat Pipo",
    picture: "",
  };

  return (
    <>
      <h1>Housing {id}</h1>
      <Tag tagLabel={"pipo"} />
      <Rating score={"4"} />
      <HostAvatar host={Poc.host} />
      <Gallery pictures={Poc.pictures} />
    </>
  );
};

export default Housing;
