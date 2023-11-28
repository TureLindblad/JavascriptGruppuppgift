import React from 'react';

const MenuItem = ({ namn, pris, increaseItems, decreaseItems, count }) => {
  return (
    <li>
      <div className='menuItem'>
        <span>{namn}</span> 
        <span>{pris} SEK</span>
      </div>
      <div>
        <button onClick={increaseItems}>+</button>
        {count} st
        <button onClick={decreaseItems}>-</button>
      </div>
    </li>
  );
};

export default MenuItem;
