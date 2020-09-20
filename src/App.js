//#region Imports
// Cross Browser Support
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

// React Components
import React from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

// Redux
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux'
import thunk from 'redux-thunk';
import allReducer from './Store/reducers'

import Delay from './components/Delay';

// Styling 
import './index.css';
import {Layouts} from './assets/StyledComponents/App';

// Multi Langauge Support
import "./i18n";

// Logging
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

// Api
import axios from 'axios';

import { config } from './config';

import Footer from './components/Footer';
import Header from './components/Header';

//Pages
const Movie = React.lazy(() => import('./Pages/Movie'));
const Error = React.lazy(() => import('./Pages/Error'));
const LatestMovie = React.lazy(() => import('./Pages/LatestMovie'));
const PopularMovies = React.lazy(() => import('./Pages/PopularMovies'));
const NowPlaying = React.lazy(() => import('./Pages/NowPlayingMovies'));
const Upcoming = React.lazy(() => import('./Pages/UpcomingMovies'));
const TopRated = React.lazy(() => import('./Pages/TopRatedMovies'));

//#endregion

//#region Default Configurations

// Declare the api default parameters
axios.defaults.params = {}
axios.defaults.params['api_key'] = config.TMDB.API_KEY;

Sentry.init({
  dsn: "https://3265ed4ca10f474badbdda2f3b400ea5@o374444.ingest.sentry.io/5434536",
  integrations: [
    new Integrations.BrowserTracing(),
  ],
  tracesSampleRate: 1.0,
});

const sentryReduxEnhancer = Sentry.createReduxEnhancer({
  // Optionally pass options
});

const store = createStore(
  allReducer,
  compose(
      applyMiddleware(thunk),
      sentryReduxEnhancer,
      //without this below fix browsers that do not have the redux devtools extension would have an error 
      typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  )
);

const history = syncHistoryWithStore(createBrowserHistory(), store)

//#endregion

function App() {
  return(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter history={history} basename={process.env.PUBLIC_URL}>
          {/* Rendering the common header componenets of the solution */}
          <Header />
          {Delay()}
          {/* The non static components of the site */}
          <Layouts>
            <Switch>
              <Route
                path="/Movie/:movieid"
                component={Delay(Movie)}
              />
              <Route
                path="/Latest"
                component={Delay(LatestMovie)}
              />
              {/* Current */}
              <Route
                path="/NowPlaying"
                component={Delay(NowPlaying)}
              />
              <Route
                path="/Upcoming"
                component={Delay(Upcoming)}
              />
              <Route
                path="/Popular"
                component={Delay(PopularMovies)}
              />
              {/* Best */}
              <Route
                path="/TopRated"
                component={Delay(TopRated)}
              />
              <Route
                path="/Error"
                component={Delay(Error)}
              />
              <Route
                path="/"
                component={Delay(NowPlaying)}
              />
            </Switch>
          </Layouts>
          {/* Rendering the common footer componenets of the solution */}
          <Footer />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
