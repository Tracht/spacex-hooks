import React, { useState, useEffect } from 'react';
import './Headline.css';

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
    counter >= 3 ? counter = 0 && setQuote(QUOTES[counter]) : setQuote(QUOTES[counter]);
  });

  function nextQuote() {
    counter += 1;
    setQuote(QUOTES[counter]);
  };
  
  return (
    <div> 
      <h1> SpaceX </h1>
      <p> {quote} </p>
      <button className="headline-button" 
        onClick={nextQuote} 
      > 
        next
      </button>
    </div>
  )

}

export default Headline;