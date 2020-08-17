import React from 'react';

function Headline({title, quote}) {
  return (
    <div> 
      <h1> {title} </h1>
      <p> {quote} </p>
    </div>
  )}

export default Headline;