import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session/signup_container';
import LogInFormContainer from './session/login_form_container';
// import SearchContainer from './search/search_container';
// import BenchShowContainer from './bench_show/bench_show_container';
// import BenchFormContainer from './bench_form/bench_form_container';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import Modal from "./modal";

const App = () => (
  <div>
    <Modal />
    <header>
      <Link to="/" className="header-link">
        <h1>Notable</h1>
      </Link>
      <GreetingContainer />
    </header>
    <Switch>
    </Switch>
  </div>
);

export default App;

/* <AuthRoute exact path="/login" component={LogInFormContainer} />
<AuthRoute exact path="/signup" component={SignUpFormContainer} /> */