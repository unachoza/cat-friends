import React, { Component } from 'react';
import './App.css';
import CardList from './CardList'
import SearchBox from './SearchBox'
import {robots} from './robots'



class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      robots: robots,
      query: ''
    }
  }

  onQuery = async(event) => {
  
    await this.setState({ query: event.target.value})
    
  }

  render(){
    const {robots, query} = this.state
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(query.toLowerCase());
    })
    return (
      <div className="tc">
        <h1>Hello Ladies</h1>
        <SearchBox onQuery ={this.onQuery}/>
        <CardList robots={filteredRobots}/>
      </div>
    )
   }
}



export default App;
