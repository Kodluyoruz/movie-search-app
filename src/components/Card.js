import React from 'react';
import '../styles/Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

const Card = ({ image, title, year }) => {
  return (
    <div className='card'>
      <div className='icon'>
        <i>
          <FontAwesomeIcon icon={faStarSolid} color='yellow' size='s' />
        </i>
      </div>
      <img src={image} alt={title} />
      <div className='info'>
        <span className='title'>{title}</span>
        <span className='year'>{year}</span>
      </div>
    </div>
  );
};

export default Card;
