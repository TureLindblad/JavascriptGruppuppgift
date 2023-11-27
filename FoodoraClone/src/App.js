import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RestaurantsPage from './restarauntMenu/RestaurantsPage';
import SingleRestaurant from './restarauntMenu/SingleRestaurant';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RestaurantsPage />} />
        <Route path="/restaurant/:id" element={<SingleRestaurant />} />
      </Routes>
    </Router>
  );
};

export default App;
