import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Animal } from './components/Animal';
import { PageNotFound } from './components/PageNotFound';
import { Animals } from './components/Animals';

function App() {
  return (
    <div className="App">
    <Animal></Animal>
    <Animals></Animals>
    <PageNotFound></PageNotFound>
    </div>
  );
}

export default App;
