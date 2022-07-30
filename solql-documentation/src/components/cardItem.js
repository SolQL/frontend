import React from 'react';


const CardItem = ({ title, description }) => {
  return (
    <div class="cardItem">
      <div class="card__header">
        <h3>{title}</h3>
      </div>
      <div class="card__body">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardItem;
