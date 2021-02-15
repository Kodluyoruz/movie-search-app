import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import Card from '../components/Card';
import '../styles/Favorite.css';

const Favorite = () => {
  const { favorite, favoriteHandler } = useContext(MovieContext);

  return (
    <>
      {favorite?.length > 0 ? (
        <div className='favorites'>
          {favorite.map((movie) => (
            <Card
              key={movie.imdbID}
              image={movie.Poster}
              title={movie.Title}
              year={movie.Year}
              onClick={() => favoriteHandler(movie)}
              isFavorite={movie.isFavorite}
            />
          ))}
        </div>
      ) : (
        <div className='favorite_warning'> There is no Favorite Movie </div>
      )}
    </>
  );
};

export default Favorite;
