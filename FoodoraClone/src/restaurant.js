import React from "react";
import Menu from "./menu";

class Restaurant extends React.Component{
    render(){

        const restaurantName = "Kalles Korv Kiosk";
        const menuItems = [
            {id: 1, name: 'Korv med mos', ingredients: ['Korv', 'Potatismos']},
            {id: 2, name: 'Ostburgare', ingredients: ['Nötkött', 'Sallad', 'Lök']}
        ];
        
        return(
            <div>
            <h1>{restaurantName}</h1>
            <Menu items = {menuItems} />
            </div>
            );
        }
    }

    export default Restaurant;