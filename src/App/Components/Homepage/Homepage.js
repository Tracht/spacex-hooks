import React, { useState, useEffect } from 'react';
import Button from '../../StyledComponents/Button';
import { Image } from '../../StyledComponents/Image';
import QUOTES from './Quotes';

let counter = 0;

const Homepage = () => {
  const [quote, setQuote] = useState(QUOTES[0]);

  useEffect(() => {       // runs on mount & update
      if (counter <= QUOTES.length - 1 ) { setQuote(QUOTES[counter]) } 
      else {
        counter = 0;
        setQuote(QUOTES[counter]) 
      }
  }, [quote]);

  const nextQuote = () => {
    counter += 1; setQuote(QUOTES[counter]);
  };
    
  return (
    <div>
        <Image src="spacex-logo.png" alt="SpaceX logo" ></Image>
          <p> {quote} </p>
        <Button onClick={nextQuote} > get Elon's wisdom </Button>
    </div>
  )
}

export default Homepage;