import React, { useState } from 'react';
import AppStyle from './AppStyle';
import Homepage from '../Homepage/Homepage';
import Inventory from '../Inventory/Inventory';
// import Button from '../StyledComponents/Button';
import Link from '../StyledComponents/Link'


const App = () => {
  const [showHomePage, setHomePage] = useState(true);

  const toggleHomePage = () => {
    return setHomePage(!showHomePage); 
  }

  if ( showHomePage === true ) {
    return(
      <AppStyle> 
        <Link green href="#" onClick={toggleHomePage} > Explore our inventory </Link>
        {/* <Button onClick={toggleHomePage} green > </Button> */}
        <Homepage /> 
      </AppStyle>
    );  
  } else {
      return(
        <AppStyle> 
          <Link green href="#" onClick={toggleHomePage} > Go to homepage </Link>
          {/* <Button onClick={toggleHomePage} green > Go to homepage </Button> */}
          <Inventory />
        </AppStyle>
      );
    }
}
export default App;