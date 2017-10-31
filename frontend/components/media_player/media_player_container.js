import { connect } from 'react-redux';
import MediaPlayer from './media_player';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch) => ({
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaPlayer));
