import React from 'react';
import { Provider } from 'react-redux';
import SplashContainer from './splash/splash_container';
import SessionFormContainer from './session_form/session_form_container';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Tempo</h1>
      </Link>
    </header>

    <Route path='/login' component={SessionFormContainer}/>
    <Route path='/signup' component={SessionFormContainer}/>

    <Route exact path='/' component={SplashContainer}/>
  </div>
);

export default App;
