import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import Footer from "./footer/footer";
import RestaurantIndexContainer from "./restaurant/restaurant_index_container";
import CreateRestaurant from "./restaurant/create_restaurant_container";
import RestaurantDetailContainer from "./restaurant/restaurant_detail_container";
import UserProfileContainer from "./user/profile_container";
import Homepage from "./homepage/homepage";
import { ProtectedRoute } from '../utils/route_util';
import Modal from "./modal";

const App = () => (
  <div>
    <Modal />
    <header id="top-of-page">
      <Route path="/" component={GreetingContainer} />
    </header>
    <Switch>
      <ProtectedRoute path="/restaurants/new" component={CreateRestaurant} />
      <Route exact path="/restaurants/:restaurantId" component={RestaurantDetailContainer} />
      <ProtectedRoute exact path="/users/:userId" component={UserProfileContainer} />
      <Route path="/restaurants" component={RestaurantIndexContainer} />
      <Route path="/" component={Homepage} />
    </Switch>
    <Footer />
  </div>
);

export default App;
