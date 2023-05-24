import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useEffect } from 'react';
import { fetchFilms} from 'API/API'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation } from 'react-router-dom';


function ListFilms({filter=''}) {
const [films, setfilms] = useState([]);
const location = useLocation();
  
useEffect(() => {
  const result = filter?fetchFilms(filter):fetchFilms();
  
  if (typeof result === "object") { //it is not mistaken result
    setfilms(result);
  } else{
    toast.error("We can't find any film about your reguest")
  }

},[films, filter]);

return (
  <ul >
    {films.map(film => (
      <li key={film.id}>
        <Link to={film.id} state={{from: location}}/>
      </li>
    ))}
  </ul>
);
}

ListFilms.propTypes = {
  filter: PropTypes.string,  

}
    
export default ListFilms

