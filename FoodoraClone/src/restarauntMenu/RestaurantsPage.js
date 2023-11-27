import React from 'react';
import { Link } from 'react-router-dom';
import { restaurants } from './Restaurants';

const RestaurantsPage = () => {
  return (
    <div>
      <h1>Restaurants</h1>
      {restaurants.map((restaurant) => (
        <div key={restaurant.id}>
          <h2>
            <Link to={`/restaurant/${restaurant.id}`}>{restaurant.namn}</Link>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default RestaurantsPage;
