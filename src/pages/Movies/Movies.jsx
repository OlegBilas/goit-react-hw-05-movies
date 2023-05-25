import React, { useState } from 'react';
import ListFilms from 'components/ListFilms/ListFilms';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import css from './Movies.module.css';

function Movies() {
  const [filter, setFilter] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleSubmit = e => {
    e.preventDefault();
    const q = e.target.elements.search.value.trim();
    if (q) {
      setFilter(q);
      setSearchParams({ query: q });
    }
  };

  useEffect(() => {
    setFilter(query);
  }, [query]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={css.search}
          type="text"
          name="search"
          placeholder="Enter name of film you want to find"
        />
        <button type="submit">Search</button>
      </form>
      {filter && <ListFilms filter={filter} />}
    </div>
  );
}

export default Movies;
