import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import restaurants from './Restaurants';
import Restaurant from './restaurant';
import '../App.css';    

const SingleRestaurant = () => {
  const { id } = useParams();
  const restaurantId = parseInt(id, 10);

  const restaurant = restaurants.find((r) => r.id === restaurantId);

  if (!restaurant) {
    return <div>Restaurang inte hittad</div>;
  }

return (
    <div >
      <h1 className = "namnet">{restaurant.namn}</h1>
      <Restaurant restaurant={restaurant}/>
    </div>
  );
};

export default SingleRestaurant;