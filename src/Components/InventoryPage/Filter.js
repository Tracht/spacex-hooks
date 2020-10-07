import React from 'react';
import Button from '../StyledComponents/Button';

const Filter = (props) => {

  const { INVENTORY, setInventoryCategory } = props

  return(
    <>
        {INVENTORY.map(filter => (
          <Button green key={filter} value={filter} onClick={() => setInventoryCategory(filter)} data-cy='inventory-filter-button'>
            {filter}
          </Button>
        ))}
    </>  
  );
  
}
export default Filter;