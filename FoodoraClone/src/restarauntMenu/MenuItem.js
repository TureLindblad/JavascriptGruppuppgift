import React from 'react';
import '../App.css';

const MenuItem = ({ namn, pris, menuImage, increaseItems, decreaseItems, count }) => {
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
        <button className = "knappn" onClick={decreaseItems}> <b>-</b> Ta bort ur kundvagn </button>
        </div>
        <div>
        <br></br>
        {count} st i kundvagn :)
        </div>
        <br></br>
        <br></br> 
      </div>
  );
};

export default MenuItem;