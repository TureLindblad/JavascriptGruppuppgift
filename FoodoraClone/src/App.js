import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RestaurantsPage from './restarauntMenu/RestaurantsPage';
import SingleRestaurant from './restarauntMenu/SingleRestaurant';
import './App.css';
import Navbar from "./navbar.js"
import BrowsingPage from './components/BrowsingPage';
 
function App() {
  
  return (
    <div className="App">
      
      <Router>
          <Routes>
            <Route path="/" element={<RestaurantsPage />} />
            <Route path="/restaurantMenu/:id" element={<SingleRestaurant />} />
          </Routes>
        
      </Router>
    </div>
    
  );
};

export default App;
