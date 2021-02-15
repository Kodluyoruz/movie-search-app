import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const MovieContext = createContext();

const MovieApp = ({ children }) => {
  const [favorite, setFavorite] = useState([]);
  const [movies, setMovies] = useState();
  const [search, setSearch] = useState('');

  const fetchMovies = async (searchValue) => {
    const response = await axios(
      `https://www.omdbapi.com/?apikey=b85e1d74&s=${searchValue}`
    );
    const data = response.data;
    setMovies(data.Search);
  };

  const removeFavoriteMovie = (movie) => {
    movie.isFavorite = false;
    const newFavoriteList = favorite.filter(
      (fav) => fav.imdbID !== movie.imdbID
    );
    setFavorite(newFavoriteList);
  };

  const addFavoriteMovie = (movie) => {
    movie.isFavorite = true;
    const newFavoriteList = [...favorite, movie];
    setFavorite(newFavoriteList);
  };

  const favoriteHandler = (movie) => {
    if (favorite.includes(movie)) {
      removeFavoriteMovie(movie);
    } else {
      addFavoriteMovie(movie);
    }
  };
  useEffect(() => {
    fetchMovies(search);
  }, [search]);

  return (
    <MovieContext.Provider
      value={{
        setSearch,
        movies,
        favorite,
        favoriteHandler,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieApp;
