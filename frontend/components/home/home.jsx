import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import MainContainer from '../main/main_container';
import SplashContainer from '../splash/splash_container';

const Home = ({ currentUser }) => {
    const HomeRender = currentUser ? MainContainer  : SplashContainer;
    return (<HomeRender />);
};

export default withRouter(Home);
