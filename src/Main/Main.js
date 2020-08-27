import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ItemList } from './ItemList';
import { useModalWithData } from './useModalWithData';


const Main = () => {
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
  const{ setSelected, setModalState } = useModalWithData() 

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
      <ItemList data={data} 
        isError={isError} 
        setSelected={setSelected}
        setModalState={setModalState}
      />
    </div>
  );
}

export default Main;