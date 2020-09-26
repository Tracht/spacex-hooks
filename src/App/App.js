import React, { useState } from 'react';
import AppStyle from './AppStyle';
import Homepage from './Components/Homepage/Homepage';
import HomepageStyle from './Components/Homepage/HomepageStyle';
import InventoryStyle from './Components/Inventory/InventoryStyle';
import Inventory from './Components/Inventory/Inventory';
import Link from './StyledComponents/Link'


const App = () => {
  const [showHomePage, setHomePage] = useState(true);

  const toggleHomePage = () => {
    return setHomePage(!showHomePage); 
  }

  if ( showHomePage === true ) {
    return(
      <AppStyle> 
        <HomepageStyle>
          <Link green href="#" onClick={toggleHomePage} >Explore our inventory</Link> 
          <Homepage />  
        </HomepageStyle>
      </AppStyle>
    );  
  } else {
      return(
        <AppStyle> 
          <InventoryStyle>
            <Link green href="#" onClick={toggleHomePage} >Go to homepage</Link>
            <Inventory />
          </InventoryStyle>
        </AppStyle>
      );
    }
}
export default App;