import React from 'react';
import PropTypes from 'prop-types';

const Herder = ({ title }) => (
  <header className="nav">
    <h3>{title}</h3>
  </header>
);

Herder.propTypes = {
  title: PropTypes.string,
};

Herder.defaultProps = {
  title: 'Cat',
};

export default Herder;
