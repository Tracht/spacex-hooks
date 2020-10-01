import React, { useState } from 'react';
import AppStyle from './AppStyle';
import Homepage from './Components/Homepage/Homepage';
import { HomepageDiv } from './Components/Homepage/HomepageStyle';
import InventoryStyle from './Components/Inventory/InventoryStyle';
import Inventory from './Components/Inventory/Inventory';
import { Link } from './StyledComponents/Link'


const App = () => {
  const [showHomePage, setHomePage] = useState(true);

  const toggleHomePage = () => {
    return setHomePage(!showHomePage); 
  }

  if ( showHomePage === true ) {
    return(
      <AppStyle> 
        <HomepageDiv>
          <Link green href="#" onClick={toggleHomePage} data-cy='see-inventory-link'> Explore our inventory </Link> 
          <Homepage />  
        </HomepageDiv>
      </AppStyle>
    );  
  } else {
      return(
        <AppStyle> 
          <InventoryStyle>
            <Link green href="#" onClick={toggleHomePage} data-cy='see-homepage-link'> Go to homepage </Link>
          </InventoryStyle>
          <Inventory />
        </AppStyle>
      );
    }
}
export default App;