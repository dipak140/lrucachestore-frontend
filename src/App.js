// src/App.js

import React from 'react';
import GetCache from './components/GetCache';
import SetCache from './components/SetCache';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>LRU Cache Store</h1>
      <GetCache />
      <SetCache />
    </div>
  );
}

export default App;
