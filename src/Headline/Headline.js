import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Button from '../StyledComponents/Button';
import Image from '../StyledComponents/Image';
import QUOTES from './Quotes';

// component style 
const HeadlineStyle = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

// variables
let counter = 0;

// component  
const Headline = () => {

  const [quote, setQuote] = useState(QUOTES[0]);

  useEffect(() => {}, []); // runs on first mount -> because of empty array

  useEffect(() => {       // runs on mount & update
      if (counter >= 3) { setQuote(QUOTES[counter]) } 
      else {
        counter = 0;
        setQuote(QUOTES[counter]) 
      }
  }, []);

  function nextQuote() {
    counter += 1; setQuote(QUOTES[counter]);
  };
    
  return (
      <HeadlineStyle>
        <Image src="spacex-logo.png" alt="SpaceX logo" ></Image>
          <p> {quote} </p>
        <Button onClick={nextQuote} > next </Button>
      </HeadlineStyle>
  )

}

export default Headline;