import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ItemListContainer from './Items/ItemListContainer';
import Button from '../StyledComponents/Button';
// import NavBar from './NavBar/NavBar';

const inventory = ['rockets', 'dragons', 'capsules', 'cores', 'missions', 'ships'];

const Main = () => {
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
  const [userSelection, setUserSelection] = useState('rockets');

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
  }, [userSelection]);

  return(
    <div>
    <MainDiv>
     {/* <NavBar
        inventory={inventory} 
        handleSelection={handleSelection} 
      /> */}

      <ul>  
        {inventory.map(option => (
            <Button 
              key={option} 
              value={option} 
              onClick={ () => setUserSelection(option)} 
              green 
            >
              {option}  
            </Button>
          ))
        }
      </ul>

      <ItemListContainer data={data} isError={isError} />
    </MainDiv>
    </div>
  );
}
export default Main;

// styled component 
const MainDiv = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`