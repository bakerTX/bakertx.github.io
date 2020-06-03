import React from 'react';
import PropTypes from 'prop-types';

const UnderConstruction = ({ title }) => (
  <>
    <span className="disabled-link">
      {title}
      {' '}
    </span>
    <span>(Under construction)</span>
  </>
);

UnderConstruction.propTypes = {
  title: PropTypes.string.isRequired,
};

export default UnderConstruction;
