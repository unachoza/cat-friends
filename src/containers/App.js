import React, { Component } from 'react';
import './App.css';
import CardList from "../components/CardList"
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import {robots} from '../robots'



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
  }

  onQuery = async(event) => {
    await this.setState({ query: event.target.value})
  }

  render(){
    const {robots, query} = this.state
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(query.toLowerCase());
    })
    return !robots.length ?
       <h3>Loading ...</h3> :
       (
        <div className="tc">
          <h3>Hello Ladies</h3>
          <SearchBox onQuery ={this.onQuery}/>
          <Scroll>
            <CardList robots={filteredRobots}/>
          </Scroll>
        </div>
      )
    }
    
   }




export default App;
