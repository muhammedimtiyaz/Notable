import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';
import SignUpFormContainer from './session/signup_container';
import LogInFormContainer from './session/login_form_container';
import Loading from "./loading_spinner/loading_spinner";


const msp = ({ui}) => ({
  modal: ui.modal
});

const mdp = dispatch => ({
  closeModal: () => dispatch(closeModal()),
});

function Modal ({modal, closeModal}) {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case 'login':
      component = <LogInFormContainer />;
      break;
    case 'signup':
      component = <SignUpFormContainer />;
      break;
    case "loading":
      component = <Loading />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={evt => evt.stopPropagation()}>
      {component}
      </div>
    </div>
  );
}

export default connect(msp, mdp)(Modal);