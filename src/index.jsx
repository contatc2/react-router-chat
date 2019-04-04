// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  createStore, combineReducers, applyMiddleware, compose
} from 'redux';
import { BrowserRouter as Router, Route, Redirect, Switch }
from 'react-router-dom';
import { createBrowserHistory as history } from 'history';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';


// internal modules
import * as serviceWorker from './serviceWorker';
import App from './components/app';
import './stylesheets/application.scss';

import MessagesReducer from './reducers/messages_reducer';

const identityReducer = (state = null) => state;


// State and reducers
const reducers = combineReducers({
  messages: MessagesReducer,
  channels: identityReducer,
  currentUser: identityReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger, reduxPromise));

const initialState = {
  messages: [],
  channels: ['general', 'london', 'react'],
  currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`
};

initialState.messages = [
  {
    "author":"anonymous92",
    "content":"Hello world!",
    "created_at":"2017-09-26T23:03:16.365Z"
  },
  {
    "author":"anonymous77",
    "content":"My name is anonymous77",
    "created_at":"2017-09-26T23:03:21.194Z"
  }
]

ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/:channel" component={App} />
        <Redirect from="/" to="/general" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
