import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Desktop } from './components/Desktop';



function App() {
  const navbarName = { name: "world?"} ;
  return (
    <>
      <Navbar text={ navbarName } />
      <Desktop/>
    </>
  );
}

export default App;
