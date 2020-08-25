import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemList from './ItemList';

const Main = () => {
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  useEffect( () => {
    axios.get('https://api.spacexdata.com/v3/rockets/')
      .then((response) => {
        console.log('succesful api request', response.data)
        setData(response.data)
      })
      .catch((error) => {
        console.log('error with the request', error)
        setIsError(true)
      })
  }, []);

  return(
    <div>
      <ItemList data={data} isError={isError} />
    </div>
  );
}
export default Main