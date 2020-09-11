import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <section className="Results">
        <Card />
      </section>
    </div>
  );
}

export default App;
