import React, { useEffect, useContext } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import SelectorNumber from "./selectNum";
import SelectorType from "./selectType";
import FiltersContext from "../context/FilterContext";

const Filters = () => {
  const { filter, setFilter } = useContext(FiltersContext);

  const handleChangeRooms = (event) => {
    const fieldValue = event.target.value;
    setFilter({
      ...filter,
      rooms: fieldValue,
    });
  };

  const handleChangeBathrooms = (event) => {
    const fieldValue = event.target.value;
    setFilter({
      ...filter,
      bathrooms: fieldValue,
    });
  };

  const handleChangeParking = (event) => {
    const fieldValue = event.target.value;
    setFilter({
      ...filter,
      parking: fieldValue,
    });
  };

  const handleChangePropertyType = (event) => {
    const fieldValue = event.target.value;
    setFilter({
      ...filter,
      propertyType: fieldValue,
    });
  };

  const cleanFilters = () => {
    setFilter({
      rooms: "",
      bathrooms: "",
      parking: "",
      propertyType: "",
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <SelectorNumber
            value={filter.rooms}
            title={"Rooms"}
            handleChange={handleChangeRooms}
          />
        </Col>
        <Col>
          <SelectorNumber
            value={filter.bathrooms}
            title={"Bathrooms"}
            handleChange={handleChangeBathrooms}
          />
        </Col>
        <Col>
          <SelectorNumber
            value={filter.parking}
            title={"Parking"}
            handleChange={handleChangeParking}
          />
        </Col>
        <Col>
          <SelectorType
            value={filter.propertyType}
            title={"Property Type"}
            handleChange={handleChangePropertyType}
          />
        </Col>
        <Col>
          <button
            onClick={cleanFilters}
            type="button"
            className="btn btn-warning my-5 ml-5"
          >
            BORRAR
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default Filters;
