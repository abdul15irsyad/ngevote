import React from 'react';
import { Routes } from '../config';
import ContextProvider from '../context';
import './App.css';
import './style.css'

function App() {
  document.title = 'Ngevote'
  return (
    <ContextProvider>
      <Routes/>
    </ContextProvider>
  );
}

export default App;
