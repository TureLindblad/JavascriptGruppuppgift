import React, { useState } from 'react';
import './Checkout.css';
import Navbar from './navbar';

const Checkout = () => {
  // State-hooks för att hantera kundkorg, användaruppgifter, leveranssätt och saldo
  const [cart, setCart] = useState([]);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    address: ''
  });
  const [deliveryMethod, setDeliveryMethod] = useState('standard');
  const [balance, setBalance] = useState(1000);

  // Priser för olika leveransalternativ
  const deliveryOptions = {
    standard: 15,
    express: 50,
    hämta: 0
  };

  // Funktion för att lägga till produkt i kundkorgen
  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  // Funktion för att ta bort produkt från kundkorgen
  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  // Funktion för att öka antalet av en produkt i kundkorgen
  const increaseQuantity = (index) => {
    const newCart = [...cart];
    newCart[index].quantity += 1;
    setCart(newCart);
  };

  // Funktion för att minska antalet av en produkt i kundkorgen
  const decreaseQuantity = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
      setCart(newCart);
    }
  };

  // Funktion för att beräkna det totala beloppet att betala
  const calculateTotal = () => {
    const productsTotal = cart.reduce((total, product) => total + product.price * product.quantity, 0);
    const deliveryTotal = deliveryOptions[deliveryMethod] || 0;
    return productsTotal + deliveryTotal;
  };

  // Funktion för att hantera genomförd transaktion
  const handleCheckout = () => {
    const total = calculateTotal();
    if (total <= balance) {
      setBalance(balance - total);
      console.log('Transaktion genomförd!');
      console.log('Användaruppgifter:', userData);
      console.log('Leveranssätt:', deliveryMethod);
      console.log('Leveransadress:', userData.address);
      console.log('Varukorg:', cart);
      console.log('Leveranskostnad:', deliveryOptions[deliveryMethod]);
      console.log('Totalt att betala:', total);
      // Återställ varukorgen och användaruppgifterna efter transaktionen
      setCart([]);
      setUserData({
        name: '',
        email: '',
        address: ''
      });
    } else {
      console.log('Otillräckligt saldo för att genomföra transaktionen.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="background-image"></div>
        <div className="kort">
          <h2>Användaruppgifter</h2>
          <form>
            <label>
              Namn:
              <input type="text" name="name" value={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
            </label>
            <br />
            <label>
              E-post:
              <input type="email" name="email" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
            </label>
            <br />
            <label>
              Adress:
              <input type="text" name="address" value={userData.address} onChange={(e) => setUserData({ ...userData, address: e.target.value })} />
            </label>
          </form>

          <h2>Leveranssätt:</h2>
          <label>
            <select value={deliveryMethod} onChange={(e) => setDeliveryMethod(e.target.value)}>
              <option value="standard">Standard leverans</option>
              <option value="express">Express leverans</option>
              <option value="hämta">Hämta i butik</option>
            </select>
          </label>

          <h2>Kundkorg</h2>
          <ul>
            {cart.map((product, index) => (
              <li key={index}>
                {product.name} - Pris: {product.price} kr - Antal: {product.quantity}
                <button onClick={() => increaseQuantity(index)}>+</button>
                <button onClick={() => decreaseQuantity(index)}>-</button>
                <button onClick={() => removeFromCart(index)}>Ta bort</button>
              </li>
            ))}
          </ul>

          <h2>Saldo: {balance} kr</h2>
          <h2>Totalt att betala: {calculateTotal()} kr</h2>

          <button onClick={handleCheckout}>Betala</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
