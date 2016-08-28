//entry point of app
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // only imports what's in {} from react-redux
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import Promise from 'redux-promise';

import App from './components/app';
import Instructions from './components/instructions';
import NavBar from './components/navBar'
import MusicalsContainer from './components/musicalscontainer';
import MusicalInfoBox from './components/musicalInfoBox';
import IndividualMusical from './components/individualMusical';



import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware(Promise)(createStore); // being executed with reducers, look at line 27

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Instructions} />
        <Route path="musicals" component={MusicalsContainer} /> //name path whatever you want
        <Route path="musicalInfoBox" component={MusicalInfoBox} />
        <Route path="musical" component={IndividualMusical} />



      </Route>
    </Router>
  </Provider>
  , document.querySelector('#container'));
