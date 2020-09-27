import React from 'react';
import Button from '../../StyledComponents/Button';


const InventoryFilter = (props) => {

  const { INVENTORY, setInventoryCategory } = props

  return(
    <div>
        {INVENTORY.map(filter => (
          <Button green key={filter} value={filter} onClick={() => setInventoryCategory(filter)} >
            {filter}
          </Button>
        ))}
    </div>  
  );
  
}
export default InventoryFilter;