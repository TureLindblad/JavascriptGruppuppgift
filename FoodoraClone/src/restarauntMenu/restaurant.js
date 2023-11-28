import React, { useState } from 'react';
import MenuItem from './MenuItem';
import '../App.css';

const Restaurant = ({ restaurant, selectedItems}) => {
    console.log('restaurant: ',restaurant);
    console.log('selectedItems:', selectedItems);

    const [itemCounts, setItemCounts] = useState(
        restaurant.menu.reduce((acc, item) => {
            acc[item.namn] = 0;
            return acc;
        },
        {})
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
      <h3>Meny</h3>
      <ul>
        {restaurant.menu.map((item, index) => (
            
              <div key={index}>
              <MenuItem
                namn={item.namn}
                pris={item.pris}
                image={item.bild}
                increaseItems={() => increaseItems(item.namn)}
                decreaseItems={() => decreaseItems(item.namn)}
                count = {itemCounts[item.namn]}
              />
            </div>
          ))}
          </ul>
          </div>
  );
};

export default Restaurant;
