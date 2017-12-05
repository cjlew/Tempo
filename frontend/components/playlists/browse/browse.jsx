import React from 'react';
import { Link, withRouter, Route, Switch } from 'react-router-dom';
import PlaylistIndexContainer from '../playlists_index_container';
import Modal from 'react-modal';
import NewPlaylist from '../new_playlist';
import FeaturedContainer from './featured_container.js';
import DiscoverContainer from './discover_container.js';
import GenresContainer from './genres_container.js';



const customStyles ={
  overlay : {
      backgroundColor: 'rgba(25,20,20,.7)'
  },
  content : {
    border: 'none',
    height: '100%',
    width: '100%',
      top                   : '0%',
      left                  : '0%',
      right                 : 'auto',
      bottom                : 'auto',
      backgroundColor: 'rgba(25,20,20,.7)'

  }
};


class Browse extends React.Component {
  constructor(props) {
    super(props);

  }





  render() {

    return(
      <div className='browse-container'>
        <Switch>
          <Route path='/browse/featured' component={FeaturedContainer}/>
          <Route path='/browse/genres' component={GenresContainer}/>
          <Route path='/browse/discover' component={DiscoverContainer}/>
        </Switch>
      </div>
    );
  }

}

export default withRouter(Browse);
