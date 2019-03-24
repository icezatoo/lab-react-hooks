import React from 'react';

const BoxCat = props => (
  <div className="box">
    <div className="image-content ">
      <img
        className="image-cat"
        alt="test"
        width="350"
        src="https://cdn2.thecatapi.com/images/19p.gif"
      />
    </div>

    <div className="btn-content">
      <button className="button-principal">Random Cat</button>
    </div>
  </div>
);

export default BoxCat;
