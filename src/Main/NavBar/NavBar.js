import React from 'react';
import Button from '../../StyledComponents/Button';
// import styled from 'styled-components';

// const NavDiv = styled.div`
//   background-color: #282c34;
//   /* min-height: 20vh; */
//   display: flex;
//   align-items: left;
//   justify-content: top;
//   color: white;
// `

const NavBar = ( {inventoryOptions, userSelectionHandler} ) => {
    return(
    <ul>
      {inventoryOptions.map(option => (
          <Button 
            key={option} 
            value={option} 
            onClick={userSelectionHandler} 
            pink 
          >
            {option}  
          </Button>
        ))
      }
    </ul>)
}

export default NavBar