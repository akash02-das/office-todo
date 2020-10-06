import React from "react";
import PropTypes from "prop-types";
import { Input, Button } from "reactstrap";

const SearchPanel = ({ term, handleSearch, toggleForm }) => (
  <div className="d-flex">
    <Input
      className="mr-3"
      placeholder="Enter Search Term"
      value={term}
      onChange={(e) => handleSearch(e.target.value)}
    />
    <Button color="primary" onClick={toggleForm}>
      New
    </Button>
  </div>
);

SearchPanel.propTypes = {
  term: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
};

export default SearchPanel;