import React from 'react';

const ImageContent = ({ url, width = 450, height = 350 }) => (
  <div className="image-content">
    <img className="image-cat" alt="test" width={width} height={height} src={url} />
  </div>
);

export default ImageContent;
