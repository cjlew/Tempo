import React from 'react';
import { Provider } from 'react-redux';
import SplashContainer from './splash/splash_container';
import SessionFormContainer from './session_form/session_form_container';
import MainContainer from './main/main_container';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute } from '../util/route_util';


const App = (props) => {

  return (

  <div id='app'>
    <AuthRoute path='/login' component={SessionFormContainer}/>
    <AuthRoute path='/signup' component={SessionFormContainer}/>

    <Route exact path='/'
            component={props.store.getState().session.currentUser
                        ? MainContainer : SplashContainer}/>
  </div>
);
};

export default App;
