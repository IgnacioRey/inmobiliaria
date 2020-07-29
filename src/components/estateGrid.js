import React, { useEffect, useContext, useState } from "react";
import getEstates from "../api/getEstate";
import Estate from "./estate";
import FiltersContext from "../context/FilterContext";

const EstatesGrid = () => {
  const [estates, setEstates] = useState();
  const { filter, setFilter } = useContext(FiltersContext);

  useEffect(() => {
    const fetchData = async () => {
      const estatesData = await getEstates();

      setEstates(estatesData);
    };
    fetchData();
  }, []);

  const apiFilter = (estate, filter) => {
    const checkRooms =
      filter.rooms === "" || estate.room_amount === parseInt(filter.rooms);

    const checkBath =
      filter.bathrooms === "" ||
      estate.bathroom_amount === parseInt(filter.bathrooms);

    const checkPark =
      filter.parking === "" ||
      estate.parking_lot_amount === parseInt(filter.parking);

    const checkType =
      filter.propertyType === "" || estate.type.name === filter.propertyType;

    return checkRooms && checkBath && checkPark && checkType;
  };

  return (
    <div className="container my-5">
      {estates ? (
        estates
          .filter((estate) => apiFilter(estate, filter))
          .map((value) => (
            <Estate
              title={value.publication_title}
              description={value.description}
              photo={value.photos}
            />
          ))
      ) : (
        <div class="d-flex align-items-center">
          <strong>Loading...</strong>
          <div
            class="spinner-border ml-auto"
            role="status"
            aria-hidden="true"
          ></div>
        </div>
      )}
    </div>
  );
};

export default EstatesGrid;
