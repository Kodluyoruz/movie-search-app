import React from 'react';
import '../styles/Card.css';
const Card = ({ image, title, year }) => {
  return (
    <div className='card'>
      <div className='icon'>X</div>
      <img src={image} alt={title} />
      <div className='info'>
        <span className='title'>{title}</span>
        <span className='year'>{year}</span>
      </div>
    </div>
  );
};

export default Card;
