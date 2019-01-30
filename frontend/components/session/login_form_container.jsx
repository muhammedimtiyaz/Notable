import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, removeErrors } from '../../actions/session_action';
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
    removeErrors: () => dispatch(removeErrors()),
    closeModal: () => dispatch(closeModal()),
    signupForm: (
      <a href="#" onClick={() => dispatch(openModal('signup'))}>Create an Account</a>
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);