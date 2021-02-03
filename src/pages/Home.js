import React, { useContext } from 'react';
import Input from '../components/Input';
import { MovieContext } from '../context/MovieContext';

const Home = () => {
  const { setSearch, movies } = useContext(MovieContext);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <div className=''>
        <Input handleSearch={handleSearch} />
      </div>
      <div className=''></div>
    </div>
  );
};

export default Home;
