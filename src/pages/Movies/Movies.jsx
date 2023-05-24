import React, { useState } from 'react';
import ListFilms from 'components/ListFilms/ListFilms';

function Movies() {
  const [filter, setFilter] = useState('');

  return (
    <div>
      <form>
        <label>
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={setFilter}
          />
          Enter name of film you want to find
        </label>
      </form>
      {/* <ListFilms filter={filter} /> */}
    </div>
  );
}

export default Movies;
