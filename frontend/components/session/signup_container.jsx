import React from 'react';
import { connect } from "react-redux";
import { signup, removeErrors } from "../../actions/session_action";
import { closeModal } from "../../actions/modal_actions";
import { Link } from 'react-router-dom';
import Signup from "./signup_form";

const msp = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
  };
};

const mdp = dispatch => {
  return {
    createNewUser: (formUser) => dispatch(signup(formUser)),
    removeErrors: () => dispatch(removeErrors()),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(msp, mdp)(Signup);