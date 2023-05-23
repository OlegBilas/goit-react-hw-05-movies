import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useEffect } from 'react';
import { fetchFilms, fetchFilmById } from 'API/API'


function ListFilms(props) {
const [films, setfilms] = useState('');

useEffect(() => {
    
},[films])


  return (
    <div>
      
    </div>
  )
}

ListFilms.propTypes = {
    

}
    
export default ListFilms

