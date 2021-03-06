import React from 'react';
import { connect } from 'react-redux';
import { searchRestaurants } from '../../actions/restaurant_actions';

import { openModal, closeModal } from '../../actions/modal_actions';

import FeaturedAreas from './featured_areas';

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  searchRestaurants: (searchTerm) =>
    dispatch(searchRestaurants(searchTerm)),
});

export default connect (
  null,
  mapDispatchToProps
)(FeaturedAreas);