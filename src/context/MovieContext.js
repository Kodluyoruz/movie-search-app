import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const MovieContext = createContext();

const MovieApp = ({ children }) => {
  useEffect(() => {
    const fetchMovies = async (search) => {
      const response = await axios(
        `https://www.omdbapi.com/?apikey=b85e1d74&s=${search}`
      );
      const data = await response.data;
      setMovies(data);
    };
    fetchMovies();
  }, [search]);
  const [favorite, setFavorite] = useState([]);
  const [movies, setMovies] = useState();
  const [search, setSearch] = useState('');
  return (
    <MovieContext.Provider
      value={{
        setFavorite,
        favorite,
        setSearch,
        search,
        fetchMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieApp;
