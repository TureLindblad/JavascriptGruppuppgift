import React from 'react';

const MenuItem = ({ namn, pris, image, increaseItems, decreaseItems, count }) => {
  return (

    <ul>
      <div>
        <span>{namn}</span>
        <span>{pris} SEK</span>
        <button className="knappn" onClick={increaseItems}>+</button>
        {count} st
        <button className ="knappn" onClick={decreaseItems}>-</button>
      </div>
    </ul>

  );
};

export default MenuItem;