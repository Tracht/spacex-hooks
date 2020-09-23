import React from 'react';
import Button from '../../StyledComponents/Button';

const NavBar = ( {inventory, handleSelection} ) => {

  return(
    <ul>
      {inventory.map(option => (
          <Button 
            key={option} 
            value={option} 
            onClick={handleSelection(option)} 
            pink 
          >
            {option}  
          </Button>
        ))
      }
    </ul>
  )
}

export default NavBar