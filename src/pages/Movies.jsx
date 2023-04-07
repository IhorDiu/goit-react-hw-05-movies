import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/api';

import { toastInfoMessage } from '../services/toast';

import MoviesHomeList from 'components/MoviesHomeList/MoviesHomeList';
import Searchbar from 'components/Searchbar/Searchbar';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  // const searchParamsName = searchParams.get('name') ?? '';

  useEffect(() => {}, []);

  useEffect(() => {
    const searchMoviesList = async () => {
      try {
        const data = await searchMovies(query);
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
    searchMoviesList();
  }, [query, searchParams]);

  const searchQuery = inputValue => {
    if (query === inputValue) {
      return toastInfoMessage('You made the same request');
    }

    setQuery(inputValue);
  };

  return (
    <div>
      <Searchbar inputValue={searchQuery} />
      <MoviesHomeList movies={movies} />
    </div>
  );
};
export default Movies;
