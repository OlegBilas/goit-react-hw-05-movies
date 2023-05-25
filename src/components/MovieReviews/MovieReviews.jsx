import React from 'react';
import PropTypes from 'prop-types';
import { fetchReviewsFilmById } from '../../API/API';

function MovieReviews({ movieId}) {
  return <div></div>;
}

MovieReviews.propTypes = {
    movieId: PropTypes.string.isRequired,
};

export default MovieReviews;
