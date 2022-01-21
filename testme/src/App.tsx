import React from 'react';
import logo from './logo.svg';
import './App.css';

class Dog {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, World!</h1>
      </header>
    </div>
  );
}




export default App;
