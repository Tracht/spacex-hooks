import React, { useState, useEffect } from 'react';
import axios from 'axios';
import sortArray from '../utils';
import InventoryDiv from './InventoryDiv';
import ItemsAll from './Items/ItemsAll';
import ItemModalData from './Items/ItemModalData';
import Button from '../StyledComponents/Button';
import Link from '../StyledComponents/Link';

const inventory = ['capsules', 'cores', 'dragons', 'missions', 'ships'];
const itemsToDisplay = 8;

const Main = () => {
  const [userSelection, setUserSelection] = useState('capsules');
  const [isError, setIsError] = useState(false);
  const [allData, setAllData] = useState(null);
  const [showData, setShowData] = useState(null);
  const [inventoryCount, setInventoryCount] = useState(null);
  const [pages, setPages] = useState([1,2,3]);
  const [showModal, setShowModal] = useState(false);

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
    "showData:", showData,
    )
  );

  const pageClick = (pageNumber) => {
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
    <InventoryDiv large>
      {/* Filters inventory */}
      <ul>  
        {inventory.map(selection => (
          <Button key={selection} value={selection} onClick={() => setUserSelection(selection)} green >
            {selection}  
          </Button>
          ))}
      </ul>
    
      {/* Pagination */}
      <h3> {userSelection} </h3>
      <ul>  
        {pages.length === 1 ? 'page ' : 'pages ' }
        {pages.map(pageNumber => (
          <Link key={pageNumber} onClick={() => pageClick(pageNumber + 1)} >
             <span> {` `} {pageNumber + 1} { ` `} </span>
          </Link>
          ))} 
      </ul>
    
      {/* Displays inventory & Modal */}
      <ItemsAll data={showData}> </ItemsAll>
      <ItemModalData />
    </InventoryDiv>
  );
}
export default Main;