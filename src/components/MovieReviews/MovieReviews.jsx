import React from 'react';
import { fetchReviewsFilmById } from '../../API/API';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from './MovieReviews.module.css';

function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReviewsFilmById(movieId).then(result => setReviews(result));
  }, [movieId]);

  return (
    <>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>Author: {author}</p>
            <p className={css.text}>{content}</p>
          </li>
        ))}
      </ul>
      {reviews.length === 0 && <p>We don't have any reviews for this movie</p>}
    </>
  );
}

export default MovieReviews;
