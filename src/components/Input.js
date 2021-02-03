import React from 'react';

const Input = ({ handleSearch }) => {
  return (
    <input className='search' placeholder='Search..' onChange={handleSearch} />
  );
};

export default Input;
