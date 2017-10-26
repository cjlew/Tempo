import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { deletePlaylist, createPlaylist,
      fetchPlaylist, fetchPlaylists,
      editPlaylist} from './actions/playlist_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // Test only
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.deletePlaylist = deletePlaylist;
    window.createPlaylist = createPlaylist;
    window.fetchPlaylist = fetchPlaylist;
    window.fetchPlaylists = fetchPlaylists;
    window.editPlaylist = editPlaylist;

  //


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
