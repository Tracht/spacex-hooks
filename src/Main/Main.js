import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ItemListContainer from './Items/ItemListContainer';
import NavBar from './NavBar/NavBar';

// styled component 
const MainDiv = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`

// Navigation Bar choices
const inventoryOptions = ['rockets', 'dragons', 'capsules', 'cores', 'missions', 'roadster', 'ships'];

// component 
const Main = () => {
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
  const [userSelection, setUserSelection] = useState('rockets');

  // const inventoryOptions = ['rockets', 'dragons', 'capsules', 'cores', 'missions', 'roadster', 'ships']

  const userSelectionHandler = (selection) => {
    return setUserSelection(selection)
  }

  // API call
  useEffect( () => {
    axios.get(`https://api.spacexdata.com/v3/${userSelection}`)
      .then((response) => {
        console.log('succesful api request', response.data)
        setData(response.data)
      })
      .catch((error) => {
        console.log('error with the request', error)
        setIsError(true)
      })
  });


  return(
    <div>
    <MainDiv>
     <NavBar
          inventoryOptions={inventoryOptions} 
          userSelectionHandler={userSelectionHandler} 
      />
      <ItemListContainer data={data} isError={isError} />
    </MainDiv>
    </div>
  );
}

export default Main;