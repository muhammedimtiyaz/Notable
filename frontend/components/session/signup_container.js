import { connect } from "react-redux";
import { createNewUser } from "../../actions/session_action";
import Signup from "./signup";

const mdp = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
});

export default connect(null, mdp)(Signup);