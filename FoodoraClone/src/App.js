import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RestaurantsPage from './restarauntMenu/RestaurantsPage';
import SingleRestaurant from './restarauntMenu/SingleRestaurant';
import './App.css';

import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Navbar from "./navbar.js"
import BrowsingPage from './components/BrowsingPage';
import Checkout from './Checkout';

function App() {
  return (
    <div className="App">
       <Router>
      <Routes>
        <Route path="/" element={<RestaurantsPage />} />
        <Route path="/restaurant/:id" element={<SingleRestaurant />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register />} />
      </Routes>
    </Router>
  
      <BrowsingPage />
      <Navbar />
     
      <Checkout />
    </div>
  )
}

export default App;
