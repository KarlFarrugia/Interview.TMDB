// Cross Browser Support
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

// React Components
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { StaticRouter, BrowserRouter, Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from "history";
import allReducer from './Store/reducers'
import thunk from 'redux-thunk';
import axios from 'axios';
import { config } from './config';

// Multi Langauge Support
import "./i18n";

//Pages
import App from './App';
import Movie from './Pages/Movie';
import LatestMovie from './Pages/LatestMovie';
import NowPlaying from './Pages/NowPlayingMovies';
import Navbar from './components/Navbar/Navbar';
import SecondaryNavbar from './components/Navbar/SecondaryNavbar';

axios.defaults.params = {}
axios.defaults.params['api_key'] = config.TMDB.API_KEY;

const hist = createBrowserHistory();
const store = createStore(
  allReducer,
  compose(
      applyMiddleware(thunk),        
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter history={hist}>
        <header className="App-header">
          <Navbar />
          <SecondaryNavbar />
        </header>
        <Switch>
          <Route
            path="/Movie/:movieid"
            component={Movie}
          />
          <Route
            path="/Latest"
            component={LatestMovie}
          />
          <Route
            path="/NowPlaying"
            component={NowPlaying}
          />
          <Route
            path="/"
            component={NowPlaying}
          />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
