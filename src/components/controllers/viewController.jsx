import React from "react";
import PropTypes from "prop-types";
import { Label, CustomInput } from "reactstrap";

const ViewController = ({ view, changeView }) => (
  <div className="d-flex">
    <Label for="list-view" className="mr-4">
      <CustomInput
        type="radio"
        className="d-inline-block"
        id="list-view"
        name="view"
        value="list"
        onChange={changeView}
        checked={view === "list"}
      />
      List View
    </Label>
    <Label for="table-view" className="mr-4">
      <CustomInput
        type="radio"
        className="d-inline-block"
        id="table-view"
        name="view"
        value="table"
        onChange={changeView}
        checked={view === "table"}
      />
      Table View
    </Label>
  </div>
);

ViewController.propTypes = {
  view: PropTypes.string.isRequired,
  changeView: PropTypes.func.isRequired,
};

export default ViewController;
