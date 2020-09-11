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

//Pages
import App from './App';
import Movie from './Pages/Movie';
import LatestMovie from './Pages/LatestMovie';
import NowPlaying from './Pages/NowPlayingMovies';

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
          <Switch>
            <Route
              path="/Movie/:moviename"
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
              component={App}
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
