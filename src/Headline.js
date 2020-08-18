import React, { useState } from 'react';
import './Headline.css';



const Headline = () => {

  const[quote, setQuote] = useState(
    'The first step is to establish that something is possible; then probability will occur.'
  );

  const QUOTES = [
    'The first step is to establish that something is possible; then probability will occur.',
    // 'When something is important enough, you do it even if the odds are not in your favor.',
    "I can either watch it happen or be a part of it.",
    "It's OK to have your eggs in one basket as long as you control what happens to that basket.",
    "If you go back a few hundred years, what we take for granted today would seem like magic."
  ]

  const shuffleQuote = () => {
    for ( let i = (QUOTES.length - 1); i > 0; i-- ) {
      const j = Math.floor(Math.random() * (i - 1))
      const newQuote = QUOTES[i]
      QUOTES[i] = QUOTES[j]
      QUOTES[j] = newQuote
      console.log(newQuote);
      return setQuote( newQuote );;
    }    
  }
  
  return (
    <div> 
      <h1> SpaceX </h1>
      <p> {quote} </p>
      <button 
        className="headline-button" 
        onClick={shuffleQuote} > 
        see another quote
      </button>
    </div>
  )}

export default Headline;