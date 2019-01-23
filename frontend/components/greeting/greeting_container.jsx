import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_action';
import Greeting from './greeting';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);