import React, { useContext } from "react";
import Input from "../components/Input";
import { MovieContext } from "../context/MovieContext";
import Card from "../components/Card";
import "../styles/Layout.css";
const Home = () => {
  const { setSearch, movies, favoriteHandler } = useContext(MovieContext);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <Input handleSearch={handleSearch} />
      {/* conditional rendering */}
      {movies?.Search?.length >0  ? (
        <div className="layout">
          {movies?.Search?.map((movie) => {
            return (
              <Card
                key={movie.imdbID}
                image={movie.Poster}
                title={movie.Title}
                year={movie.Year}
                onClick={() => favoriteHandler(movie)}
                isFavorite={movie.isFavorite}
              />
            );
          })}
        </div>
      ) : (
        <div className="search_warning">Search movies!!</div>
      )}
    </div>
  );
};

export default Home;
