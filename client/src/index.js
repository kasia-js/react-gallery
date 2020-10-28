import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import MovieInfo from './Components/MovieInfo';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App>
  
  {/* <Switch>
    <Route path={'http://localhost:3000/'+'/[a-zA-Z0-9]/'} component = {MovieInfo}/>
  </Switch> */}
  </App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
