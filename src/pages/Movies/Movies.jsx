import React, { useState } from 'react';
import ListFilms from 'components/ListFilms/ListFilms';

function Movies() {
  const [filter, setFilter] = useState('');

  const handleChangeInput = (e)=>{
    setFilter(e.target.value)
  }
  return (
    <div>
      <form>
        <label>
          Enter name of film you want to find
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={handleChangeInput}
          />
        </label>
      </form>
      {filter && <ListFilms filter={filter} />}
    </div>
  );
}

export default Movies;
