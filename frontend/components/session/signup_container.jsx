import React from 'react';
import { connect } from "react-redux";
import { createNewUser } from "../../actions/session_action";
import { Link } from 'react-router-dom';
import Signup from "./signup_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
    navLink: <Link to="/login">log in</Link>,
  };
};

const mdp = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);