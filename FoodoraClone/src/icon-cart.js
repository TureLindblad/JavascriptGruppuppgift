import React, { useState, useEffect } from 'react';
import './icon-cart.css';
import { useNavigate } from 'react-router-dom';
const IconCart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    address: ''
  });
  const [deliveryMethod, setDeliveryMethod] = useState('standard');
  const [balance, setBalance] = useState(1000);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const deliveryOptions = {
    standard: 15,
    express: 50,
    hämta: 0
  };

  useEffect(() => {
    // Load cart from local storage when component mounts
    const storedCart = localStorage.getItem('kundvagn');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
    updateLocalStorage([...cart, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    updateLocalStorage(newCart);
  };

  const increaseQuantity = (index) => {
    const newCart = [...cart];
    newCart[index].quantity += 1;
    setCart(newCart);
    updateLocalStorage(newCart);
  };

  const decreaseQuantity = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
    } else {
      newCart.splice(index, 1);
    }
    setCart(newCart);
    updateLocalStorage(newCart);
  };

  const calculateTotal = () => {
    const productsTotal = cart.reduce((total, product) => total + product.price * product.quantity, 0);
    const deliveryTotal = deliveryOptions[deliveryMethod] || 0;
    return productsTotal + deliveryTotal;
  };

  const handleCheckout = () => {
    const total = calculateTotal();
    if (total <= balance) {
      setBalance(balance - total);
      console.log('Transaction completed!');
      console.log('User data:', userData);
      console.log('Delivery method:', deliveryMethod);
      console.log('Delivery address:', userData.address);
      console.log('Cart:', cart);
      console.log('Delivery cost:', deliveryOptions[deliveryMethod]);
      console.log('Total to pay:', total);

      setCart([]);
      setUserData({
        name: '',
        email: '',
        address: ''
      });

      setIsCartVisible(false);

      // Clear local storage after successful checkout
      localStorage.removeItem('kundvagn');

      navigate('/checkout');
    } else {
      console.log('Insufficient balance to complete the transaction.');
    }
  };

  const updateLocalStorage = (items) => {
    localStorage.setItem('kundvagn', JSON.stringify(items));
  };

  return (
    <div className="container">
      <div className="cart-icon" onClick={() => setIsCartVisible(!isCartVisible)}>
        🛒
      </div>
      <div className={`cart-container ${isCartVisible ? 'visible' : ''}`}>
        <h2>Kundkorg</h2>
        <ul>
          {cart.map((product, index) => (
            <li key={index}>
              {product.name} - Price: {product.price} kr - Quantity: {product.quantity}
              <button onClick={() => increaseQuantity(index)}>+</button>
              <button onClick={() => decreaseQuantity(index)}>-</button>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
        <h2>Leveranssätt</h2>
        <label>
          Leveranssätt:
          <select value={deliveryMethod} onChange={(e) => setDeliveryMethod(e.target.value)}>
            <option value="standard">Standard delivery</option>
            <option value="express">Express delivery</option>
            <option value="hämta">Pick up in store</option>
          </select>
        </label>
        <h2>Saldo: {balance} kr</h2>
        <h2>Att Betala: {calculateTotal()} kr</h2>
        <button onClick={handleCheckout}>Till Kassan</button>
      </div>
    </div>
  );
};

export default IconCart;

