import React, { Component } from 'react';
import { connect } from 'react-redux'
import {setSearchField} from 'redux/actions/actions'
import 'containers/App.css';
import CardList from 'components/CardList';
import SearchBox from 'components/SearchBox';
import Scroll from 'components/Scroll';
import { cats } from 'CatData.js';

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   cats: [],
    //   // query: '',
    // };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ cats: cats }));
  }

  // onQuery = async event => {
  //   await this.setState({ query: event.target.value });
  // };

  render() {
    // const { cats, query } = this.state;
    const {onQueryChange, query} = this.props
    const filteredcats = cats.filter(cat => {
      return cat.name.toLowerCase().includes(query.toLowerCase());
    });
    return !cats.length ? (
      <h3>Loading ...</h3>
    ) : (
      <div className="container">
        <div className="tc">
          <h3>Search for a Cat!</h3>
          <SearchBox onQuery={onQueryChange} />
          <Scroll>
            <CardList cats={filteredcats} />
          </Scroll>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
query: state.searchCatsReducer.query
})
const mapDispatchtoProps = dispatch => ({
  onQueryChange: (event) => dispatch(setSearchField(event.target.value)),
});
export default connect(mapStateToProps, mapDispatchtoProps)(App);
