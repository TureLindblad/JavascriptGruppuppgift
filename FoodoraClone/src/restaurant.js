import React from "react";
import Menu from "./menu";
import logo from "./logo.svg";

        const RestaurantItems = [
            {id: 1, name: 'Kalles korvkiosk', image:{logo},  ingredients: ['Korv', 'Potatismos']},
            {id: 2, name: 'Pelles peniskorv', image:{logo}, ingredients: ['Nötkött', 'Sallad', 'Lök']}
        ];
        
        return(
            <div>
            <Menu items = {menuItems} />
            </div>
            );
