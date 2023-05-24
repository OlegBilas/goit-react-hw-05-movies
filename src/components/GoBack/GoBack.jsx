import React from 'react';
import { Link } from 'react-router-dom';
import { HiChevronLeft } from 'react-icons/hi';
import { PropTypes } from "prop-types";


function GoBack({ to, children }) {
    
    return (
    <Link to={to}>
      <HiChevronLeft />
      {children}
    </Link>
  );
}

GoBack.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node,
}
export default GoBack;
