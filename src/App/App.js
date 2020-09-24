import React, { useState } from 'react';
import styled from 'styled-components';
import Headline from '../Headline/Headline';
import Main from '../Main/Main';
import Button from '../StyledComponents/Button';


// component
const App = () => {

  const [showHomePage, setHomePage] = useState(true);

  const toggleHomePage = () => {
    return setHomePage(!showHomePage); 
  }

    if ( showHomePage === true ) {
      return(
        <AppStyle> 
          <Button onClick={toggleHomePage} green > Explore our inventory</Button>
          <Headline /> 
        </AppStyle>
      );  
    } else {
        return(
          <AppStyle> 
            <Button onClick={toggleHomePage} green > Go to homepage </Button>
            <Main />
          </AppStyle>
        );
      }
}

export default App;

// styled component
const AppStyle = styled.div`
  text-align: center;
  font-family: 'PT Sans Narrow', sans-serif;
  /* background-color: #282c34; */
`