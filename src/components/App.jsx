import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout'
import Home from '../pages/Home/Home'
import Movies from '../pages/Movies/Movies'
import MovieDetails from './MovieDetails/MovieDetails'
import MovieCast from './MovieCast/MovieCast'
import MovieReviews from './MovieReviews/MovieReviews'

export const App = () => (

  <Routes>
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />} />
      <Route path="movies" element={<Movies />} />
      {/* <Route path="movies/:movieId" element={<MovieDetails />}>
        <Route path='cast' element={<MovieCast/>}/>
        <Route path='reviews' element={<MovieReviews/>}/>
      </Route>  */}
     </Route>
  </Routes>

);
