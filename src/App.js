import React from 'react';
import logo from './logo.svg';
import {connect} from "react-redux";
import Navbar from './components/Navbar/Navbar';
import SearchBox from './components/Search/SearchBox';
import Card from './components/Card/Card';
import {MOVIE_SEARCH} from './Store/actions/Action'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <section className="Results">
        <Card />
      </section>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    query: state.query
  }
};

const mapDispatchToProps = dispatch => {
  return {
    handleQueryUpdate: (query) => {
      dispatch(MOVIE_SEARCH(query));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
