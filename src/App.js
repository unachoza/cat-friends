import React, { Component } from 'react';
import './App.css';
import CardList from './CardList'
import SearchBox from './SearchBox'
import {robots} from './robots'



class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      robots: [],
      query: ''
    }
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>  response.json())
    .then(users => this.setState({robots: robots}))
    console.log('mounting')
  }

  onQuery = async(event) => {
    await this.setState({ query: event.target.value})
  }

  render(){
    const {robots, query} = this.state
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(query.toLowerCase());
    })
    if(robots.length === 0) {
      return <h3>Loading ...</h3>
    } else {
      return (
        <div className="tc">
          <h3>Hello Ladies</h3>
          <SearchBox onQuery ={this.onQuery}/>
          <CardList robots={filteredRobots}/>
        </div>
      )
    }
    
   }
}



export default App;
