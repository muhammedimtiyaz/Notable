import { connect } from 'react-redux';
import CreateRestaurant from './create_restaurant';
import { createRestaurant, receiveRestaurantErrors } from '../../actions/restaurant_actions';


const msp = (state) => ({
  errors: state.errors.restaurant
});

const mdp = dispatch => ({
    createRestaurant: restaurant => dispatch(createRestaurant(restaurant)),
    clearErrors: () => dispatch(receiveRestaurantErrors([])),
});

export default connect(msp, mdp)(CreateRestaurant);