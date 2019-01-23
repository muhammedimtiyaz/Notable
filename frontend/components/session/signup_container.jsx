import React from 'react';
import { connect } from "react-redux";
import { signup, removeErrors } from "../../actions/session_action";
import { Link } from 'react-router-dom';
import Signup from "./signup_form";

const msp = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
    navLink: <Link to="/login">log in</Link>,
  };
};

const mdp = dispatch => {
  return {
    createNewUser: (formUser) => dispatch(signup(formUser)),
    removeErrors: () => dispatch(removeErrors()),
  };
};

export default connect(msp, mdp)(Signup);