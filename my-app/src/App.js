import './App.css';

import React from 'react';
import './App.css';

import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Header>
        <Navigation />
      </Header>
    <div>Hello</div>
      <div>world</div>
    </div>
  );
}

export default App;
