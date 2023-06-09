import { Suspense } from 'react';
import GoBack from '../../components/GoBack/GoBack';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchFilmById } from '../../API/API';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../components/Loader/Loader';
import css from './MovieDetails.module.css';

function MovieDetails() {
  const { movieId } = useParams();
  const [film, setFilm] = useState({});

  const location = useLocation();

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
      <GoBack to={location.state ? location.state : '/movies'}>Go back</GoBack>
      <div className={css.wrapper}>
        <img className={css.poster} src={poster_path} alt={title} />
        <div>
          <h2>{title}</h2>
          <p>{`User score: ${userScore}`}</p>
          <h3>Overview</h3>
          <p className={css.text}>{overview}</p>
          <h3>Genres</h3>
          <p className={css.text}>{genres}</p>
        </div>
      </div>
      <div className={css.wrapperAdditional}>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </section>
  );
}

export default MovieDetails;
