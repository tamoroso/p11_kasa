import React, { createContext, useEffect, useState } from "react";

const HousingContext = createContext();

const HousingContextProvider = ({ children }) => {
  const [housingData, setHousingData] = useState(null);

  useEffect(() => {
    const fetchHousingData = () => {
      fetch("./data/housing_data.json")
        .then((response) => response.json())
        .then((result) => setHousingData(result))
        .catch((error) => console.log(`An error occured : ${error}`));
    };

    fetchHousingData();
  }, []);

  return (
    <HousingContext.Provider value={housingData}>
      {children}
    </HousingContext.Provider>
  );
};

export { HousingContext, HousingContextProvider };
