import React from 'react';
import { Link } from 'react-router-dom';
import Restaurants from './Restaurants.js';

const RestaurantsPage = () => {
  return (
    <div>
      <h1>Restaurants</h1>
      {Restaurants.map((restaurant) => (
        <div key={restaurant.id}>
          <h2>
            <Link to={`/Restaurants/${restaurant.id}`}>{restaurant.namn}</Link>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default RestaurantsPage;
