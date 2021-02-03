import React, { useContext } from 'react';
import Input from '../components/Input';
import { MovieContext } from '../context/MovieContext';
import Card from '../components/Card';

const Home = () => {
  const { setSearch, movies } = useContext(MovieContext);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <Input handleSearch={handleSearch} />
      {/* conditional rendering */}
      {movies?.Search?.map((movie) => {
        return (
          <Card
            key={movie.imdbID}
            image={movie.Poster}
            title={movie.Title}
            year={movie.Year}
          />
        );
      })}
    </div>
  );
};

export default Home;
