import './App.css';

import React from 'react';
import './App.css';

import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation';
// import HomePage from './pages/HomePage';

import PaintingList from './components/PaintingList';
import Section from './components/Section';

import paintings from './painting.json';





function App() {
 const isOnline = true;

  return (
    <div className="App">
{/* 
      {isOnline && 'Online'}
      <Header>
        <Navigation />
      </Header> */}

      {/* <PaintingList  items={paintings}/> */}
      <Section title="Топ недели" >
        <PaintingList items={paintings} />
      </Section>
       <Section  title="лучшее"/>
      
      {/* <HomePage
        imageUrl={paintings[0].url}
        title={paintings[0].title}
        author={paintings[0].author.tag}
        price={paintings[0].price}
        quantity={paintings[0].quantity}
  
      />

         <HomePage
        imageUrl={paintings[1].url}
        title={paintings[1].title}
        author={paintings[1].author.tag}
        price={paintings[1].price}
         quantity={paintings[1].quantity}
  
      /> */}

    </div>
  );
}

export default App;
