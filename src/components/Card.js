import React from "react";
import "../styles/Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

const Card = ({ image, title, year, onClick, isFavorite }) => {
  return (
    <div className="card">
      <div className="icon" onClick={onClick}>
        {isFavorite ? (
          <i>
            <FontAwesomeIcon icon={faStarSolid} color="yellow" size="1x" />
          </i>
        ) : (
          <i>
            <FontAwesomeIcon icon={faStarRegular} color="yellow" size="1x" />
          </i>
        )}
      </div>
      <img src={image} alt={title} />
      <div className="info">
        <span className="title">{title}</span>
        <span className="year">{year}</span>
      </div>
    </div>
  );
};

export default Card;
