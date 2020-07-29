import React from "react";
import { Label, FormGroup } from "reactstrap";

const SelectorType = (props) => {
  return (
    <FormGroup>
      <Label>
        <h5>{props.title}</h5>
      </Label>
      <select value={props.value} onChange={props.handleChange}>
        <option value=""></option>
        <option value="Departamento">Apartment</option>
        <option value="Condominio horizontal">Condo</option>
        <option value="Oficina">Office</option>
        <option value="Terreno">Ground</option>
      </select>
    </FormGroup>
  );
};
export default SelectorType;
