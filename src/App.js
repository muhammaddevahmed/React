import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [greeting, setGreeting] = useState('');

  return (
    <div className="app-container">
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Enter your name"
        className="input-field"
      />
      <button
        className="greet-button"
        onClick={() => setGreeting(`Hello, ${inputValue}`)}
      >
        Click Here
      </button>
      {greeting && <h1 className="greeting">{greeting}</h1>}
    </div>
  );
}

export default App;




