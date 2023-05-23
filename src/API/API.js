import axios from 'axios';

const KEY = '7cac8f2b707803c3d0e6d2661b894935';
const URL = 'https://api.themoviedb.org/3';
const imgURL = 'https://image.tmdb.org/t/p/w500';

// Request fims in trending or by key-word
const fetchFilms = async (filmName, page = 1) => {
  const request = filmName
    ? `${URL}/search/movie?api_key=${KEY}&language=en-US&query=${filmName}&page=${page}`
    : `${URL}/trending/all/day?api_key=${KEY}&page=${page}`;

  try {
    const response = await axios.get(request);
    const takeInfo = results => {
      return results
        .filter(({ poster_path, genre_ids, title, original_title }) => {
          //фільтрація на заповненість даними
          poster_path && genre_ids && (title || original_title);
        })
        .map(({ id, title, original_title }) => {
          ({
            id,
            title: title ? title : original_title,
          });
        });
    };
    return {
      page: response.data.page,
      results: takeInfo(response.data.results),
      total_pages: response.data.total_pages,
    };
  } catch (error) {
    throw new Error(responce.status);
  }
};

// Request by film's ID 
const fetchFilmById = async (filmId, cast=null, reviews=null) => {
    if (cast) {
        return fetchCastFilmById(filmId);
    } else if (reviews) {
        return fetchReviewsFilmById(filmId);
    }

// Common information about film    
  try {
    const response = await axios.get(
      `${URL}/movie/${filmId}?api_key=${KEY}&language=en-US`
    );
    const {
      genres,
      id,
      poster_path,
      release_date = '',
      title,
      overview,
    } = response.data;

    return {
      genres: genres.map(genre => genre.name).join(', '),
      id,
      poster_path: `${imgURL}${poster_path}`,
      year: release_date.slice(0, 4),
      title,
      overview,
    };
    // console.log(newObj);
  } catch (error) {
    throw new Error(responce.status);
  }
};

// Request about casting
const fetchCastFilmById = async filmId => {
  try {
    const response = await axios.get(
      `${URL}/movie/${filmId}/credits?api_key=${KEY}&language=en-US`
    );
    const { cast } = response.data;

    return  cast.map(({name, character}) => ({name, character}))
    
  } catch (error) {
    throw new Error(responce.status);
  }
};

// // Request about reviews
const fetchReviewsFilmById = async filmId => {
  try {
    const response = await axios.get(
      `${URL}/movie/${filmId}/reviews?api_key=${KEY}&language=en-US`
    );
    const { results    } = response.data;

    return  results.map(({author, content}) => ({author, content}))
  } catch (error) {
    throw new Error(responce.status);
  }
};

export { fetchFilms, fetchFilmById };
