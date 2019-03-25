import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from './Icon';

const TitleHerder = styled.h3`
  margin-left: 10px;
  margin-right: 10px;
`;

const Herder = ({ title }) => (
  <header className="nav">
    <TitleHerder>{title}</TitleHerder>
    <Icon src="https://img.icons8.com/metro/26/000000/cat-footprint.png" />
  </header>
);

Herder.propTypes = {
  title: PropTypes.string,
};

Herder.defaultProps = {
  title: 'Hooks Cat',
};

export default Herder;
