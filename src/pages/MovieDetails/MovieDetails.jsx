import React from 'react';
import GoBack from '../../components/GoBack/GoBack';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchFilmById } from '../../API/API';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MovieDetails() {
  const { movieId } = useParams();
  const [film, setFilm] = useState({});

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  useEffect(() => {
    fetchFilmById(movieId)
      .then(result => setFilm(result))
      .catch(() =>
        toast.error("We can't find any information about your film!")
      );
  }, [movieId]);

  const { poster_path, title, userScore, overview, genres } = film;

  return (
    <section>
      <GoBack to={backLinkHref}>Go back</GoBack>
      <div>
        <img src={poster_path} alt={title} />
        <div>
          <h2>{title}</h2>
          <p>{`User score: ${userScore}`}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres}</p>
        </div>
      </div>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast" movieId={movieId}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" movieId={movieId}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </section>
  );
}

export default MovieDetails;
