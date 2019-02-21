import React from 'react';
import { connect } from 'react-redux';
import { login, receiveErrors } from '../../actions/session_action';
import { openModal, closeModal } from "../../actions/modal_actions";
import LoginForm from './login_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => dispatch(login(user)),
    removeErrors: () => dispatch(receiveErrors([])),
    closeModal: () => dispatch(closeModal()),
    signupForm: (
      <a href="#" onClick={() => dispatch(openModal('signup'))}>Create an Account</a>
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);