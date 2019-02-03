import { connect } from "react-redux";
import { Filters } from "../store/filter/actions";
import Filter from "../components/Filter";

const filters = {
  [Filters.SHOW_ALL]: "All",
  [Filters.SHOW_ACTIVE]: "Active",
  [Filters.SHOW_COMPLETED]: "Completed",
};

const mapStateToProps = ({ filter }) => ({
  filters,
  title: `Filter: ${filters[filter]}`,
});

export default connect(
  mapStateToProps,
  {},
)(Filter);
