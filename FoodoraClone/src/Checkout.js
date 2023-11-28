import React, { useState } from 'react';
import './Checkout.css';
import MenuItem from './restarauntMenu/MenuItem';
import Restaurants from './restarauntMenu/Restaurants';

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    address: ''
  });
  const [deliveryMethod, setDeliveryMethod] = useState('standard');
  const [balance, setBalance] = useState(1000);

  const deliveryOptions = {
    standard: 15,
    express: 50,
    hämta: 0
  };

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const increaseQuantity = (index) => {
    const newCart = [...cart];
    newCart[index].quantity += 1;
    setCart(newCart);
  };

  const decreaseQuantity = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
      setCart(newCart);
    }
  };

  const calculateTotal = () => {
    const productsTotal = cart.reduce((total, product) => total + product.pris * product.quantity, 0);
    const deliveryTotal = deliveryOptions[deliveryMethod] || 0;
    return productsTotal + deliveryTotal;
  };

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
    <div className="container">
      <div className="background-image"></div>
      <div className="kort">
        <h2>Användaruppgifter</h2>
        <form>
          {}
        </form>

        <h2>Leveranssätt:</h2>
        <label>
          {}
        </label>

        <h2>Kundkorg</h2>
        <ul>
          {cart.map((product, index) => (
            <MenuItem
              key={index}
              namn={product.namn}
              pris={product.pris}
              increaseItems={() => increaseQuantity(index)}
              decreaseItems={() => decreaseQuantity(index)}
              count={product.quantity}
            />
          ))}
        </ul>

        <h2>Saldo: {balance} kr</h2>
        <h2>Totalt att betala: {calculateTotal()} kr</h2>

        <button onClick={handleCheckout}>Betala</button>
      </div>
    </div>
  );
};

export default Checkout;

