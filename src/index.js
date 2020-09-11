// Cross Browser Support
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

// React Components
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import './index.css';
import Store from './Store'
import App from './App';
import Movie from './Pages/Movie';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from "history";

const hist = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter history={hist}>
          <Switch>
            <Route
              path="/Movie/:moviename"
              component={Movie}
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
