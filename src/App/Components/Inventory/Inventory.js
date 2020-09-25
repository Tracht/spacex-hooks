import React, { useState, useEffect } from 'react';
import axios from 'axios';
import sortArray from '../../../utils';
import DisplayInventory from './InventoryItems/DisplayInventory';
import ItemModalData from './InventoryItems/ItemModalData';
import Button from '../../StyledComponents/Button';
import Link from '../../StyledComponents/Link';

const INVENTORY = ['capsules', 'cores', 'dragons', 'missions', 'ships'];
const ITEMS_TO_DISPLAY = 8;

const Main = () => {
  const [inventoryCategory, setInventoryCategory] = useState('missions');
  const [isError, setIsError] = useState(false);
  const [allInventory, setAllInventory] = useState(null);
  const [someInventory, setSomeInventory] = useState(null);
  const [inventoryCount, setInventoryCount] = useState(null);
  const [pages, setPages] = useState([1,2,3]);
  const [activeSelection, setActiveSelection] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get(`https://api.spacexdata.com/v3/${inventoryCategory}`)
      .then((response) => {
          // console.log('succesful api request', response.data)
          setAllInventory(sortArray(response.data))
          setInventoryCount(response.data.length)
          setPages([...Array(Math.ceil(inventoryCount / ITEMS_TO_DISPLAY)).keys()]) 
          setSomeInventory(sortArray(response.data.slice(0, ITEMS_TO_DISPLAY))) // only displays 8 items
      })
      .catch((error) => {
        // console.log('error with the request', error)
        setIsError(true)
      });
    }, [inventoryCategory, inventoryCount]
  );

  const pageClick = (pageNumber) => {
    if (pageNumber === 1) {
      var startSlice = 0; 
      var endSlice = ITEMS_TO_DISPLAY; 
    } else {
      startSlice = ITEMS_TO_DISPLAY * (pageNumber - 1); 
      endSlice = (ITEMS_TO_DISPLAY * pageNumber); 
    }
    return setSomeInventory(allInventory.slice(startSlice, endSlice));
  } 

  const handleActiveSelection = (item, boolean) => {
    setActiveSelection(item, console.log(item));
    setShowModal(boolean, console.log(boolean));
  }

  const keepOpenActiveSelection = (boolean) => {
    setShowModal(boolean, console.log(boolean));
  }

  return(
    <div>

      {/* Filters inventory */}
      <ul> 
        {INVENTORY.map(filter => (
          <Button key={filter} value={filter} onClick={() => setInventoryCategory(filter)} green >
            {filter}
          </Button>
        ))}
      </ul>
    
      {/* Pagination */}
      <ul> 
        <h2> {inventoryCategory} </h2>
        {pages.map(pageNumber => (
            <Link key={pageNumber} onClick={() => pageClick(pageNumber + 1)} >
             { pageNumber + 1 + ' '}
            </Link>
        ))} 
      </ul>
    
      {/* Displays Inventory */}
      <DisplayInventory 
        data={someInventory} 
        isError={isError} 
        handleActiveSelection={handleActiveSelection} > 
      </DisplayInventory>
      
      {/* Displays Modal */}
      {showModal && 
        <ItemModalData 
          inventoryCategory={inventoryCategory}
          data={activeSelection}
          keepOpenActiveSelection={keepOpenActiveSelection} >
        </ItemModalData> 
      }
      
    </div>
  );
  
}
export default Main;