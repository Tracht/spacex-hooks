import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ItemListContainer from './Items/ItemListContainer';

// styled component 
const MainDiv = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`

// component 
const Main = () => {
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  // API call
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
    <MainDiv>
      <ItemListContainer data={data} isError={isError} />
    </MainDiv>
  );
}

export default Main;