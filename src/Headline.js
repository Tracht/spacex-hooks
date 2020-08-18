import React, { useState } from 'react';
import './Headline.css';

const Headline = () => {

  const[quote, setQuote] = useState(
    "You can either watch it happen or be a part of it."
  );

  const QUOTES = ([
    'You can either watch it happen or be a part of it.',
    'The first step is establishling that something is possible; then probability will occur.',
    'When something is important you do it even if the odds are not in your favor.',
    "It's OK to have your eggs in one basket as long as you control what happens to the basket.",
    'If you go back a few hundred years, what we take for granted today would seem like magic.',
  ])

  const nextQuote = (function () {
    let counter = 0;
    return function () {
      if ( counter > QUOTES.length ) {
        return ( 
          counter = 0,
          setQuote(QUOTES[counter]),
          console.log("Counter is greater than Quotes.length", counter), 
          counter
        )
      } else {
          return ( 
            counter +=1,
            console.log("Counter is less than Quotes.length", counter),
            setQuote(QUOTES[counter]),
            counter
          )
       };
    }
  })();
  
  return (
    <div> 
      <h1> SpaceX </h1>
      <p> {quote} </p>
      <button 
        className="headline-button" 
        onClick={nextQuote} > 
        next quote
      </button>
    </div>
  )

}

export default Headline;