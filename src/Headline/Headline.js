import React, { useState, useEffect } from 'react';
import Button from './StyledComponents/Button';
import Image from './StyledComponents/Image';

const QUOTES = ([
  'You can either watch it happen or be a part of it.',
  'If something is important do it even if the odds are not in your favor.',
  'If you go back a few hundred years, what we take for granted today would seem like magic.',
  "It's OK to have your eggs in one basket as long as you control what happens to the basket.",
  ]);
  
let counter = 0;

const Headline = () => {
  const [quote, setQuote] = useState(QUOTES[0]);

  useEffect(() => {}, []); // runs on first mount -> because of empty array
  useEffect(() => {       // runs on mount & update
    if (counter >= 3) { setQuote(QUOTES[counter]) } else {
      counter = 0;
      setQuote(QUOTES[counter]) 
    }
  }, []);

  function nextQuote() {
    counter += 1;
    setQuote(QUOTES[counter]);
  };
  
  return (
    <div> 
      <Image src="spacex-logo.png" alt="SpaceX logo" ></Image>
      <p> {quote} </p>
      <Button onClick={nextQuote}> next </Button>
    </div>
  )

}

export default Headline;