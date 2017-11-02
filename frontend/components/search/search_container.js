import { connect } from 'react-redux';
import Search from './search';
import {withRouter} from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';
import { fetchPlaylists } from '../../actions/playlist_actions';
import { fetchSongs } from '../../actions/song_actions';
import { search } from '../../actions/search_actions';

const mapStateToProps = (state, ownProps) => {
  const songResults=[];

};

const mapDispatchToProps = (dispatch) => ({
  search: (query) => dispatch(search(query)),
  fetchUsers: () => dispatch(fetchUser()),
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  fetchSongs: () => dispatch(fetchSongs()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Search));
