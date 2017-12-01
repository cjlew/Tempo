import { connect } from 'react-redux';
import Sidebar from './sidebar';
import {  clearPlaylists } from '../../actions/playlist_actions';
import { clearSearch } from '../../actions/search_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
return {
  clearSearch: () => dispatch(clearSearch()),
  clearPlaylists: () => dispatch(clearPlaylists())

};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (Sidebar);
