import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TitleHerder = styled.h3`
  margin-left: 10px;
  margin-right: 10px;
`;

const Herder = ({ title }) => (
  <header className="nav">
    <TitleHerder>{title}</TitleHerder>
    <img
      width="25"
      alt="icon-cat"
      height="25"
      src="https://img.icons8.com/metro/26/000000/cat-footprint.png"
    />
  </header>
);

Herder.propTypes = {
  title: PropTypes.string,
};

Herder.defaultProps = {
  title: 'Cat',
};

export default Herder;
