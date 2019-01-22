import { combineReducers } from "redux";
// import entitiesReducer from "./entities";
import sessionReducer from "./sessions_reducer";

export default combineReducers({
  session: sessionReducer,
});