import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImageContent from './ImageContent';
import LoaderRipple from './LoaderRipple';

const BoxCat = () => {
  const [data, setData] = useState({});
  const [url, setUrl] = useState('https://api.thecatapi.com/v1/images/search?mime_types=gif');
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      // Do the fetching...
      setIsLoading(true);
      const result = await axios(url);
      setData(result.data[0]);
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  let [count, setCount] = useState(0);
  useEffect(() => {
    function handleCountChange() {
      setUrl(`https://api.thecatapi.com/v1/images/search?mime_types=${randomMimeType()}`);
    }

    if (count >= 3) {
      count = 0;
      handleCountChange();
    } else {
      handleCountChange();
    }
    return function cleanup() {
      count = 0;
    };
  }, [count]);

  const randomMimeType = () => {
    let mime_types = ['gif', 'jpg', 'png '];
    return mime_types[count];
  };

  return (
    <div className="box">
      {isLoading ? (
        <div className="loader-cat-content">
          <LoaderRipple />
        </div>
      ) : (
        <ImageContent url={data.url} />
      )}

      <div className="btn-content">
        <button className="button-principal" onClick={() => setCount(count + 1)}>
          Random Cat
        </button>
      </div>
    </div>
  );
};

export default BoxCat;
