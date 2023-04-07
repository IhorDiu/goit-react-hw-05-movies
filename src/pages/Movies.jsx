import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/api';

import { toastInfoMessage } from '../services/toast';

import MoviesList from 'components/MoviesList/MoviesList';
import Searchbar from 'components/Searchbar/Searchbar';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const queryString = searchParams.get('query') ?? '';

  useEffect(() => {
    const searchMoviesList = async () => {
      try {
        const data = await searchMovies(queryString);
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };

    searchMoviesList();
  }, [queryString]);

  const updateQueryString = inputValue => {
    if (queryString === inputValue) {
      return toastInfoMessage('You made the same request');
    }
    const nextQueryString = inputValue !== '' ? { query: inputValue } : {};
    setSearchParams(nextQueryString);
  };

  return (
    <div>
      <Searchbar inputValue={updateQueryString} />
      <MoviesList movies={movies} />
    </div>
  );
};
export default Movies;
