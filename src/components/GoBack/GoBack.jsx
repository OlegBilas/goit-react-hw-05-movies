import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { PropTypes } from "prop-types";


function GoBack({ to, children }) {
    
    return (
    <Link to={to}>
      <HiArrowNarrowLeft />
      {children}
    </Link>
  );
}

GoBack.propTypes = {
    to: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]).isRequired,
    children: PropTypes.node,
}
export default GoBack;
