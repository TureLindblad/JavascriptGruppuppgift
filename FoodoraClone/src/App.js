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
        <Navbar />
          <Routes>
            <Route path="/" element={<BrowsingPage />} />
            <Route path="/SingleRestaurant/:id" element={<SingleRestaurant />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Register />} />
          </Routes>
        
      </Router>
     
      <Checkout />
    </div>
  )
}

export default App;
