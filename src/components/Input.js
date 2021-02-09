import React from 'react';
import '../styles/Input.css';

const Input = ({ handleSearch }) => {
  return (
    <input className='search' placeholder='Search..' onChange={handleSearch} />
  );
};

export default Input;
