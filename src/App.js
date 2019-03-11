import React, { Component } from 'react';
import logo from './logo.svg';
import Card from './Card'
import './App.css';
import CardList from './CardList'
import {robots} from './robots'

class App extends Component {
  render() {
    return (
      <div className="fi tc">
       <h1>Hello Ladies</h1> 
      <CardList robots={robots}/>       
      </div>
    );
  }
}

export default App;
