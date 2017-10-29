import React from 'react';
import { Provider } from 'react-redux';
import SessionFormContainer from './session_form/session_form_container';
import HomeContainer from './home/home_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute } from '../util/route_util';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div id='app'>
        <Switch>
          <AuthRoute path='/login' component={SessionFormContainer}/>
          <AuthRoute path='/signup' component={SessionFormContainer}/>
          <Route path='/' component={HomeContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
