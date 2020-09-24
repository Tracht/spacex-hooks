import React, { useState, useEffect } from 'react';
import axios from 'axios';
import sortArray from '../utils';
import styled from 'styled-components';
import ItemListContainer from './Items/ItemListContainer';
import Button from '../StyledComponents/Button';
// import NavBar from './NavBar/NavBar';

const inventory = ['capsules', 'cores', 'dragons', 'missions', 'ships'];
const itemsToDisplay = 8;

const Main = () => {
  const [userSelection, setUserSelection] = useState('capsules');
  const [isError, setIsError] = useState(false);
  const [allData, setAllData] = useState(null);
  const [showData, setShowData] = useState(null);
  const [inventoryCount, setInventoryCount] = useState(null);
  const [pages, setPages] = useState([1,2,3]);

  // Sets 'setAllData', 'setInventoryCount', 'setPages', 'setIsError'
  useEffect(() => {
    axios.get(`https://api.spacexdata.com/v3/${userSelection}?order=asc`)
    .then((response) => {
        console.log('succesful api request', response.data)
        setAllData(sortArray(response.data))
        setInventoryCount(response.data.length)
        setPages([...Array(Math.ceil(inventoryCount / itemsToDisplay)).keys()])
        setShowData(sortArray(response.data.slice(0,itemsToDisplay)))
    })
    .catch((error) => {
      console.log('error with the request', error)
      setIsError(true)
  });
  }, 
  [userSelection, inventoryCount],
  console.log(
    "userSelection:", userSelection, 
    "inventoryCount:", inventoryCount, 
    "pages:", pages,
    // "allData:", allData, 
    "showData:", showData,
    )
  );

  // determines what inventory shown to the user, depending on pagination
  const updateInventoryDisplay = (pageNumber) => {
    if (pageNumber === 1) {
      var startSlice = 0; 
      var endSlice = itemsToDisplay; 
    } else {
      startSlice = itemsToDisplay * (pageNumber - 1); 
      endSlice = (itemsToDisplay * pageNumber); 
    }
    return setShowData(allData.slice(startSlice, endSlice));
  } 

  return(
    <div>

    {/* Filter inventory using a list of buttons  */}
    <MainDiv>
      <ul>  
        {inventory.map(selection => (
          <Button key={selection} value={selection} onClick={() => setUserSelection(selection)} green >
            {selection}  
          </Button>
          ))}
      </ul>
    </MainDiv> 

    {/* Buttons for paginating across inventory  */}
    <MainDiv>
      <ul>  
        { pages.length === 1 ? 'page ' : 'pages' }
        {pages.map(pageNumber => (
          <Button key={pageNumber} value={pageNumber} onClick={() => updateInventoryDisplay(pageNumber + 1)} small >
            {pageNumber + 1}  
          </Button>
          ))} 
      </ul>
    </MainDiv> 

     <h1> {userSelection} </h1>   

    {/* Displays the inventory, based on filter selection  */}
    <MainDiv large>
      <ItemListContainer data={showData} isError={isError} />
    </MainDiv>

     {/* Modal  */}
      

    </div>
  );
}
export default Main;

// styled component 
const MainDiv = styled.div`
  background-color: #282c34;
  min-height: ${props => props.large ? "100vh" : "10vh"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`