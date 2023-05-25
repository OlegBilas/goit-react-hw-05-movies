import axios from 'axios';

const KEY = '7cac8f2b707803c3d0e6d2661b894935';
const URL = 'https://api.themoviedb.org/3';
const imgURL = 'https://image.tmdb.org/t/p/w500';
const smallImgURL = 'https://image.tmdb.org/t/p/w200';

// Request fims in trending or by key-word
const fetchFilms = async (filmName, page = 1) => {
  const request = filmName
    ? `${URL}/search/movie?api_key=${KEY}&language=en-US&query=${filmName}&page=${page}`
    : `${URL}/trending/all/day?api_key=${KEY}&page=${page}`;

  
    const response = await axios.get(request);
    const takeInfo = results => {
      return results
        .filter(
          ({ poster_path, genre_ids, title, original_title }) =>
            //фільтрація на заповненість даними
            poster_path && genre_ids && (title || original_title)
        )
        .map(({ id, title, original_title }) => ({
          id,
          title: title ? title : original_title,
        }));
    };
   
    return takeInfo(response.data.results);
};

// Request by film's ID (сommon information about film)
const fetchFilmById = async filmId => {
    const response = await axios.get(
      `${URL}/movie/${filmId}?api_key=${KEY}&language=en-US`
    );
    const {
      genres,
      id,
      poster_path,
      release_date = '',
      title,
      vote_average,
      overview,
    } = response.data;

    return {
      id,
      poster_path: `${imgURL}${poster_path}`,
      title: `${title} (${release_date.slice(0, 4)})`,
      userScore: `${Math.round(vote_average * 10)}%`,
      overview,
      genres: genres.map(genre => genre.name).join(' '),
    };

};

// Request about casting
const fetchCastFilmById = async filmId => {
  
    const response = await axios.get(
      `${URL}/movie/${filmId}/credits?api_key=${KEY}&language=en-US`
    );
    const { cast } = response.data;

    return cast.map(({ id, name, profile_path, character }) => ({
      id,
      name,
      character,
      photo: profile_path?`${smallImgURL}${profile_path}`:null,
    }));
  
};

// // Request about reviews
const fetchReviewsFilmById = async (filmId, page = 1) => {
  
    const response = await axios.get(
      `${URL}/movie/${filmId}/reviews?api_key=${KEY}&language=en-US&page=${page}`
    );
    const { results } = response.data;

    return results.map(({ id, author, content }) => ({ id, author, content }));
  
};

export { fetchFilms, fetchFilmById, fetchCastFilmById, fetchReviewsFilmById };
