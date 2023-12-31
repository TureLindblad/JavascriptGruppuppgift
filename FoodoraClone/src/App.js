import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RestaurantsPage from './restarauntMenu/RestaurantsPage';
import SingleRestaurant from './restarauntMenu/SingleRestaurant';
import './App.css';
import Register from "./Register";
import Login from "./Login";
import BrowsingPage from './components/BrowsingPage';
import Checkout from './Checkout';

function App() {
  return (
    <div className="App">
       <Router>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/BrowsingPage" element={<BrowsingPage />} />
            <Route path="/resturants" element={<RestaurantsPage />} />
            <Route path="/SingleRestaurant/:id" element={<SingleRestaurant />} />
            <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
