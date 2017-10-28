import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import MainContainer from '../main/main_container';
import SplashContainer from '../splash/splash_container';

class Home extends React.Component  {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPlaylists();
  }

  render () {
    const HomeRender = this.props.currentUser ? MainContainer  : SplashContainer;
    return (<HomeRender />);

  }
}

export default withRouter(Home);
