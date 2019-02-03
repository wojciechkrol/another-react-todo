import { connect } from "react-redux";
import { setFilter } from "../services/filter/actions";
import Link from "../components/Link";

const mapStateToProps = (state, props) => ({
  active: state.filter === props.filter,
});

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => dispatch(setFilter(props.filter)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Link);
