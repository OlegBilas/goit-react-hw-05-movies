import React, { useState } from 'react';
import ListFilms from 'components/ListFilms/ListFilms';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

function Movies() {
  const [filter, setFilter] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    setFilter(query);
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const q = e.target.elements.filter.value.trim();
    if (q) {
      setFilter(q);
      setSearchParams({ query: q });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter name of film you want to find
          <input type="text" name="filter" value={filter} />
        </label>
        <button type="submit">Search</button>
      </form>
      {filter && <ListFilms filter={filter} />}
    </div>
  );
}

export default Movies;
