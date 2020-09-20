//#region Imports

// Cross Browser Support
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

// React Components
import React from 'react';
import ReactDOM from 'react-dom';

// Styling 
import './index.css';

// App
import App from './App';

// Configurations
import * as serviceWorker from './serviceWorker';

//#endregion

// Render the entire solution using the App component
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
