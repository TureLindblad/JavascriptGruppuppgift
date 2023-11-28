import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import restaurants from './Restaurants';
import Restaurant from './restaurant';
import '../App.css';    
import Navbar from '../navbar';

const SingleRestaurant = () => {
  const { id } = useParams();
  const restaurantId = parseInt(id, 10);

  const restaurant = restaurants.find((r) => r.id === restaurantId);

  if (!restaurant) {
    return <div>Restaurang inte hittad</div>;
  }

return (
    <div >
        <Navbar />
        <main className="browsingMain">
        <h1 className = "namnet">{restaurant.namn}</h1>
        <Restaurant restaurant={restaurant}/>    
        </main>
    </div> 
  );
};

export default SingleRestaurant;