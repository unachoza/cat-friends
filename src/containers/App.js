import React, { Component } from 'react';
import 'containers/App.css';
import CardList from 'components/CardList';
import SearchBox from 'components/SearchBox';
import Scroll from 'components/Scroll';
import { cats } from 'CatData.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
      query: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(cats => this.setState({ cats: cats }));
  }

  onQuery = async event => {
    await this.setState({ query: event.target.value });
  };

  render() {
    const { cats, query } = this.state;
    const filteredcats = cats.filter(robot => {
      return robot.name.toLowerCase().includes(query.toLowerCase());
    });
    return !cats.length ? (
      <h3>Loading ...</h3>
    ) : (
      <div className="container">
        <div className="tc">
          <h3>Hello Ladies</h3>
          <SearchBox onQuery={this.onQuery} />
          <Scroll>
            <CardList cats={filteredcats} />
          </Scroll>
        </div>
      </div>
    );
  }
}

export default App;
