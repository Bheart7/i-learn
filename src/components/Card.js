import React from 'react';

const Card = ({ id, title, description, color, button }) => {
  return (
    <div className='container' style={{ backgroundColor: color }}>
      <div className={`card card--${id}`}>
        <h1 className='card__title'>{title}</h1>
        <p className='card__description'>{description}</p>
        <button className={`btn btn--${id}`}>{button}</button>
      </div>
    </div>
  );
};

export default Card;
