import React from "react";
import PropTypes from "prop-types";
import FilterLink from "../containers/FilterLink";
import { DropdownButton, Dropdown } from "react-bootstrap";

const Filter = props => {
  const { filters, ...rest } = props;

  return (
    <DropdownButton {...rest}>
      {Object.keys(filters).map((key, index) => (
        <FilterLink key={index} as={Dropdown.Item} filter={key}>
          {filters[key]}
        </FilterLink>
      ))}
    </DropdownButton>
  );
};

Filter.propTypes = {
  filters: PropTypes.object.isRequired,
};

export default Filter;
