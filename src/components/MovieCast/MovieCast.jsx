import React from 'react';
import { fetchCastFilmById } from '../../API/API';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MovieCast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchCastFilmById(movieId).then(result => setCast(result));
  }, [movieId]);

  return (
    <ul>
      {cast.map(({ id, name, photo, character }) => (
        <li key={id}>
          {photo && <img src={photo} alt={name} />}
          <p>Actor: {name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
}

export default MovieCast;
