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

// Styling 
import './index.css';
import {Layouts} from './assets/StyledComponents/App';

// Multi Langauge Support
import "./i18n";

//Pages
import Movie from './Pages/Movie';
import Error from './Pages/Error';
import LatestMovie from './Pages/LatestMovie';
import PopularMovies from './Pages/PopularMovies';
import NowPlaying from './Pages/NowPlayingMovies';
import Upcoming from './Pages/UpcomingMovies';
import TopRated from './Pages/TopRatedMovies';
import Footer from './components/Footer';
import Header from './components/Header';

// Logging
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

// Api
import axios from 'axios';

import { config } from './config';

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
          {/* The non static components of the site */}
          <Layouts>
            <Switch>
              <Route
                path="/Movie/:movieid"
                component={Movie}
              />
              <Route
                path="/Latest"
                component={LatestMovie}
              />
              {/* Current */}
              <Route
                path="/NowPlaying"
                component={NowPlaying}
              />
              <Route
                path="/Upcoming"
                component={Upcoming}
              />
              <Route
                path="/Popular"
                component={PopularMovies}
              />
              {/* Best */}
              <Route
                path="/TopRated"
                component={TopRated}
              />
              <Route
                path="/Error"
                component={Error}
              />
              <Route
                path="/"
                component={NowPlaying}
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
