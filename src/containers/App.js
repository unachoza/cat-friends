import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestCats } from 'redux/actions/actions';
import 'containers/App.css';
import CardList from 'components/CardList';
import SearchBox from 'components/SearchBox';
import Scroll from 'components/Scroll';
import { cats } from 'CatData.js';

class App extends Component {
  componentDidMount() {
    this.props.onRequestCats();
  }
  render() {
    const { onQueryChange, query, cats, pending, error } = this.props;
    const filteredcats = cats.filter(cat => {
      return cat.name.toLowerCase().includes(query.toLowerCase());
    });
    return pending ? (
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
  query: state.searchCats.query,
  cats: state.requestCats.cats,
  pending: state.requestCats.isPending,
  error: state.requestCats.error,
});
const mapDispatchtoProps = dispatch => ({
  onQueryChange: event => dispatch(setSearchField(event.target.value)),
  onRequestCats: () => dispatch(requestCats()),
});
export default connect(mapStateToProps, mapDispatchtoProps)(App);
