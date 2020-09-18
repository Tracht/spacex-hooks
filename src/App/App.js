import React, { useState } from 'react';
import styled from 'styled-components';
import Headline from '../Headline/Headline';
import Main from '../Main/Main';
import Button from '../StyledComponents/Button';

// styled component
const AppStyle = styled.div`
  text-align: center;
  font-family: Helvetica, sans-serif;
`
// component
const App = () => {

  const [showHomepage, setHomePage] = useState(true);

  const toggleHomePage = () => {
    return setHomePage(false);
  }

  if ( showHomepage === true ) {
    return(
      <AppStyle> 
        <Headline />
        <Button onClick={toggleHomePage} > Explore our inventory</Button>
      </AppStyle>
    ); 
  } else {
      return(
        <AppStyle> 
          <Main />
          <Button onClick={toggleHomePage} > Go to homepage </Button>
        </AppStyle>
      );
    }

  // return(
  //   <AppStyle> 
  //     <Headline />
  //     <Main />
  //   </AppStyle>
  // );
}

export default App;
