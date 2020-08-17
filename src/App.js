import React from 'react';
import Headline from './Headline.js';
import './App.css';

function App() {

  const title = 'SpaceX';
  const quote = 'The first step is to establish that something is possible; then probability will occur.';

  return (
    <div className="App">
      <header className="App-header">
        <Headline 
          title={title} 
          quote={quote}
        />
      </header>
    </div>
  );
}

export default App;
