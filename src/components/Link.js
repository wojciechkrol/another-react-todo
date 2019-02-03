import React from "react";
import PropTypes from "prop-types";

const Link = ({ as, active, children, onClick }) => {
  const Tag = as || "a";

  return (
    <Tag
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
      active={active}
    >
      {children}
    </Tag>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Link;
