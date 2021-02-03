import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const MovieContext = createContext();

const MovieApp = ({ children }) => {
  const [favorite, setFavorite] = useState([]);
  const [movies, setMovies] = useState();
  const [search, setSearch] = useState('harry');

  const fetchMovies = async (searchValue) => {
    const response = await axios(
      `https://www.omdbapi.com/?apikey=b85e1d74&s=${searchValue}`
    );
    const data = await response.data;
    setMovies(data);
    console.log(movies);
  };
  useEffect(() => {
    fetchMovies(search);
  }, [search]);

  return (
    <MovieContext.Provider
      value={{
        setFavorite,
        favorite,
        setSearch,
        search,
        movies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieApp;
