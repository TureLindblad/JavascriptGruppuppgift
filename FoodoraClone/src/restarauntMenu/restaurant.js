import React, { useState } from 'react';
import MenuItem from './MenuItem';
import '../App.css';
import restaurants from './Restaurants';

const Restaurant = ({ restaurant, addToCart }) => {
  const [itemCounts, setItemCounts] = useState(
    restaurant.menu.reduce((acc, item) => {
      acc[item.namn] = 0;
      return acc;
    }, {})
  );

  const increaseItems = (itemName) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [itemName]: prevCounts[itemName] + 1,
    }));
  };

  const decreaseItems = (itemName) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [itemName]: Math.max(0, prevCounts[itemName] - 1),
    }));
  };

  return (
    <div>
      <main className='browsingMain'>
      
        {restaurant.menu.map((item, index) => (
          <div key={index}>
            <MenuItem
              namn={item.namn}
              pris={item.pris}
              menuImage={item.menuImage}
              increaseItems={() => increaseItems(item.namn)}
              decreaseItems={() => decreaseItems(item.namn)}
              count={itemCounts[item.namn]}
              addToCart={addToCart}  // Viktigt: Skicka addToCart som en egenskap till MenuItem
            />
          </div>
        ))}
      </main>
    </div>
  );
};

export default Restaurant;
