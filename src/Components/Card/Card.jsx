import React from 'react';
import "./Card.scss";

const Card = ({img}) => {
  return (
    <>
     <img className='card' src={img} alt="cover" />
    </>
  )
}

export default Card;
