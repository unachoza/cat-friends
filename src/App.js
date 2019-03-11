import React, { Component } from 'react';
import logo from './logo.svg';
import Card from './Card'
import './App.css';
import {robots} from './robots'

class App extends Component {
  render() {
    return (
      <div className="fi tc">
       <h1>Hello Ladies</h1> 
       <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
       <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
       <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
       
      </div>
    );
  }
}

export default App;
