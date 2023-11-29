import React from 'react';
import '../App.css';

const MenuItem = ({ namn, pris, menuImage, decreaseItems,increaseItems, count }) => {
  const addToCart = () => {
    const item = { name: namn, price: pris };
    const existingCart = JSON.parse(localStorage.getItem('kundvagn')) || [];
    const updatedCart = [...existingCart, item];
    localStorage.setItem('kundvagn', JSON.stringify(updatedCart));
  };

  return (

    <div className="menyn">
        <img src={menuImage} className="menyBilder"></img>
        <br></br>
        <br></br>
        
        <div className="menyText">{namn}</div>
        <br></br>
        <br></br>
        <div className="menyPris">
        <button className = "knappn" onClick={increaseItems}>Lägg till i kundvagn <b>+</b></button>
        {pris} SEK
        <button className="knappn" onClick={decreaseItems}>
          <b>-</b> Ta bort ur kundvagn
        </button>
      </div>
      <div>
        {count} st i kundvagn
      </div>
    </div>
  );
};

export default MenuItem;
