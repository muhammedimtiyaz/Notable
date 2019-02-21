import React from 'react';
import { connect } from "react-redux";
import { signup, receiveErrors } from "../../actions/session_action";
import { closeModal } from "../../actions/modal_actions";
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
    removeErrors: () => dispatch(receiveErrors([])),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(msp, mdp)(Signup);