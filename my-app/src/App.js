import React from 'react';
import logo from './logo.svg';
import { Inventory } from './features/Inventory/Inventory';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Inventory />
      </header>
    </div>
  );
}

export default App;
