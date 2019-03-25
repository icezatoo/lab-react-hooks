import React from 'react';

const Icon = ({ altIcon = 'icon', width = 25, height = 25, src }) => (
  <img width={width} alt={altIcon} height={height} src={src} />
);

export default Icon;
