import React from "react";
import { Label, FormGroup } from "reactstrap";

const SelectorNumber = (props) => {
  return (
    <FormGroup className="my-4">
      <Label>
        <h5>{props.title}</h5>
      </Label>
      <select value={props.value} onChange={props.handleChange}>
        <option value="">{props.title}</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </FormGroup>
  );
};
export default SelectorNumber;
