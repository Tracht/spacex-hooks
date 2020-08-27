import React from 'react';
import Headline from './Headline.js';
import Main from './Main.js';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Headline />
      </header>
      <body className="App-body">
        <Main />
      </body>
      
    </div>
  );
}

export default App;
