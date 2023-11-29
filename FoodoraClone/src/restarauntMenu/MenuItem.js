import React from 'react';
import '../App.css';

const MenuItem = ({ namn, pris, image, decreaseItems, count }) => {
  const addToCart = () => {
    const item = { name: namn, price: pris }; // Update property names here
    const existingCart = JSON.parse(localStorage.getItem('kundvagn')) || [];
    const updatedCart = [...existingCart, item];
    localStorage.setItem('kundvagn', JSON.stringify(updatedCart));
  };

  return (
    <div className="menyn">
      <img src={image} className="menyBilder" alt="Food"></img>
      <div className="menyText">{namn}</div>
      <div className="menyPris">
        <button className="knappn" onClick={addToCart}>
          Lägg till i kundvagn <b>+</b>
        </button>
        {pris} SEK
        <button className="knappn" onClick={decreaseItems}>
          <b>-</b> Ta bort ur kundvagn
        </button>
      </div>
      <div>
        {count} st i kundvagn :)
      </div>
    </div>
  );
};

export default MenuItem;
