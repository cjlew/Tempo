import { connect } from 'react-redux';
import MainContent from './main_content';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state) => {
  return {
    state
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
return {
  
};
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
) (MainContent));
