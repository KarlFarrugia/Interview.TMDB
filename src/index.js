// Cross Browser Support
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

// React Components
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
import Movie from './Pages/Movie';
import LatestMovie from './Pages/LatestMovie';
import NowPlaying from './Pages/NowPlayingMovies';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import SecondaryNavbar from './components/Navbar/SecondaryNavbar';
import {Layouts} from './assets/StyledComponents/App';
import { NavigationLine } from './assets/StyledComponents/Navigation';

import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn: "https://3265ed4ca10f474badbdda2f3b400ea5@o374444.ingest.sentry.io/5434536",
  integrations: [
    new Integrations.BrowserTracing(),
  ],
  tracesSampleRate: 1.0,
});

axios.defaults.params = {}
axios.defaults.params['api_key'] = config.TMDB.API_KEY;

const hist = createBrowserHistory();
const sentryReduxEnhancer = Sentry.createReduxEnhancer({
  // Optionally pass options
});
const store = createStore(
  allReducer,
  compose(
      applyMiddleware(thunk),
      sentryReduxEnhancer,    
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
          <br />
          <NavigationLine />
        </header>
        <Layouts>
          <Switch>
            <Route
              path="/Interview.TMDB/Movie/:movieid"
              component={Movie}
            />
            <Route
              path="/Interview.TMDB/Latest"
              component={LatestMovie}
            />
            <Route
              path="/Interview.TMDB/NowPlaying"
              component={NowPlaying}
            />
            <Route
              path="/"
              component={NowPlaying}
            />
          </Switch>
        </Layouts>
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
